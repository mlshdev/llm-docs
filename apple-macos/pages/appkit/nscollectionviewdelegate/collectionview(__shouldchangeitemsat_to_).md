> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:shouldchangeitemsat:to:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:shouldchangeitemsat:to:))

# collectionView(\_:shouldChangeItemsAt:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate to approve the pending highlighting of the specified items.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, shouldChangeItemsAt indexPaths: Set<IndexPath>, to highlightState: NSCollectionViewItem.HighlightState) -> Set<IndexPath>
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items being highlighted.
- `highlightState`: The new highlight state for the items.

<a id="return-value"></a>

## Return Value

The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items that you want to receive the specified highlight. If you do not want any items to receive the specified highlight state, return an empty set.

<a id="Discussion"></a>

## Discussion

Use this method to approve or modify the set of items targeted to receive the specified highlight state. During interactive selection or dragging, the collection view calls this method when actions occur that would affect the highlight state of items. Your implementation of the method can return the proposed set of index paths as-is or modify the set and disallow the highlighting of some or all of the items. Removing items from the set suppresses the corresponding actions, such as selecting the item or showing its eligibility as a drop target.

If you do not implement this method, the collection view updates the highlight state for the items specified by the `indexPaths` parameter.

## See Also

### Managing Item Highlighting

- [collectionView(\_:didChangeItemsAt:to:)](collectionview%28__didchangeitemsat_to_%29.md): Notifies the delegate that the highlight state of the specified items changed.

# collectionView:shouldChangeItemsAtIndexPaths:toHighlightState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate to approve the pending highlighting of the specified items.

## Declaration

```objectivec
- (NSSet<NSIndexPath *> *) collectionView:(NSCollectionView *) collectionView shouldChangeItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths toHighlightState:(NSCollectionViewItemHighlightState) highlightState;
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items being highlighted.
- `highlightState`: The new highlight state for the items.

<a id="return-value"></a>

## Return Value

The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items that you want to receive the specified highlight. If you do not want any items to receive the specified highlight state, return an empty set.

<a id="Discussion"></a>

## Discussion

Use this method to approve or modify the set of items targeted to receive the specified highlight state. During interactive selection or dragging, the collection view calls this method when actions occur that would affect the highlight state of items. Your implementation of the method can return the proposed set of index paths as-is or modify the set and disallow the highlighting of some or all of the items. Removing items from the set suppresses the corresponding actions, such as selecting the item or showing its eligibility as a drop target.

If you do not implement this method, the collection view updates the highlight state for the items specified by the `indexPaths` parameter.

## See Also

### Managing Item Highlighting

- [collectionView:didChangeItemsAtIndexPaths:toHighlightState:](collectionview%28__didchangeitemsat_to_%29.md): Notifies the delegate that the highlight state of the specified items changed.
