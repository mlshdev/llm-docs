> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:shouldselectitemsat:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:shouldselectitemsat:))

# collectionView(\_:shouldSelectItemsAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate to approve the pending selection of items.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, shouldSelectItemsAt indexPaths: Set<IndexPath>) -> Set<IndexPath>
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items selected by the user.

<a id="return-value"></a>

## Return Value

The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items that you want to be selected. If you do not want any items selected, return an empty set.

<a id="Discussion"></a>

## Discussion

Use this method to approve or modify the items that the user tries to select. During interactive selection, the collection view calls this method whenever the user selects new items. Your implementation of the method can return the proposed set of index paths as-is or modify the set before returning it. You might modify the set to disallow the selection of specific items or specific combinations of items.

This method is not called when you set the selection programmatically using the methods of the [NSCollectionView](../nscollectionview.md) class. If you do not implement this method, the collection view selects the items specified by the `indexPaths` parameter.

## See Also

### Managing the Selection

- [collectionView(\_:didSelectItemsAt:)](collectionview%28__didselectitemsat_%29.md): Notifies the delegate object that one or more items were selected.
- [collectionView(\_:shouldDeselectItemsAt:)](collectionview%28__shoulddeselectitemsat_%29.md): Asks the delegate object to approve the pending deselection of items.
- [collectionView(\_:didDeselectItemsAt:)](collectionview%28__diddeselectitemsat_%29.md): Notifies the delegate object that one or more items were deselected.

# collectionView:shouldSelectItemsAtIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate to approve the pending selection of items.

## Declaration

```objectivec
- (NSSet<NSIndexPath *> *) collectionView:(NSCollectionView *) collectionView shouldSelectItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths;
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items selected by the user.

<a id="return-value"></a>

## Return Value

The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items that you want to be selected. If you do not want any items selected, return an empty set.

<a id="Discussion"></a>

## Discussion

Use this method to approve or modify the items that the user tries to select. During interactive selection, the collection view calls this method whenever the user selects new items. Your implementation of the method can return the proposed set of index paths as-is or modify the set before returning it. You might modify the set to disallow the selection of specific items or specific combinations of items.

This method is not called when you set the selection programmatically using the methods of the [NSCollectionView](../nscollectionview.md) class. If you do not implement this method, the collection view selects the items specified by the `indexPaths` parameter.

## See Also

### Managing the Selection

- [collectionView:didSelectItemsAtIndexPaths:](collectionview%28__didselectitemsat_%29.md): Notifies the delegate object that one or more items were selected.
- [collectionView:shouldDeselectItemsAtIndexPaths:](collectionview%28__shoulddeselectitemsat_%29.md): Asks the delegate object to approve the pending deselection of items.
- [collectionView:didDeselectItemsAtIndexPaths:](collectionview%28__diddeselectitemsat_%29.md): Notifies the delegate object that one or more items were deselected.
