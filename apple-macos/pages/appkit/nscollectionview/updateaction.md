> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/updateaction](https://developer.apple.com/documentation/appkit/nscollectionview/updateaction)

# NSCollectionView.UpdateAction (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants indicating the type of action being performed on an item.

## Declaration

```swift
enum UpdateAction
```

## Topics

### Constants

- [NSCollectionView.UpdateAction.insert](updateaction/insert.md): Insert the item into the collection view.
- [NSCollectionView.UpdateAction.delete](updateaction/delete.md): Remove the action from the collection view.
- [NSCollectionView.UpdateAction.reload](updateaction/reload.md): Reload the item, which consists of deleting and then inserting the item.
- [NSCollectionView.UpdateAction.move](updateaction/move.md): Move the item from its current location to a new location.
- [NSCollectionView.UpdateAction.none](updateaction/none.md): Take no action on the item.

### Initializers

- [init(rawValue:)](updateaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [NSCollectionView.ScrollDirection](scrolldirection.md): Constants indicating the scrolling direction for the layout.

# NSCollectionUpdateAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants indicating the type of action being performed on an item.

## Declaration

```objectivec
enum NSCollectionUpdateAction : NSInteger;
```

## Topics

### Constants

- [NSCollectionUpdateActionInsert](updateaction/insert.md): Insert the item into the collection view.
- [NSCollectionUpdateActionDelete](updateaction/delete.md): Remove the action from the collection view.
- [NSCollectionUpdateActionReload](updateaction/reload.md): Reload the item, which consists of deleting and then inserting the item.
- [NSCollectionUpdateActionMove](updateaction/move.md): Move the item from its current location to a new location.
- [NSCollectionUpdateActionNone](updateaction/none.md): Take no action on the item.

## See Also

### Enumerations

- [NSCollectionViewScrollDirection](scrolldirection.md): Constants indicating the scrolling direction for the layout.
