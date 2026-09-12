> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/deleteoptions](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/deleteoptions)

# UICellAccessory.DeleteOptions

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Configuration options for a delete accessory.

## Declaration

```swift
struct DeleteOptions
```

## Topics

### Creating configuration options

- [init(isHidden:reservedLayoutWidth:tintColor:backgroundColor:)](deleteoptions/init%28ishidden_reservedlayoutwidth_tintcolor_backgroundcolor_%29.md): Creates a delete accessory options structure.

### Accessing configuration options

- [isHidden](deleteoptions/ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [reservedLayoutWidth](deleteoptions/reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](deleteoptions/tintcolor.md): The tint color to apply to the accessory.
- [backgroundColor](deleteoptions/backgroundcolor.md): The background color to apply to the accessory.

## See Also

### Creating a delete accessory

- [delete(displayed:options:actionHandler:)](delete%28displayed_options_actionhandler_%29.md): Creates a delete system accessory with the specified display state, configuration options, and optional action handler.
