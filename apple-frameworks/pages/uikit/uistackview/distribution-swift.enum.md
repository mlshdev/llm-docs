> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/distribution-swift.enum](https://developer.apple.com/documentation/uikit/uistackview/distribution-swift.enum)

# UIStackView.Distribution (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The layout that defines the size and position of the arranged views along the stack view’s axis.

## Declaration

```swift
enum Distribution
```

## Topics

### Constants

- [UIStackView.Distribution.fill](distribution-swift.enum/fill.md): A layout where the stack view resizes its arranged views so that they fill the available space along the stack view’s axis.
- [UIStackView.Distribution.fillEqually](distribution-swift.enum/fillequally.md): A layout where the stack view resizes all arranged views to the same size, filling the available space along the stack view’s axis.
- [UIStackView.Distribution.fillProportionally](distribution-swift.enum/fillproportionally.md): A layout where the stack view resizes views proportionally based on their intrinsic content size to fill the available space along the stack view’s axis.
- [UIStackView.Distribution.equalSpacing](distribution-swift.enum/equalspacing.md): A layout where the stack view maintains equal spacing between adjacent views while preserving their intrinsic content size.
- [UIStackView.Distribution.equalCentering](distribution-swift.enum/equalcentering.md): A layout that attempts to position the arranged views with equal center-to-center spacing along the stack view’s axis, while maintaining the spacing property’s distance between views.

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

### Constants

- [UIStackView.Alignment](alignment-swift.enum.md): The layout of arranged views perpendicular to the stack view’s axis.

# UIStackViewDistribution (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The layout that defines the size and position of the arranged views along the stack view’s axis.

## Declaration

```objectivec
enum UIStackViewDistribution : NSInteger;
```

## Topics

### Constants

- [UIStackViewDistributionFill](distribution-swift.enum/fill.md): A layout where the stack view resizes its arranged views so that they fill the available space along the stack view’s axis.
- [UIStackViewDistributionFillEqually](distribution-swift.enum/fillequally.md): A layout where the stack view resizes all arranged views to the same size, filling the available space along the stack view’s axis.
- [UIStackViewDistributionFillProportionally](distribution-swift.enum/fillproportionally.md): A layout where the stack view resizes views proportionally based on their intrinsic content size to fill the available space along the stack view’s axis.
- [UIStackViewDistributionEqualSpacing](distribution-swift.enum/equalspacing.md): A layout where the stack view maintains equal spacing between adjacent views while preserving their intrinsic content size.
- [UIStackViewDistributionEqualCentering](distribution-swift.enum/equalcentering.md): A layout that attempts to position the arranged views with equal center-to-center spacing along the stack view’s axis, while maintaining the spacing property’s distance between views.

## See Also

### Constants

- [UIStackViewAlignment](alignment-swift.enum.md): The layout of arranged views perpendicular to the stack view’s axis.
