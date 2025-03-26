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
<select id="mySelect" class="simple-select">
    <option value="">Select an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
```

## Customization
Simple Select is designed to be easily styled. You can customize the appearance by overriding the default CSS classes:

```css
.simple-select {
    /* Your custom styles */
}

.simple-select__options {
    /* Custom styles for the options dropdown */
}

.simple-select__option {
    /* Custom styles for individual options */
}
```

## License

MIT License - feel free to use this in any project, personal or commercial.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 