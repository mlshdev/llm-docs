> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:shoulddeselectitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:shoulddeselectitemat:))

# collectionView(\_:shouldDeselectItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate if the specified item should be deselected.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, shouldDeselectItemAt indexPath: IndexPath) -> Bool
```

## Parameters

- `collectionView`: The collection view object that is asking whether the selection should change.
- `indexPath`: The index path of the cell to be deselected.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be deselected or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when the user tries to deselect an item in the collection view. It does not call this method when you programmatically deselect items.

If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](../changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView(\_:shouldSelectItemAt:)](collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView(\_:didSelectItemAt:)](collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView(\_:didDeselectItemAt:)](collectionview%28__diddeselectitemat_%29.md): Tells the delegate that the item at the specified path was deselected.
- [collectionView(\_:shouldBeginMultipleSelectionInteractionAt:)](collectionview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.
- [collectionView(\_:didBeginMultipleSelectionInteractionAt:)](collectionview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction(\_:)](collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.

# collectionView:shouldDeselectItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate if the specified item should be deselected.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView shouldDeselectItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object that is asking whether the selection should change.
- `indexPath`: The index path of the cell to be deselected.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be deselected or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when the user tries to deselect an item in the collection view. It does not call this method when you programmatically deselect items.

If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](../changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView:shouldSelectItemAtIndexPath:](collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView:didSelectItemAtIndexPath:](collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView:didDeselectItemAtIndexPath:](collectionview%28__diddeselectitemat_%29.md): Tells the delegate that the item at the specified path was deselected.
- [collectionView:shouldBeginMultipleSelectionInteractionAtIndexPath:](collectionview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.
- [collectionView:didBeginMultipleSelectionInteractionAtIndexPath:](collectionview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction:](collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.
