class SimpleSelect {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.trigger = wrapper.querySelector(".select-trigger");
    this.dropdown = wrapper.querySelector(".select-dropdown");
    this.selectedValueEl = wrapper.querySelector(".selected-value");
    this.options = Array.from(wrapper.querySelectorAll(".select-option"));

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.trigger.addEventListener("click", () => this.toggleDropdown());
    this.trigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggleDropdown();
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!this.wrapper.contains(e.target)) {
        this.closeDropdown();
      }
    });

    this.options.forEach((option) => {
      option.addEventListener("click", () => this.selectOption(option));
      option.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.selectOption(option);
        }
      });
    });

    // Keyboard navigation
    this.trigger.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          this.openDropdown();
          this.focusFirstOption();
          break;
        case "ArrowUp":
          e.preventDefault();
          this.openDropdown();
          this.focusLastOption();
          break;
      }
    });

    this.options.forEach((option, index) => {
      option.setAttribute("tabindex", "-1");
      option.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault();
            this.focusNextOption(index);
            break;
          case "ArrowUp":
            e.preventDefault();
            this.focusPreviousOption(index);
            break;
          case "Escape":
            e.preventDefault();
            this.closeDropdown();
            this.trigger.focus();
            break;
        }
      });
    });
  }

  toggleDropdown() {
    this.trigger.classList.toggle("open");
    this.dropdown.classList.toggle("open");
    this.trigger.setAttribute(
      "aria-expanded",
      this.dropdown.classList.contains("open"),
    );
  }

  openDropdown() {
    this.trigger.classList.add("open");
    this.dropdown.classList.add("open");
    this.trigger.setAttribute("aria-expanded", "true");
  }

  closeDropdown() {
    this.trigger.classList.remove("open");
    this.dropdown.classList.remove("open");
    this.trigger.setAttribute("aria-expanded", "false");
  }

  selectOption(option) {
    this.options.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
    this.selectedValueEl.textContent = option.textContent;
    this.closeDropdown();
    this.trigger.focus();

    const event = new CustomEvent("select", {
      detail: { value: option.dataset.value },
    });
    this.wrapper.dispatchEvent(event);
  }

  focusFirstOption() {
    if (this.options.length > 0) {
      this.options[0].focus();
    }
  }

  focusLastOption() {
    if (this.options.length > 0) {
      this.options[this.options.length - 1].focus();
    }
  }

  focusNextOption(currentIndex) {
    const nextIndex = (currentIndex + 1) % this.options.length;
    this.options[nextIndex].focus();
  }

  focusPreviousOption(currentIndex) {
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : this.options.length - 1;
    this.options[prevIndex].focus();
  }
}

// Initialize the select components
const selectWrappers = document.getElementsByClassName("simple-select");

for (let w = 0; w < selectWrappers.length; w++) {
  new SimpleSelect(selectWrappers[w]);
}
