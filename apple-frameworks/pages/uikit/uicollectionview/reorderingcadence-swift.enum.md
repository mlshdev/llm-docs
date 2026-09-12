> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/reorderingcadence-swift.enum](https://developer.apple.com/documentation/uikit/uicollectionview/reorderingcadence-swift.enum)

# UICollectionView.ReorderingCadence (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the speed at which collection view items are reorganized during a drop.

## Declaration

```swift
enum ReorderingCadence
```

## Topics

### Constants

- [UICollectionView.ReorderingCadence.immediate](reorderingcadence-swift.enum/immediate.md): Items are reordered into place immediately.
- [UICollectionView.ReorderingCadence.fast](reorderingcadence-swift.enum/fast.md): Items are reordered quickly, but with a short delay.
- [UICollectionView.ReorderingCadence.slow](reorderingcadence-swift.enum/slow.md): Items are reordered after a delay.

### Initializers

- [init(rawValue:)](reorderingcadence-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing drop interactions

- [dropDelegate](dropdelegate.md): The delegate object that manages the dropping of items into the collection view.
- [UICollectionViewDropDelegate](../uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [hasActiveDrop](hasactivedrop.md): A Boolean value that indicates whether the collection view is currently tracking a drop session.
- [reorderingCadence](reorderingcadence-swift.property.md): The speed at which items in the collection view are reordered to show potential drop locations.

# UICollectionViewReorderingCadence (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the speed at which collection view items are reorganized during a drop.

## Declaration

```objectivec
enum UICollectionViewReorderingCadence : NSInteger;
```

## Topics

### Constants

- [UICollectionViewReorderingCadenceImmediate](reorderingcadence-swift.enum/immediate.md): Items are reordered into place immediately.
- [UICollectionViewReorderingCadenceFast](reorderingcadence-swift.enum/fast.md): Items are reordered quickly, but with a short delay.
- [UICollectionViewReorderingCadenceSlow](reorderingcadence-swift.enum/slow.md): Items are reordered after a delay.

## See Also

### Managing drop interactions

- [dropDelegate](dropdelegate.md): The delegate object that manages the dropping of items into the collection view.
- [UICollectionViewDropDelegate](../uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [hasActiveDrop](hasactivedrop.md): A Boolean value that indicates whether the collection view is currently tracking a drop session.
- [reorderingCadence](reorderingcadence-swift.property.md): The speed at which items in the collection view are reordered to show potential drop locations.
