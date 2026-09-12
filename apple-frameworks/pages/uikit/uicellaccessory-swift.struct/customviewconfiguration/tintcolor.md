> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/customviewconfiguration/tintcolor](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/customviewconfiguration/tintcolor)

# tintColor

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The tint color to apply to the accessory.

## Declaration

```swift
var tintColor: UIColor?
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which means that the accessory uses the system default tint color.

## See Also

### Accessing configuration options

- [isHidden](ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [customView](customview.md): The custom view to display for the accessory.
- [placement](placement.md): The placement for the accessory.
- [reservedLayoutWidth](reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [maintainsFixedSize](maintainsfixedsize.md): A Boolean value that determines whether to preserve the frame size of the custom view.
