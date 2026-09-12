> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutsectionorthogonalscrollingproperties/bounce-swift.enum](https://developer.apple.com/documentation/uikit/uicollectionlayoutsectionorthogonalscrollingproperties/bounce-swift.enum)

# UICollectionLayoutSectionOrthogonalScrollingProperties.Bounce (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that specify whether the orthogonal scrolling section bounces past the edge of content and back again.

## Declaration

```swift
enum Bounce
```

## Topics

### Selecting bounce options

- [UICollectionLayoutSectionOrthogonalScrollingProperties.Bounce.always](bounce-swift.enum/always.md): The orthogonal scroll view bounces even if the content is smaller than its bounds.
- [UICollectionLayoutSectionOrthogonalScrollingProperties.Bounce.automatic](bounce-swift.enum/automatic.md): The orthogonal scroll view bounces when it encounters a content boundary.
- [UICollectionLayoutSectionOrthogonalScrollingProperties.Bounce.never](bounce-swift.enum/never.md): The orthogonal scroll view stops scrolling immediately when it encounters a content boundary without bouncing.

### Initializers

- [init(rawValue:)](bounce-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the bounce behavior

- [bounce](bounce-swift.property.md): A value that specifies whether the orthogonal scrolling section bounces past the edge of content and back again.

# UICollectionLayoutSectionOrthogonalScrollingBounce (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that specify whether the orthogonal scrolling section bounces past the edge of content and back again.

## Declaration

```objectivec
enum UICollectionLayoutSectionOrthogonalScrollingBounce : NSInteger;
```

## Topics

### Selecting bounce options

- [UICollectionLayoutSectionOrthogonalScrollingBounceAlways](bounce-swift.enum/always.md): The orthogonal scroll view bounces even if the content is smaller than its bounds.
- [UICollectionLayoutSectionOrthogonalScrollingBounceAutomatic](bounce-swift.enum/automatic.md): The orthogonal scroll view bounces when it encounters a content boundary.
- [UICollectionLayoutSectionOrthogonalScrollingBounceNever](bounce-swift.enum/never.md): The orthogonal scroll view stops scrolling immediately when it encounters a content boundary without bouncing.

## See Also

### Specifying the bounce behavior

- [bounce](bounce-swift.property.md): A value that specifies whether the orthogonal scrolling section bounces past the edge of content and back again.
