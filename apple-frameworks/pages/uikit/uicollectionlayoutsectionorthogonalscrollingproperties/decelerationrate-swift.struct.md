> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutsectionorthogonalscrollingproperties/decelerationrate-swift.struct](https://developer.apple.com/documentation/uikit/uicollectionlayoutsectionorthogonalscrollingproperties/decelerationrate-swift.struct)

# UICollectionLayoutSectionOrthogonalScrollingProperties.DecelerationRate (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the rate of deceleration in the orthogonal scrolling section after the scrolling pan gesture ends.

## Declaration

```swift
struct DecelerationRate
```

## Topics

### Selecting deceleration rates

- [automatic](decelerationrate-swift.struct/automatic.md): A deceleration rate that matches the parent scroll view’s deceleration rate for the orthogonal scrolling section.
- [fast](decelerationrate-swift.struct/fast.md): A rapid deceleration rate for the orthogonal scrolling section.
- [normal](decelerationrate-swift.struct/normal.md): The default deceleration rate for the orthogonal scrolling section.

### Creating a deceleration rate

- [init(rawValue:)](decelerationrate-swift.struct/init%28rawvalue_%29.md): Creates a deceleration rate.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the rate of deceleration

- [decelerationRate](decelerationrate-swift.property.md): A value that specifies the rate of deceleration in the orthogonal scrolling section after the scrolling pan gesture ends.

# UICollectionLayoutSectionOrthogonalScrollingDecelerationRate (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the rate of deceleration in the orthogonal scrolling section after the scrolling pan gesture ends.

## Declaration

```objectivec
typedef CGFloat UICollectionLayoutSectionOrthogonalScrollingDecelerationRate;
```

## Topics

### Selecting deceleration rates

- [UICollectionLayoutSectionOrthogonalScrollingDecelerationRateAutomatic](decelerationrate-swift.struct/automatic.md): A deceleration rate that matches the parent scroll view’s deceleration rate for the orthogonal scrolling section.
- [UICollectionLayoutSectionOrthogonalScrollingDecelerationRateFast](decelerationrate-swift.struct/fast.md): A rapid deceleration rate for the orthogonal scrolling section.
- [UICollectionLayoutSectionOrthogonalScrollingDecelerationRateNormal](decelerationrate-swift.struct/normal.md): The default deceleration rate for the orthogonal scrolling section.

## See Also

### Specifying the rate of deceleration

- [decelerationRate](decelerationrate-swift.property.md): A value that specifies the rate of deceleration in the orthogonal scrolling section after the scrolling pan gesture ends.
