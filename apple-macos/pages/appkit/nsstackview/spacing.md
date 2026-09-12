> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/spacing](https://developer.apple.com/documentation/appkit/nsstackview/spacing)

# spacing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The minimum spacing, in points, between adjacent views in the stack view.

## Declaration

```swift
var spacing: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A stack view uses this property to define the minimum distance between views within a gravity area and between neighboring views in adjacent gravity areas. The default value for the [spacing](spacing.md) property is `8.0` points.

The automatically applied Auto Layout constraints for [spacing](spacing.md) are shown in the table below.

| Constraint | Value for constraint priority |
| --- | --- |
| inter-view spacing `==` the [spacing](spacing.md) property value | max (NSLayoutPriorityDefaultHigh, hugging priority) |
| inter-gravity-area spacing `==` the [spacing](spacing.md) property value | hugging priority |
| inter-view spacing `≥` the [spacing](spacing.md) property value | NSLayoutPriorityRequired |

The first row indicates that inter-view spacing is constrained to equal the value of the [spacing](spacing.md) property with a priority of at least [defaultHigh](../nslayoutconstraint/priority-swift.struct/defaulthigh.md); you can increase this by setting a higher stack view hugging priority with the [setHuggingPriority(\_:for:)](sethuggingpriority%28__for_%29.md) method.

The second row indicates that the spacing between adjacent views in neighboring gravity areas is constrained to equal the value of the [spacing](spacing.md) property with the priority of the stack view’s hugging priority.

The third row indicates that inter-view spacing is allowed to grow larger than the value of the [spacing](spacing.md) property with a priority of NSLayoutPriorityRequired.

In combination, these constraints result in the following typical stack view behavior: In a stack view whose [hasEqualSpacing](hasequalspacing.md) property is set to [false](https://developer.apple.com/documentation/swift/false) (the default) and whose hugging priority is left at [defaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md) (the default), views within a gravity area remain a fixed distance from each other (equal to the value of the [spacing](spacing.md) property), and the distance between gravity areas grows and shrinks as the stack view grows and shrinks along its layout direction axis. If you set the [hasEqualSpacing](hasequalspacing.md) property to [true](https://developer.apple.com/documentation/swift/true) and use the default hugging priority, then the distance between all adjacent views, including adjacent views in neighboring gravity areas, grows and shrinks as the stack view grows and shrinks.

## See Also

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [useDefaultSpacing](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackView.Distribution](distribution-swift.enum.md)

# spacing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The minimum spacing, in points, between adjacent views in the stack view.

## Declaration

```objectivec
@property CGFloat spacing;
```

<a id="Discussion"></a>

## Discussion

A stack view uses this property to define the minimum distance between views within a gravity area and between neighboring views in adjacent gravity areas. The default value for the [spacing](spacing.md) property is `8.0` points.

The automatically applied Auto Layout constraints for [spacing](spacing.md) are shown in the table below.

| Constraint | Value for constraint priority |
| --- | --- |
| inter-view spacing `==` the [spacing](spacing.md) property value | max (NSLayoutPriorityDefaultHigh, hugging priority) |
| inter-gravity-area spacing `==` the [spacing](spacing.md) property value | hugging priority |
| inter-view spacing `≥` the [spacing](spacing.md) property value | NSLayoutPriorityRequired |

The first row indicates that inter-view spacing is constrained to equal the value of the [spacing](spacing.md) property with a priority of at least [NSLayoutPriorityDefaultHigh](../nslayoutconstraint/priority-swift.struct/defaulthigh.md); you can increase this by setting a higher stack view hugging priority with the [setHuggingPriority:forOrientation:](sethuggingpriority%28__for_%29.md) method.

The second row indicates that the spacing between adjacent views in neighboring gravity areas is constrained to equal the value of the [spacing](spacing.md) property with the priority of the stack view’s hugging priority.

The third row indicates that inter-view spacing is allowed to grow larger than the value of the [spacing](spacing.md) property with a priority of NSLayoutPriorityRequired.

In combination, these constraints result in the following typical stack view behavior: In a stack view whose [hasEqualSpacing](hasequalspacing.md) property is set to [false](https://developer.apple.com/documentation/swift/false) (the default) and whose hugging priority is left at [NSLayoutPriorityDefaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md) (the default), views within a gravity area remain a fixed distance from each other (equal to the value of the [spacing](spacing.md) property), and the distance between gravity areas grows and shrinks as the stack view grows and shrinks along its layout direction axis. If you set the [hasEqualSpacing](hasequalspacing.md) property to [true](https://developer.apple.com/documentation/swift/true) and use the default hugging priority, then the distance between all adjacent views, including adjacent views in neighboring gravity areas, grows and shrinks as the stack view grows and shrinks.

## See Also

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackViewDistribution](distribution-swift.enum.md)
