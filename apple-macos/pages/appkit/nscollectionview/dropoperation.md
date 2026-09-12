> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/dropoperation](https://developer.apple.com/documentation/appkit/nscollectionview/dropoperation)

# NSCollectionView.DropOperation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

These constants specify if acceptance of a drop should be at the item it is dropped on or before the item. These constants are used by the  [collectionView(\_:acceptDrop:index:dropOperation:)](../nscollectionviewdelegate/collectionview%28__acceptdrop_index_dropoperation_%29.md) and [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](../nscollectionviewdelegate/collectionview%28__validatedrop_proposedindex_dropoperation_%29.md) methods in [NSCollectionViewDelegate](../nscollectionviewdelegate.md)

## Declaration

```swift
enum DropOperation
```

## Topics

### Constants

- [NSCollectionView.DropOperation.on](dropoperation/on.md): The drop occurs at the collection view item to which the item was dragged.
- [NSCollectionView.DropOperation.before](dropoperation/before.md): The drop occurs before the collection view item to which the item was dragged.

### Initializers

- [init(rawValue:)](dropoperation/init%28rawvalue_%29.md)

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

- [NSCollectionView.ScrollPosition](scrollposition.md): Constants indicating the options for scrolling the collection view’s content.

# NSCollectionViewDropOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

These constants specify if acceptance of a drop should be at the item it is dropped on or before the item. These constants are used by the  [collectionView:acceptDrop:index:dropOperation:](../nscollectionviewdelegate/collectionview%28__acceptdrop_index_dropoperation_%29.md) and [collectionView:validateDrop:proposedIndex:dropOperation:](../nscollectionviewdelegate/collectionview%28__validatedrop_proposedindex_dropoperation_%29.md) methods in [NSCollectionViewDelegate](../nscollectionviewdelegate.md)

## Declaration

```objectivec
enum NSCollectionViewDropOperation : NSInteger;
```

## Topics

### Constants

- [NSCollectionViewDropOn](dropoperation/on.md): The drop occurs at the collection view item to which the item was dragged.
- [NSCollectionViewDropBefore](dropoperation/before.md): The drop occurs before the collection view item to which the item was dragged.

## See Also

### Constants

- [NSCollectionViewScrollPosition](scrollposition.md): Constants indicating the options for scrolling the collection view’s content.
