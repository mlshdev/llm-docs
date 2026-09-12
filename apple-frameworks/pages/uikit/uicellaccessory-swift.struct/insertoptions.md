> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/insertoptions](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/insertoptions)

# UICellAccessory.InsertOptions

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Configuration options for an insert accessory.

## Declaration

```swift
struct InsertOptions
```

## Topics

### Creating configuration options

- [init(isHidden:reservedLayoutWidth:tintColor:backgroundColor:)](insertoptions/init%28ishidden_reservedlayoutwidth_tintcolor_backgroundcolor_%29.md): Creates an insert accessory options structure.

### Accessing configuration options

- [isHidden](insertoptions/ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [reservedLayoutWidth](insertoptions/reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](insertoptions/tintcolor.md): The tint color to apply to the accessory.
- [backgroundColor](insertoptions/backgroundcolor.md): The background color to apply to the accessory.

## See Also

### Creating an insert accessory

- [insert(displayed:options:actionHandler:)](insert%28displayed_options_actionhandler_%29.md): Creates an insert system accessory with the specified display state, configuration options, and optional action handler.
