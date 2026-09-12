> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/reorderoptions](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/reorderoptions)

# UICellAccessory.ReorderOptions

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Configuration options for a reorder accessory.

## Declaration

```swift
struct ReorderOptions
```

## Topics

### Creating configuration options

- [init(isHidden:reservedLayoutWidth:tintColor:showsVerticalSeparator:)](reorderoptions/init%28ishidden_reservedlayoutwidth_tintcolor_showsverticalseparator_%29.md): Creates a reorder accessory options structure.

### Accessing configuration options

- [isHidden](reorderoptions/ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [reservedLayoutWidth](reorderoptions/reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](reorderoptions/tintcolor.md): The tint color to apply to the accessory.
- [showsVerticalSeparator](reorderoptions/showsverticalseparator.md): A Boolean value that determines whether a vertical separator displays before the accessory when it appears after another accessory.

## See Also

### Creating a reorder accessory

- [reorder(displayed:options:)](reorder%28displayed_options_%29.md): Creates a reorder system accessory with the specified display state and configuration options.
