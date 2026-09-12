> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacelayoutorientation](https://developer.apple.com/documentation/appkit/nsuserinterfacelayoutorientation)

# NSUserInterfaceLayoutOrientation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

The stack view layout directions, and user interface axes for hugging priority and clipping resistance.

## Declaration

```swift
enum NSUserInterfaceLayoutOrientation
```

## Topics

### Constants

- [NSUserInterfaceLayoutOrientation.horizontal](nsuserinterfacelayoutorientation/horizontal.md): The horizontal orientation.
- [NSUserInterfaceLayoutOrientation.vertical](nsuserinterfacelayoutorientation/vertical.md): The vertical orientation.

### Initializers

- [init(rawValue:)](nsuserinterfacelayoutorientation/init%28rawvalue_%29.md)

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

- [orientation](nsstackview/orientation.md): The horizontal or vertical layout direction of the stack view.
- [alignment](nsstackview/alignment.md): The view alignment within the stack view.
- [spacing](nsstackview/spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [useDefaultSpacing](nsstackview/usedefaultspacing.md)
- [edgeInsets](nsstackview/edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](nsstackview/hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](nsstackview/distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackView.Distribution](nsstackview/distribution-swift.enum.md)

# NSUserInterfaceLayoutOrientation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

The stack view layout directions, and user interface axes for hugging priority and clipping resistance.

## Declaration

```objectivec
enum NSUserInterfaceLayoutOrientation : NSInteger;
```

## Topics

### Constants

- [NSUserInterfaceLayoutOrientationHorizontal](nsuserinterfacelayoutorientation/horizontal.md): The horizontal orientation.
- [NSUserInterfaceLayoutOrientationVertical](nsuserinterfacelayoutorientation/vertical.md): The vertical orientation.

## See Also

### Configuring the Stack View Layout

- [orientation](nsstackview/orientation.md): The horizontal or vertical layout direction of the stack view.
- [alignment](nsstackview/alignment.md): The view alignment within the stack view.
- [spacing](nsstackview/spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [NSStackViewSpacingUseDefault](nsstackview/usedefaultspacing.md)
- [edgeInsets](nsstackview/edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](nsstackview/hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](nsstackview/distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackViewDistribution](nsstackview/distribution-swift.enum.md)
