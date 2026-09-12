> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:didchangeitemsat:to:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:didchangeitemsat:to:))

# collectionView(\_:didChangeItemsAt:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate that the highlight state of the specified items changed.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, didChangeItemsAt indexPaths: Set<IndexPath>, to highlightState: NSCollectionViewItem.HighlightState)
```

## Parameters

- `collectionView`: The collection view notifying you of the highlight change.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items whose highlight state changed.
- `highlightState`: The new highlight state of the items.

<a id="Discussion"></a>

## Discussion

After the highlight state of one or more items changes successfully, the collection view calls this method to report the change. Use this method to respond to the change and to make any necessary adjustments to your content or the collection view.

## See Also

### Managing Item Highlighting

- [collectionView(\_:shouldChangeItemsAt:to:)](collectionview%28__shouldchangeitemsat_to_%29.md): Asks the delegate to approve the pending highlighting of the specified items.

# collectionView:didChangeItemsAtIndexPaths:toHighlightState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate that the highlight state of the specified items changed.

## Declaration

```objectivec
- (void) collectionView:(NSCollectionView *) collectionView didChangeItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths toHighlightState:(NSCollectionViewItemHighlightState) highlightState;
```

## Parameters

- `collectionView`: The collection view notifying you of the highlight change.
- `indexPaths`: The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects corresponding to the items whose highlight state changed.
- `highlightState`: The new highlight state of the items.

<a id="Discussion"></a>

## Discussion

After the highlight state of one or more items changes successfully, the collection view calls this method to report the change. Use this method to respond to the change and to make any necessary adjustments to your content or the collection view.

## See Also

### Managing Item Highlighting

- [collectionView:shouldChangeItemsAtIndexPaths:toHighlightState:](collectionview%28__shouldchangeitemsat_to_%29.md): Asks the delegate to approve the pending highlighting of the specified items.
