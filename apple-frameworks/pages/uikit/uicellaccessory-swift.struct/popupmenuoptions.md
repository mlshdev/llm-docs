> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/popupmenuoptions](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/popupmenuoptions)

# UICellAccessory.PopUpMenuOptions

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Configuration options for a popup menu accessory.

## Declaration

```swift
struct PopUpMenuOptions
```

## Topics

### Creating configuration options

- [init(isHidden:reservedLayoutWidth:tintColor:)](popupmenuoptions/init%28ishidden_reservedlayoutwidth_tintcolor_%29.md): Creates a popup menu accessory options structure.

### Accessing configuration options

- [isHidden](popupmenuoptions/ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [reservedLayoutWidth](popupmenuoptions/reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](popupmenuoptions/tintcolor.md): The tint color to apply to the accessory.

## See Also

### Creating a popup menu accessory

- [popUpMenu(\_:displayed:options:selectedElementDidChangeHandler:)](popupmenu%28__displayed_options_selectedelementdidchangehandler_%29.md): Creates a popup menu system accessory with the specified menu, display state, configuration options, and optional selection handler.
- [UICellAccessory.MenuSelectedElementDidChangeHandler](menuselectedelementdidchangehandler.md): A closure type that defines a handler to perform when a user selects an element in the menu.
