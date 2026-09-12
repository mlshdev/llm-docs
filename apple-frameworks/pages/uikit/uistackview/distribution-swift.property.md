> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/distribution-swift.property](https://developer.apple.com/documentation/uikit/uistackview/distribution-swift.property)

# distribution (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The distribution of the arranged views along the stack view’s axis.

## Declaration

```swift
var distribution: UIStackView.Distribution { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines how the stack view lays out its arranged views along its axis. The default value is [UIStackView.Distribution.fill](distribution-swift.enum/fill.md). For a list of possible values, see [UIStackView.Distribution](distribution-swift.enum.md).

## See Also

### Configuring the layout

- [axis](axis.md): The axis along which the arranged views lay out.
- [alignment](alignment-swift.property.md): The alignment of the arranged subviews perpendicular to the stack view’s axis.
- [spacing](spacing.md): The distance in points between the adjacent edges of the stack view’s arranged views.
- [isBaselineRelativeArrangement](isbaselinerelativearrangement.md): A Boolean value that determines whether the vertical spacing between views is measured from their baselines.
- [isLayoutMarginsRelativeArrangement](islayoutmarginsrelativearrangement.md): A Boolean value that determines whether the stack view lays out its arranged views relative to its layout margins.

# distribution (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The distribution of the arranged views along the stack view’s axis.

## Declaration

```objectivec
@property (nonatomic) UIStackViewDistribution distribution;
```

<a id="Discussion"></a>

## Discussion

This property determines how the stack view lays out its arranged views along its axis. The default value is [UIStackViewDistributionFill](distribution-swift.enum/fill.md). For a list of possible values, see [UIStackViewDistribution](distribution-swift.enum.md).

## See Also

### Configuring the layout

- [axis](axis.md): The axis along which the arranged views lay out.
- [alignment](alignment-swift.property.md): The alignment of the arranged subviews perpendicular to the stack view’s axis.
- [spacing](spacing.md): The distance in points between the adjacent edges of the stack view’s arranged views.
- [baselineRelativeArrangement](isbaselinerelativearrangement.md): A Boolean value that determines whether the vertical spacing between views is measured from their baselines.
- [layoutMarginsRelativeArrangement](islayoutmarginsrelativearrangement.md): A Boolean value that determines whether the stack view lays out its arranged views relative to its layout margins.
