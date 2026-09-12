> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:didselectitemsat:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:didselectitemsat:))

# collectionView(\_:didSelectItemsAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate object that one or more items were selected.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, didSelectItemsAt indexPaths: Set<IndexPath>)
```

## Parameters

- `collectionView`: The collection view notifying you of the selection change.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items that are now selected.

<a id="Discussion"></a>

## Discussion

After the user successfully selects one or more items, the collection view calls this method to let you know that the selection has been made. Use this method to respond to the selection change and to make any necessary adjustments to your content or the collection view.

This method is not called when you set the selection programmatically using the methods of the [NSCollectionView](../nscollectionview.md) class.

## See Also

### Managing the Selection

- [collectionView(\_:shouldSelectItemsAt:)](collectionview%28__shouldselectitemsat_%29.md): Asks the delegate to approve the pending selection of items.
- [collectionView(\_:shouldDeselectItemsAt:)](collectionview%28__shoulddeselectitemsat_%29.md): Asks the delegate object to approve the pending deselection of items.
- [collectionView(\_:didDeselectItemsAt:)](collectionview%28__diddeselectitemsat_%29.md): Notifies the delegate object that one or more items were deselected.

# collectionView:didSelectItemsAtIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate object that one or more items were selected.

## Declaration

```objectivec
- (void) collectionView:(NSCollectionView *) collectionView didSelectItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths;
```

## Parameters

- `collectionView`: The collection view notifying you of the selection change.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items that are now selected.

<a id="Discussion"></a>

## Discussion

After the user successfully selects one or more items, the collection view calls this method to let you know that the selection has been made. Use this method to respond to the selection change and to make any necessary adjustments to your content or the collection view.

This method is not called when you set the selection programmatically using the methods of the [NSCollectionView](../nscollectionview.md) class.

## See Also

### Managing the Selection

- [collectionView:shouldSelectItemsAtIndexPaths:](collectionview%28__shouldselectitemsat_%29.md): Asks the delegate to approve the pending selection of items.
- [collectionView:shouldDeselectItemsAtIndexPaths:](collectionview%28__shoulddeselectitemsat_%29.md): Asks the delegate object to approve the pending deselection of items.
- [collectionView:didDeselectItemsAtIndexPaths:](collectionview%28__diddeselectitemsat_%29.md): Notifies the delegate object that one or more items were deselected.
