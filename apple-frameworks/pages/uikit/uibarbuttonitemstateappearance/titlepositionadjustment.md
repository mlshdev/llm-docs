> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemstateappearance/titlepositionadjustment](https://developer.apple.com/documentation/uikit/uibarbuttonitemstateappearance/titlepositionadjustment)

# titlePositionAdjustment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The additional amount by which to offset the title horizontally and vertically.

## Declaration

```swift
var titlePositionAdjustment: UIOffset { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the distance, in points, by which to offset the title. Positive values move the title down and to the right. Negative values move the title up and to the left.

## See Also

### Configuring the title

- [titleTextAttributes](titletextattributes.md): String attributes to apply to the text of the bar button item’s title.

# titlePositionAdjustment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The additional amount by which to offset the title horizontally and vertically.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIOffset titlePositionAdjustment;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the distance, in points, by which to offset the title. Positive values move the title down and to the right. Negative values move the title up and to the left.

## See Also

### Configuring the title

- [titleTextAttributes](titletextattributes.md): String attributes to apply to the text of the bar button item’s title.
