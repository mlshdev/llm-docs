> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/spacing](https://developer.apple.com/documentation/uikit/uistackview/spacing)

# spacing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The distance in points between the adjacent edges of the stack view’s arranged views.

## Declaration

```swift
var spacing: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines a strict spacing between arranged views for the [UIStackView.Distribution.fillProportionally](distribution-swift.enum/fillproportionally.md) distributions. It represents the minimum spacing for the [UIStackView.Distribution.equalSpacing](distribution-swift.enum/equalspacing.md) and [UIStackView.Distribution.equalCentering](distribution-swift.enum/equalcentering.md) distributions. Use negative values to allow overlap. The default value is `0.0`.

## See Also

### Configuring the layout

- [axis](axis.md): The axis along which the arranged views lay out.
- [alignment](alignment-swift.property.md): The alignment of the arranged subviews perpendicular to the stack view’s axis.
- [distribution](distribution-swift.property.md): The distribution of the arranged views along the stack view’s axis.
- [isBaselineRelativeArrangement](isbaselinerelativearrangement.md): A Boolean value that determines whether the vertical spacing between views is measured from their baselines.
- [isLayoutMarginsRelativeArrangement](islayoutmarginsrelativearrangement.md): A Boolean value that determines whether the stack view lays out its arranged views relative to its layout margins.

# spacing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The distance in points between the adjacent edges of the stack view’s arranged views.

## Declaration

```objectivec
@property (nonatomic) CGFloat spacing;
```

<a id="Discussion"></a>

## Discussion

This property defines a strict spacing between arranged views for the [UIStackViewDistributionFillProportionally](distribution-swift.enum/fillproportionally.md) distributions. It represents the minimum spacing for the [UIStackViewDistributionEqualSpacing](distribution-swift.enum/equalspacing.md) and [UIStackViewDistributionEqualCentering](distribution-swift.enum/equalcentering.md) distributions. Use negative values to allow overlap. The default value is `0.0`.

## See Also

### Configuring the layout

- [axis](axis.md): The axis along which the arranged views lay out.
- [alignment](alignment-swift.property.md): The alignment of the arranged subviews perpendicular to the stack view’s axis.
- [distribution](distribution-swift.property.md): The distribution of the arranged views along the stack view’s axis.
- [baselineRelativeArrangement](isbaselinerelativearrangement.md): A Boolean value that determines whether the vertical spacing between views is measured from their baselines.
- [layoutMarginsRelativeArrangement](islayoutmarginsrelativearrangement.md): A Boolean value that determines whether the stack view lays out its arranged views relative to its layout margins.
