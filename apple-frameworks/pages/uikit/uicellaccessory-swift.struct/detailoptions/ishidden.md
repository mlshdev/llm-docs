> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/detailoptions/ishidden](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/detailoptions/ishidden)

# isHidden

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 15.4+ · visionOS

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

- [reservedLayoutWidth](reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](tintcolor.md): The tint color to apply to the accessory.
