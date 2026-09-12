> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdatasource/collectionview(_:canmoveitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdatasource/collectionview(_:canmoveitemat:))

# collectionView(\_:canMoveItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks your data source object whether the specified item can move to another location in the collection view.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, canMoveItemAt indexPath: IndexPath) -> Bool
```

## Parameters

- `collectionView`: The collection view requesting this information.
- `indexPath`: The index path of the item that the collection view is trying to move.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item is allowed to move, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t.

<a id="Discussion"></a>

## Discussion

Use this method to selectively allow or disallow the movement of items within a collection view. If you don’t implement this method, but you do implement the [collectionView(\_:moveItemAt:to:)](collectionview%28__moveitemat_to_%29.md) method, the collection view allows all items to be reordered.

## See Also

### Reordering items

- [collectionView(\_:moveItemAt:to:)](collectionview%28__moveitemat_to_%29.md): Tells your data source object to move the specified item to its new location.

# collectionView:canMoveItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks your data source object whether the specified item can move to another location in the collection view.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView canMoveItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view requesting this information.
- `indexPath`: The index path of the item that the collection view is trying to move.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item is allowed to move, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t.

<a id="Discussion"></a>

## Discussion

Use this method to selectively allow or disallow the movement of items within a collection view. If you don’t implement this method, but you do implement the [collectionView:moveItemAtIndexPath:toIndexPath:](collectionview%28__moveitemat_to_%29.md) method, the collection view allows all items to be reordered.

## See Also

### Reordering items

- [collectionView:moveItemAtIndexPath:toIndexPath:](collectionview%28__moveitemat_to_%29.md): Tells your data source object to move the specified item to its new location.
