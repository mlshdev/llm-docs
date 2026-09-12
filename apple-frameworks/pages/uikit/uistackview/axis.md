> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/axis](https://developer.apple.com/documentation/uikit/uistackview/axis)

# axis (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The axis along which the arranged views lay out.

## Declaration

```swift
var axis: NSLayoutConstraint.Axis { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the orientation of the arranged views. Assigning the [NSLayoutConstraint.Axis.vertical](../nslayoutconstraint/axis/vertical.md) value creates a column of views. Assigning the [NSLayoutConstraint.Axis.horizontal](../nslayoutconstraint/axis/horizontal.md) value creates a row. The default value is [NSLayoutConstraint.Axis.horizontal](../nslayoutconstraint/axis/horizontal.md).

## See Also

### Configuring the layout

- [alignment](alignment-swift.property.md): The alignment of the arranged subviews perpendicular to the stack view’s axis.
- [distribution](distribution-swift.property.md): The distribution of the arranged views along the stack view’s axis.
- [spacing](spacing.md): The distance in points between the adjacent edges of the stack view’s arranged views.
- [isBaselineRelativeArrangement](isbaselinerelativearrangement.md): A Boolean value that determines whether the vertical spacing between views is measured from their baselines.
- [isLayoutMarginsRelativeArrangement](islayoutmarginsrelativearrangement.md): A Boolean value that determines whether the stack view lays out its arranged views relative to its layout margins.

# axis (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The axis along which the arranged views lay out.

## Declaration

```objectivec
@property (nonatomic) UILayoutConstraintAxis axis;
```

<a id="Discussion"></a>

## Discussion

This property determines the orientation of the arranged views. Assigning the [UILayoutConstraintAxisVertical](../nslayoutconstraint/axis/vertical.md) value creates a column of views. Assigning the [UILayoutConstraintAxisHorizontal](../nslayoutconstraint/axis/horizontal.md) value creates a row. The default value is [UILayoutConstraintAxisHorizontal](../nslayoutconstraint/axis/horizontal.md).

## See Also

### Configuring the layout

- [alignment](alignment-swift.property.md): The alignment of the arranged subviews perpendicular to the stack view’s axis.
- [distribution](distribution-swift.property.md): The distribution of the arranged views along the stack view’s axis.
- [spacing](spacing.md): The distance in points between the adjacent edges of the stack view’s arranged views.
- [baselineRelativeArrangement](isbaselinerelativearrangement.md): A Boolean value that determines whether the vertical spacing between views is measured from their baselines.
- [layoutMarginsRelativeArrangement](islayoutmarginsrelativearrangement.md): A Boolean value that determines whether the stack view lays out its arranged views relative to its layout margins.
