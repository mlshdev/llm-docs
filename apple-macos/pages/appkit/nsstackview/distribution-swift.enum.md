> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/distribution-swift.enum](https://developer.apple.com/documentation/appkit/nsstackview/distribution-swift.enum)

# NSStackView.Distribution (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

## Declaration

```swift
enum Distribution
```

## Topics

### Constants

- [NSStackView.Distribution.equalCentering](distribution-swift.enum/equalcentering.md): Equal center-to-center spacing of the items is maintained as much as possible while still maintaining the minimum spacing between each view.
- [NSStackView.Distribution.equalSpacing](distribution-swift.enum/equalspacing.md): The space separating stacked views along the stacking axis are maintained to be equal as much as possible while still maintaining the minimum spacing.
- [NSStackView.Distribution.fill](distribution-swift.enum/fill.md): The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`, causing the stacked views to tightly fill the container along the stacking axis.
- [NSStackView.Distribution.fillEqually](distribution-swift.enum/fillequally.md): Stacked views will have sizes maintained to be equal as much as possible along the stacking axis. The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`.
- [NSStackView.Distribution.fillProportionally](distribution-swift.enum/fillproportionally.md): Stacked views will have sizes maintained to be equal, proportionally to their `intrinsicContentSize`s, as much as possible. The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`.
- [NSStackView.Distribution.gravityAreas](distribution-swift.enum/gravityareas.md): Stacked views will not have any special distribution behavior, relying on behavior described by gravity areas and set hugging priorities along the stacking axis.

### Initializers

- [init(rawValue:)](distribution-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [useDefaultSpacing](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.

# NSStackViewDistribution (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

## Declaration

```objectivec
enum NSStackViewDistribution : NSInteger;
```

## Topics

### Constants

- [NSStackViewDistributionEqualCentering](distribution-swift.enum/equalcentering.md): Equal center-to-center spacing of the items is maintained as much as possible while still maintaining the minimum spacing between each view.
- [NSStackViewDistributionEqualSpacing](distribution-swift.enum/equalspacing.md): The space separating stacked views along the stacking axis are maintained to be equal as much as possible while still maintaining the minimum spacing.
- [NSStackViewDistributionFill](distribution-swift.enum/fill.md): The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`, causing the stacked views to tightly fill the container along the stacking axis.
- [NSStackViewDistributionFillEqually](distribution-swift.enum/fillequally.md): Stacked views will have sizes maintained to be equal as much as possible along the stacking axis. The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`.
- [NSStackViewDistributionFillProportionally](distribution-swift.enum/fillproportionally.md): Stacked views will have sizes maintained to be equal, proportionally to their `intrinsicContentSize`s, as much as possible. The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`.
- [NSStackViewDistributionGravityAreas](distribution-swift.enum/gravityareas.md): Stacked views will not have any special distribution behavior, relying on behavior described by gravity areas and set hugging priorities along the stacking axis.

## See Also

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
