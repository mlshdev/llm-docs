> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:didbeginmultipleselectioninteractionat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:didbeginmultipleselectioninteractionat:))

# collectionView(\_:didBeginMultipleSelectionInteractionAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, didBeginMultipleSelectionInteractionAt indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view calling this method.
- `indexPath`: The index path of the item that the user touched to start the two-finger pan gesture.

<a id="Discussion"></a>

## Discussion

Your implementation of this method is a good place to indicate, in the app’s user interface, that the user is selecting multiple items; for example, you could replace an Edit or Select button with a Done button.

```swift
func collectionView(_ collectionView: UICollectionView, didBeginMultipleSelectionInteractionAt indexPath: IndexPath) {
    // Replace the Select button with Done, and put the 
    // collection view into editing mode.
    setEditing(true, animated: true)
}
```

## See Also

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](../changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView(\_:shouldSelectItemAt:)](collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView(\_:didSelectItemAt:)](collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView(\_:shouldDeselectItemAt:)](collectionview%28__shoulddeselectitemat_%29.md): Asks the delegate if the specified item should be deselected.
- [collectionView(\_:didDeselectItemAt:)](collectionview%28__diddeselectitemat_%29.md): Tells the delegate that the item at the specified path was deselected.
- [collectionView(\_:shouldBeginMultipleSelectionInteractionAt:)](collectionview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction(\_:)](collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.

# collectionView:didBeginMultipleSelectionInteractionAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView didBeginMultipleSelectionInteractionAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view calling this method.
- `indexPath`: The index path of the item that the user touched to start the two-finger pan gesture.

<a id="Discussion"></a>

## Discussion

Your implementation of this method is a good place to indicate, in the app’s user interface, that the user is selecting multiple items; for example, you could replace an Edit or Select button with a Done button.

```swift
func collectionView(_ collectionView: UICollectionView, didBeginMultipleSelectionInteractionAt indexPath: IndexPath) {
    // Replace the Select button with Done, and put the 
    // collection view into editing mode.
    setEditing(true, animated: true)
}
```

## See Also

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](../changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView:shouldSelectItemAtIndexPath:](collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView:didSelectItemAtIndexPath:](collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView:shouldDeselectItemAtIndexPath:](collectionview%28__shoulddeselectitemat_%29.md): Asks the delegate if the specified item should be deselected.
- [collectionView:didDeselectItemAtIndexPath:](collectionview%28__diddeselectitemat_%29.md): Tells the delegate that the item at the specified path was deselected.
- [collectionView:shouldBeginMultipleSelectionInteractionAtIndexPath:](collectionview%28__shouldbeginmultipleselectioninteractionat_%29.md): Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction:](collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.
