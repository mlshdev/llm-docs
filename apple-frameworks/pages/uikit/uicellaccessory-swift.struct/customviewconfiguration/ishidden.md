> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/customviewconfiguration/ishidden](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/customviewconfiguration/ishidden)

# isHidden

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A Boolean value that determines whether the cell hides the accessory.

## Declaration

```swift
var isHidden: Bool
```

<a id="Discussion"></a>

## Discussion

A hidden accessory takes up space in the layout, but it isn’t visible and doesn’t provide any behaviors.

Use this property to achieve a consistent layout across cells when some cells show this type of accessory and others don’t.

## See Also

### Accessing configuration options

- [customView](customview.md): The custom view to display for the accessory.
- [placement](placement.md): The placement for the accessory.
- [reservedLayoutWidth](reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](tintcolor.md): The tint color to apply to the accessory.
- [maintainsFixedSize](maintainsfixedsize.md): A Boolean value that determines whether to preserve the frame size of the custom view.
