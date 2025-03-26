# Simple Select

A lightweight, unopinionated select component for vanilla JavaScript that's easy to style and implement across different projects.

## Why?

I built Simple Select because I needed a select component that was:
- **Lightweight**: No heavy dependencies or frameworks required
- **Unopinionated**: No predefined styling or behavior that would conflict with existing projects
- **Simple to Style**: Easy to customize with CSS to match any design system
- **Versatile**: Can be used in any vanilla JavaScript project without additional setup

## Installation

### Just use the minified assets

```html
<link rel="stylesheet" href="https://github.com/w-kuipers/simple-select/releases/latest/download/simple-select.min.css">
<script src="https://github.com/w-kuipers/simple-select/releases/latest/download/simple-select.min.js"></script>
```
OR

```html
<link rel="stylesheet" href="simple-select.min.css">
<script src="simple-select.min.js"></script>
```

## Usage
```html
<div class="simple-select">
    <div tabindex="0" role="combobox" aria-haspopup="listbox" class="simple-select-trigger">
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
const select = document.querySelector('.simple-select');
select.addEventListener('select', function(event) {
    console.log(event.detail.value); // The selected value
});
```

The `event.detail.value` contains the `data-value` attribute of the selected option. If no `data-value` is specified, it will contain the text content of the option.

## Customization
Simple Select is designed to be easily styled. You can customize the appearance by extending the default CSS classes:

```css
/* The trigger button that opens the dropdown */
.simple-select-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    transition: border-color 0.2s ease;
}

.simple-select-trigger:hover {
    border-color: #999;
}

.simple-select-trigger:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* The selected value text */
.simple-select-selected {
    color: #333;
    font-size: 14px;
}

/* The dropdown container */
.simple-select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 4px;
    padding: 4px 0;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    list-style: none;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
}

/* Individual options */
.simple-select-option {
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.simple-select-option:hover {
    background-color: #f5f5f5;
}

.simple-select-option[aria-selected="true"] {
    background-color: #e9ecef;
}

/* Disabled state */
.simple-select[data-disabled="true"] .simple-select-trigger {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Open state */
.simple-select[data-open="true"] .simple-select-trigger {
    border-color: #007bff;
}

/* Optional: Add a custom scrollbar for the dropdown */
.simple-select-dropdown::-webkit-scrollbar {
    width: 8px;
}

.simple-select-dropdown::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.simple-select-dropdown::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

.simple-select-dropdown::-webkit-scrollbar-thumb:hover {
    background: #555;
}
```

## License

MIT License - feel free to use this in any project, personal or commercial.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 