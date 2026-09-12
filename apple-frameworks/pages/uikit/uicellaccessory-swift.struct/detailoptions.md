> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/detailoptions](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/detailoptions)

# UICellAccessory.DetailOptions

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 15.4+ · visionOS

Configuration options for a detail accessory.

## Declaration

```swift
struct DetailOptions
```

## Topics

### Creating configuration options

- [init(isHidden:reservedLayoutWidth:tintColor:)](detailoptions/init%28ishidden_reservedlayoutwidth_tintcolor_%29.md): Creates a detail accessory options structure.

### Accessing configuration options

- [isHidden](detailoptions/ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [reservedLayoutWidth](detailoptions/reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](detailoptions/tintcolor.md): The tint color to apply to the accessory.

## See Also

### Creating a detail accessory

- [detail(displayed:options:actionHandler:)](detail%28displayed_options_actionhandler_%29.md): Creates a detail system accessory with the specified display state, configuration options, and optional action handler.
