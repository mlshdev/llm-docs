> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:diddeselectitemsat:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:diddeselectitemsat:))

# collectionView(\_:didDeselectItemsAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate object that one or more items were deselected.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, didDeselectItemsAt indexPaths: Set<IndexPath>)
```

## Parameters

- `collectionView`: The collection view notifying you of the selection change.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items that were deselected.

<a id="Discussion"></a>

## Discussion

After the user successfully deselects one or more items, the collection view calls this method to let you know that the items are no longer selected. Use this method to respond to the selection change and to make any necessary adjustments to your content or the collection view.

This method is not called when you set the selection programmatically using the methods of the [NSCollectionView](../nscollectionview.md) class.

## See Also

### Managing the Selection

- [collectionView(\_:shouldSelectItemsAt:)](collectionview%28__shouldselectitemsat_%29.md): Asks the delegate to approve the pending selection of items.
- [collectionView(\_:didSelectItemsAt:)](collectionview%28__didselectitemsat_%29.md): Notifies the delegate object that one or more items were selected.
- [collectionView(\_:shouldDeselectItemsAt:)](collectionview%28__shoulddeselectitemsat_%29.md): Asks the delegate object to approve the pending deselection of items.

# collectionView:didDeselectItemsAtIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate object that one or more items were deselected.

## Declaration

```objectivec
- (void) collectionView:(NSCollectionView *) collectionView didDeselectItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths;
```

## Parameters

- `collectionView`: The collection view notifying you of the selection change.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items that were deselected.

<a id="Discussion"></a>

## Discussion

After the user successfully deselects one or more items, the collection view calls this method to let you know that the items are no longer selected. Use this method to respond to the selection change and to make any necessary adjustments to your content or the collection view.

This method is not called when you set the selection programmatically using the methods of the [NSCollectionView](../nscollectionview.md) class.

## See Also

### Managing the Selection

- [collectionView:shouldSelectItemsAtIndexPaths:](collectionview%28__shouldselectitemsat_%29.md): Asks the delegate to approve the pending selection of items.
- [collectionView:didSelectItemsAtIndexPaths:](collectionview%28__didselectitemsat_%29.md): Notifies the delegate object that one or more items were selected.
- [collectionView:shouldDeselectItemsAtIndexPaths:](collectionview%28__shoulddeselectitemsat_%29.md): Asks the delegate object to approve the pending deselection of items.
