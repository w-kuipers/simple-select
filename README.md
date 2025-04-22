# Simple Select

A lightweight, unopinionated select component for vanilla JavaScript that's easy to style and implement across different projects.

![simple-select](https://github.com/w-kuipers/simple-select/blob/main/simple-select-screenshot.png)

## Why?

I built Simple Select because I needed a select component that was:

- **Lightweight**: No heavy dependencies or frameworks required
- **Unopinionated**: No predefined styling or behavior that would conflict with existing projects
- **Simple to Style**: Easy to customize with CSS to match any design system
- **Versatile**: Can be used in any vanilla JavaScript project without additional setup

## Installation

### Just use the minified assets

Download the minified assets from the latest release and import them to your project

```html
<link rel="stylesheet" href="simple-select.min.css" />
<script src="simple-select.min.js"></script>
```

## Usage

```html
<div class="simple-select">
  <div
    tabindex="0"
    role="combobox"
    aria-haspopup="listbox"
    class="simple-select-trigger"
  >
    <span class="simple-select-selected">Select an option</span>
  </div>
  <ul role="listbox" class="simple-select-dropdown">
    <li role="option" class="simple-select-option" data-value="1">Option 1</li>
    <li role="option" class="simple-select-option" data-value="2">Option 2</li>
    <li role="option" class="simple-select-option" data-value="3">Option 3</li>
  </ul>
</div>
```

## Getting Selected Values

Simple Select dispatches a custom `select` event when an option is selected. You can listen for this event to get the selected value:

```javascript
const select = document.querySelector(".simple-select");
select.addEventListener("select", function (event) {
  console.log(event.detail.value); // The selected value
});
```

The `event.detail.value` contains the `data-value` attribute of the selected option. If no `data-value` is specified, it will contain the text content of the option.

## Customization

Simple Select is designed to be easily styled. You can customize the appearance by extending the default CSS classes. Here is a minimal clean example:

```css
.simple-select-trigger {
  transition: all 0.2s cubic-bezier(0.5, 0, 0.07, 1);
  border: 1px solid #d4e0ed;
  font-size: 16px;
  border-radius: 3px;
  background-color: #fff;
  padding: 10px 15px;
  font-weight: 500;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.simple-select-trigger:after {
  transition: all 0.2s cubic-bezier(0.5, 0, 0.07, 1);
}

.simple-select-trigger:hover {
  background-color: #edeff9;
}

.simple-select-trigger:focus {
  border-color: #3c5dd2;
  box-shadow: 0 0 0 3px rgba(60, 93, 210, 0.25);
}

.simple-select-dropdown {
  transition: all 0.2s cubic-bezier(0.5, 0, 0.07, 1);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #d4e0ed;
  border-radius: 7px;
  background-color: #fff;
  padding: 5px;
  display: flex;
  gap: 2px;
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
}

.simple-select-option {
  transition: all 0.1s cubic-bezier(0.6, 0, 0.07, 1);
  padding: 5px 8px;
  border-radius: 7px;
  cursor: pointer;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
}

.simple-select-option:hover {
  background-color: #edeff9;
}

.simple-select-option.simple-select-selected {
  background-color: #edeff9;
}
```

## Data Attributes

Simple Select supports various data attributes to customize its behavior:

### data-update-label-on-select

By default, the trigger button's text content is updated when an option is selected. You can disable this behavior by setting `data-update-label-on-select="false"`:

```html
<div class="simple-select" data-update-label-on-select="false">
  <!-- ... rest of the select markup ... -->
</div>
```

## License

MIT License - feel free to use this in any project, personal or commercial.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
