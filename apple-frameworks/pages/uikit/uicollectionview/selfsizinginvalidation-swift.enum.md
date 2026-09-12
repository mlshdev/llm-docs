> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/selfsizinginvalidation-swift.enum](https://developer.apple.com/documentation/uikit/uicollectionview/selfsizinginvalidation-swift.enum)

# UICollectionView.SelfSizingInvalidation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that describe modes for invalidating the size of self-sizing collection view cells.

## Declaration

```swift
enum SelfSizingInvalidation
```

<a id="Discussion"></a>

## Discussion

Use these constants with the [selfSizingInvalidation](selfsizinginvalidation-swift.property.md) property.

## Topics

### Constants

- [UICollectionView.SelfSizingInvalidation.disabled](selfsizinginvalidation-swift.enum/disabled.md): A mode that disables self-sizing invalidation.
- [UICollectionView.SelfSizingInvalidation.enabled](selfsizinginvalidation-swift.enum/enabled.md): A mode that enables manual self-sizing invalidation.
- [UICollectionView.SelfSizingInvalidation.enabledIncludingConstraints](selfsizinginvalidation-swift.enum/enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.

### Initializers

- [init(rawValue:)](selfsizinginvalidation-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Resizing self-sizing cells

- [selfSizingInvalidation](selfsizinginvalidation-swift.property.md): The mode that the collection view uses for invalidating the size of self-sizing cells.

# UICollectionViewSelfSizingInvalidation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that describe modes for invalidating the size of self-sizing collection view cells.

## Declaration

```objectivec
enum UICollectionViewSelfSizingInvalidation : NSInteger;
```

<a id="Discussion"></a>

## Discussion

Use these constants with the [selfSizingInvalidation](selfsizinginvalidation-swift.property.md) property.

## Topics

### Constants

- [UICollectionViewSelfSizingInvalidationDisabled](selfsizinginvalidation-swift.enum/disabled.md): A mode that disables self-sizing invalidation.
- [UICollectionViewSelfSizingInvalidationEnabled](selfsizinginvalidation-swift.enum/enabled.md): A mode that enables manual self-sizing invalidation.
- [UICollectionViewSelfSizingInvalidationEnabledIncludingConstraints](selfsizinginvalidation-swift.enum/enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.

## See Also

### Resizing self-sizing cells

- [selfSizingInvalidation](selfsizinginvalidation-swift.property.md): The mode that the collection view uses for invalidating the size of self-sizing cells.
