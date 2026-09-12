> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/customviewconfiguration](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/customviewconfiguration)

# UICellAccessory.CustomViewConfiguration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Configuration options for a custom accessory.

## Declaration

```swift
struct CustomViewConfiguration
```

## Topics

### Creating configuration options

- [init(customView:placement:isHidden:reservedLayoutWidth:tintColor:maintainsFixedSize:)](customviewconfiguration/init%28customview_placement_ishidden_reservedlayoutwidth_tintcolor_maintainsfixedsize_%29.md): Creates a custom accessory options structure.

### Accessing configuration options

- [isHidden](customviewconfiguration/ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [customView](customviewconfiguration/customview.md): The custom view to display for the accessory.
- [placement](customviewconfiguration/placement.md): The placement for the accessory.
- [reservedLayoutWidth](customviewconfiguration/reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](customviewconfiguration/tintcolor.md): The tint color to apply to the accessory.
- [maintainsFixedSize](customviewconfiguration/maintainsfixedsize.md): A Boolean value that determines whether to preserve the frame size of the custom view.

## See Also

### Creating a custom accessory

- [customView(configuration:)](customview%28configuration_%29.md): Creates a custom view accessory.
