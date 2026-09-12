> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/menuselectedelementdidchangehandler](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/menuselectedelementdidchangehandler)

# UICellAccessory.MenuSelectedElementDidChangeHandler

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

A closure type that defines a handler to perform when a user selects an element in the menu.

## Declaration

```swift
typealias MenuSelectedElementDidChangeHandler = (UIMenu) -> Void
```

## See Also

### Creating a popup menu accessory

- [popUpMenu(\_:displayed:options:selectedElementDidChangeHandler:)](popupmenu%28__displayed_options_selectedelementdidchangehandler_%29.md): Creates a popup menu system accessory with the specified menu, display state, configuration options, and optional selection handler.
- [UICellAccessory.PopUpMenuOptions](popupmenuoptions.md): Configuration options for a popup menu accessory.
