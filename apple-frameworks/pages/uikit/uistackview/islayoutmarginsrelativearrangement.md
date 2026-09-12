> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/islayoutmarginsrelativearrangement](https://developer.apple.com/documentation/uikit/uistackview/islayoutmarginsrelativearrangement)

# isLayoutMarginsRelativeArrangement (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the stack view lays out its arranged views relative to its layout margins.

## Declaration

```swift
var isLayoutMarginsRelativeArrangement: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the stack view will layout its arranged views relative to its layout margins. If [false](https://developer.apple.com/documentation/swift/false), it lays out the arranged views relative to its bounds. The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the layout

- [axis](axis.md): The axis along which the arranged views lay out.
- [alignment](alignment-swift.property.md): The alignment of the arranged subviews perpendicular to the stack view’s axis.
- [distribution](distribution-swift.property.md): The distribution of the arranged views along the stack view’s axis.
- [spacing](spacing.md): The distance in points between the adjacent edges of the stack view’s arranged views.
- [isBaselineRelativeArrangement](isbaselinerelativearrangement.md): A Boolean value that determines whether the vertical spacing between views is measured from their baselines.

# layoutMarginsRelativeArrangement (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the stack view lays out its arranged views relative to its layout margins.

## Declaration

```objectivec
@property (nonatomic, getter=isLayoutMarginsRelativeArrangement) BOOL layoutMarginsRelativeArrangement;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the stack view will layout its arranged views relative to its layout margins. If [false](https://developer.apple.com/documentation/swift/false), it lays out the arranged views relative to its bounds. The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the layout

- [axis](axis.md): The axis along which the arranged views lay out.
- [alignment](alignment-swift.property.md): The alignment of the arranged subviews perpendicular to the stack view’s axis.
- [distribution](distribution-swift.property.md): The distribution of the arranged views along the stack view’s axis.
- [spacing](spacing.md): The distance in points between the adjacent edges of the stack view’s arranged views.
- [baselineRelativeArrangement](isbaselinerelativearrangement.md): A Boolean value that determines whether the vertical spacing between views is measured from their baselines.
