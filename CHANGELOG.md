# Changelog

All notable changes to this project will be documented in this file.

## [1.0.7] - 2024-04-22
### Changed
- Moved label update and dropdown selection highlighting to be triggered by the "select" event
- Improved code organization by centralizing visual updates in the event handler
- Enhanced dropdown positioning by setting trigger to `position: relative` with proper z-index layering to support optional transition effects

## [1.0.5] - 2024-04-22
### Added
- Added support for `data-update-label-on-select` attribute to control whether the trigger button text updates on selection

## [1.0.4] - 2024-03-21
### Added
- Added comprehensive documentation for getting selected values using custom events
- Added detailed CSS customization guide with examples
### Changed
- Updated HTML structure to use semantic ARIA attributes for better accessibility
- Improved dropdown styling with custom scrollbar and better visual states
- Enhanced trigger button styling with focus and hover states
- Added proper disabled state styling

## [1.0.3] - 2024-03-21
### Fixed
- Fixed class name inconsistency for selected options (changed from `.selected` to `.simple-select-selected`)
- Fixed selector for selected value element to match the correct class name

## [1.0.2] - 2024-03-21
### Fixed
- Fixed class name consistency across the component (standardized to use `simple-select-` prefix)
- Removed unused chevron icon styles
- Fixed indentation in JavaScript code

## [1.0.1] - 2024-03-21
### Changed
- Removed opinionated styles (font sizes, padding, border radius, etc.) to make the component more customizable
- Simplified the CSS structure by removing unnecessary nested selectors
- Removed custom styling for trigger button dimensions

## [1.0.0] - 2024-03-21
### Added
- Initial release with basic select functionality
- Keyboard navigation support
- Custom event handling for selection changes
- Basic styling with SCSS 