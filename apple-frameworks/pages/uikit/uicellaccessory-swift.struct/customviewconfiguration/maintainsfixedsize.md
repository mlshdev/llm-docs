> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/customviewconfiguration/maintainsfixedsize](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/customviewconfiguration/maintainsfixedsize)

# maintainsFixedSize

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A Boolean value that determines whether to preserve the frame size of the custom view.

## Declaration

```swift
var maintainsFixedSize: Bool
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system preserves the current frame size of the view. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the system sizes the view during layout of the accessories.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing configuration options

- [isHidden](ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [customView](customview.md): The custom view to display for the accessory.
- [placement](placement.md): The placement for the accessory.
- [reservedLayoutWidth](reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](tintcolor.md): The tint color to apply to the accessory.
