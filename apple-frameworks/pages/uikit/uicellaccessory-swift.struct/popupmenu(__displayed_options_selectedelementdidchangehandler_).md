> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/popupmenu(_:displayed:options:selectedelementdidchangehandler:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/popupmenu(_:displayed:options:selectedelementdidchangehandler:))

# popUpMenu(\_:displayed:options:selectedElementDidChangeHandler:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates a popup menu system accessory with the specified menu, display state, configuration options, and optional selection handler.

## Declaration

```swift
static func popUpMenu(_ menu: UIMenu, displayed: UICellAccessory.DisplayedState = .always, options: UICellAccessory.PopUpMenuOptions = PopUpMenuOptions(), selectedElementDidChangeHandler: UICellAccessory.MenuSelectedElementDidChangeHandler? = nil) -> UICellAccessory
```

## Parameters

- `menu`: The menu to display when a user taps the popup menu accessory.
- `displayed`: The cell-editing states that the popup menu accessory appears in. This parameter has a default value of [UICellAccessory.DisplayedState.always](displayedstate/always.md).
- `options`: Configuration options for the popup menu accessory. See [UICellAccessory.PopUpMenuOptions](popupmenuoptions.md) for possible configuration options.
- `selectedElementDidChangeHandler`: An optional closure that the system calls when a user selects an element in the menu.

<a id="return-value"></a>

## Return Value

A configured popup menu cell accessory that appears as a pair of chevrons that point upward and downward. This accessory indicates that tapping anywhere in the cell presents a popup menu. This accessory appears on the trailing edge of the cell.

## See Also

### Creating a popup menu accessory

- [UICellAccessory.MenuSelectedElementDidChangeHandler](menuselectedelementdidchangehandler.md): A closure type that defines a handler to perform when a user selects an element in the menu.
- [UICellAccessory.PopUpMenuOptions](popupmenuoptions.md): Configuration options for a popup menu accessory.
