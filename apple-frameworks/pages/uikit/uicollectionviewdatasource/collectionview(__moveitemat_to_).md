> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdatasource/collectionview(_:moveitemat:to:)](https://developer.apple.com/documentation/uikit/uicollectionviewdatasource/collectionview(_:moveitemat:to:))

# collectionView(\_:moveItemAt:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells your data source object to move the specified item to its new location.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, moveItemAt sourceIndexPath: IndexPath, to destinationIndexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view notifying you of the move.
- `sourceIndexPath`: The item’s original index path.
- `destinationIndexPath`: The new index path of the item.

<a id="Discussion"></a>

## Discussion

You must implement this method to support the reordering of items within the collection view. If you don’t implement this method, the collection view ignores any attempts to reorder items.

When interactions with an item end, the collection view calls this method if the position of the item changed. Use this method to update your data structures with the new index path information.

## See Also

### Reordering items

- [collectionView(\_:canMoveItemAt:)](collectionview%28__canmoveitemat_%29.md): Asks your data source object whether the specified item can move to another location in the collection view.

# collectionView:moveItemAtIndexPath:toIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells your data source object to move the specified item to its new location.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView moveItemAtIndexPath:(NSIndexPath *) sourceIndexPath toIndexPath:(NSIndexPath *) destinationIndexPath;
```

## Parameters

- `collectionView`: The collection view notifying you of the move.
- `sourceIndexPath`: The item’s original index path.
- `destinationIndexPath`: The new index path of the item.

<a id="Discussion"></a>

## Discussion

You must implement this method to support the reordering of items within the collection view. If you don’t implement this method, the collection view ignores any attempts to reorder items.

When interactions with an item end, the collection view calls this method if the position of the item changed. Use this method to update your data structures with the new index path information.

## See Also

### Reordering items

- [collectionView:canMoveItemAtIndexPath:](collectionview%28__canmoveitemat_%29.md): Asks your data source object whether the specified item can move to another location in the collection view.
