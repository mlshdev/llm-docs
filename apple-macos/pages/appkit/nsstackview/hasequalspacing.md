> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/hasequalspacing](https://developer.apple.com/documentation/appkit/nsstackview/hasequalspacing)

# hasEqualSpacing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+ (deprecated in 10.11)

A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.

> Set [distribution](distribution-swift.property.md) to [NSStackView.Distribution.equalSpacing](distribution-swift.enum/equalspacing.md) instead.

## Declaration

```swift
var hasEqualSpacing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The distances between adjacent views in a stack view are either constrained to equal each other or settable to custom spacings using the [setCustomSpacing(\_:after:)](setcustomspacing%28__after_%29.md) method. The default value for the [hasEqualSpacing](hasequalspacing.md) property is [false](https://developer.apple.com/documentation/swift/false), which enables custom spacing. To require equal spacing, set this property to [true](https://developer.apple.com/documentation/swift/true), which disables the [setCustomSpacing(\_:after:)](setcustomspacing%28__after_%29.md) method.

With [hasEqualSpacing](hasequalspacing.md) set to [false](https://developer.apple.com/documentation/swift/false) (the default), the Auto Layout constraints for spacing between views in a gravity area are as shown in the table of the [spacing](spacing.md) property.

If you specify equal spacing, the system changes these constraints to the values shown in the table below.

| Constraint | Value for constraint priority |
| --- | --- |
| inter-view spacing `==` the [spacing](spacing.md) property | hugging priority |
| inter-view spacing `≥` the [spacing](spacing.md) property | NSLayoutPriorityRequired |
| Equal inter-view spacing | NSLayoutPriorityDefaultLow |

Stack view hugging priority, identified as the constraint value in row 1, has the default value [defaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). You can adjust hugging priority by using the [setHuggingPriority(\_:for:)](sethuggingpriority%28__for_%29.md) method.

## See Also

### Related Documentation

- [setHuggingPriority(\_:for:)](sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [useDefaultSpacing](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackView.Distribution](distribution-swift.enum.md)

# hasEqualSpacing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+ (deprecated in 10.11)

A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.

> Set [distribution](distribution-swift.property.md) to [NSStackViewDistributionEqualSpacing](distribution-swift.enum/equalspacing.md) instead.

## Declaration

```objectivec
@property BOOL hasEqualSpacing;
```

<a id="Discussion"></a>

## Discussion

The distances between adjacent views in a stack view are either constrained to equal each other or settable to custom spacings using the [setCustomSpacing:afterView:](setcustomspacing%28__after_%29.md) method. The default value for the [hasEqualSpacing](hasequalspacing.md) property is [false](https://developer.apple.com/documentation/swift/false), which enables custom spacing. To require equal spacing, set this property to [true](https://developer.apple.com/documentation/swift/true), which disables the [setCustomSpacing:afterView:](setcustomspacing%28__after_%29.md) method.

With [hasEqualSpacing](hasequalspacing.md) set to [false](https://developer.apple.com/documentation/swift/false) (the default), the Auto Layout constraints for spacing between views in a gravity area are as shown in the table of the [spacing](spacing.md) property.

If you specify equal spacing, the system changes these constraints to the values shown in the table below.

| Constraint | Value for constraint priority |
| --- | --- |
| inter-view spacing `==` the [spacing](spacing.md) property | hugging priority |
| inter-view spacing `≥` the [spacing](spacing.md) property | NSLayoutPriorityRequired |
| Equal inter-view spacing | NSLayoutPriorityDefaultLow |

Stack view hugging priority, identified as the constraint value in row 1, has the default value [NSLayoutPriorityDefaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). You can adjust hugging priority by using the [setHuggingPriority:forOrientation:](sethuggingpriority%28__for_%29.md) method.

## See Also

### Related Documentation

- [setHuggingPriority:forOrientation:](sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackViewDistribution](distribution-swift.enum.md)
