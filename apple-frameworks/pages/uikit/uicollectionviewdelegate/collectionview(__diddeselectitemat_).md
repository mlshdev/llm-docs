> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:diddeselectitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:diddeselectitemat:))

# collectionView(\_:didDeselectItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that the item at the specified path was deselected.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, didDeselectItemAt indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view object that is notifying you of the selection change.
- `indexPath`: The index path of the cell that was deselected.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when the user successfully deselects an item in the collection view. It does not call this method when you programmatically deselect items.

## See Also

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](../changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView(\_:shouldSelectItemAt:)](collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView(\_:didSelectItemAt:)](collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView(\_:shouldDeselectItemAt:)](collectionview%28__shoulddeselectitemat_%29.md): Asks the delegate if the specified item should be deselected.
- [collectionView(\_:shouldBeginMultipleSelectionInteractionAt:)](collectionview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.
- [collectionView(\_:didBeginMultipleSelectionInteractionAt:)](collectionview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction(\_:)](collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.

# collectionView:didDeselectItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that the item at the specified path was deselected.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView didDeselectItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object that is notifying you of the selection change.
- `indexPath`: The index path of the cell that was deselected.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when the user successfully deselects an item in the collection view. It does not call this method when you programmatically deselect items.

## See Also

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](../changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView:shouldSelectItemAtIndexPath:](collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView:didSelectItemAtIndexPath:](collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView:shouldDeselectItemAtIndexPath:](collectionview%28__shoulddeselectitemat_%29.md): Asks the delegate if the specified item should be deselected.
- [collectionView:shouldBeginMultipleSelectionInteractionAtIndexPath:](collectionview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.
- [collectionView:didBeginMultipleSelectionInteractionAtIndexPath:](collectionview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction:](collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.
