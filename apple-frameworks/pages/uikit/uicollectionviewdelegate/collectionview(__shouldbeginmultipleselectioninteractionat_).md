> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:shouldbeginmultipleselectioninteractionat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:shouldbeginmultipleselectioninteractionat:))

# collectionView(\_:shouldBeginMultipleSelectionInteractionAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, shouldBeginMultipleSelectionInteractionAt indexPath: IndexPath) -> Bool
```

## Parameters

- `collectionView`: The collection view calling this method.
- `indexPath`: The index path of the item that the user touched to start the two-finger pan gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the user to select multiple items using a two-finger pan gesture; otherwise, [false](https://developer.apple.com/documentation/swift/false) to disable the behavior. The default value is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the system recognizes a two-finger pan gesture, it calls this method before it sets [isEditing](../uicollectionview/isediting.md) to [true](https://developer.apple.com/documentation/swift/true). If you return [true](https://developer.apple.com/documentation/swift/true) from this method, the user can select multiple items using a two-finger pan gesture.

Users can select multiple items using the two-finger pan gesture on collection views that scroll either horizontally or vertically, but not both. Collection views that scroll in both directions won’t recognize the gesture or call this method.

If you don’t implement this method, the system uses the value of [allowsMultipleSelectionDuringEditing](../uicollectionview/allowsmultipleselectionduringediting.md) to determine whether a user can select multiple items using a pan gesture.

## See Also

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](../changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView(\_:shouldSelectItemAt:)](collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView(\_:didSelectItemAt:)](collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView(\_:shouldDeselectItemAt:)](collectionview%28__shoulddeselectitemat_%29.md): Asks the delegate if the specified item should be deselected.
- [collectionView(\_:didDeselectItemAt:)](collectionview%28__diddeselectitemat_%29.md): Tells the delegate that the item at the specified path was deselected.
- [collectionView(\_:didBeginMultipleSelectionInteractionAt:)](collectionview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction(\_:)](collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.

# collectionView:shouldBeginMultipleSelectionInteractionAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the user can select multiple items using a two-finger pan gesture in a collection view.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView shouldBeginMultipleSelectionInteractionAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view calling this method.
- `indexPath`: The index path of the item that the user touched to start the two-finger pan gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the user to select multiple items using a two-finger pan gesture; otherwise, [false](https://developer.apple.com/documentation/swift/false) to disable the behavior. The default value is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the system recognizes a two-finger pan gesture, it calls this method before it sets [editing](../uicollectionview/isediting.md) to [true](https://developer.apple.com/documentation/swift/true). If you return [true](https://developer.apple.com/documentation/swift/true) from this method, the user can select multiple items using a two-finger pan gesture.

Users can select multiple items using the two-finger pan gesture on collection views that scroll either horizontally or vertically, but not both. Collection views that scroll in both directions won’t recognize the gesture or call this method.

If you don’t implement this method, the system uses the value of [allowsMultipleSelectionDuringEditing](../uicollectionview/allowsmultipleselectionduringediting.md) to determine whether a user can select multiple items using a pan gesture.

## See Also

### Managing the selected cells

- [Changing the appearance of selected and highlighted cells](../changing-the-appearance-of-selected-and-highlighted-cells.md): Provide visual feedback to the user about the state of a cell and the transition between states.
- [Selecting multiple items with a two-finger pan gesture](../selecting-multiple-items-with-a-two-finger-pan-gesture.md): Accelerate user selection of multiple items using the multiselect gesture on table and collection views.
- [collectionView:shouldSelectItemAtIndexPath:](collectionview%28__shouldselectitemat_%29.md): Asks the delegate if the specified item should be selected.
- [collectionView:didSelectItemAtIndexPath:](collectionview%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index path was selected.
- [collectionView:shouldDeselectItemAtIndexPath:](collectionview%28__shoulddeselectitemat_%29.md): Asks the delegate if the specified item should be deselected.
- [collectionView:didDeselectItemAtIndexPath:](collectionview%28__diddeselectitemat_%29.md): Tells the delegate that the item at the specified path was deselected.
- [collectionView:didBeginMultipleSelectionInteractionAtIndexPath:](collectionview%28__didbeginmultipleselectioninteractionat_%29.md): Tells the delegate when the user starts using a two-finger pan gesture to select multiple items in a collection view.
- [collectionViewDidEndMultipleSelectionInteraction:](collectionviewdidendmultipleselectioninteraction%28__%29.md): Tells the delegate when the user stops using a two-finger pan gesture to select multiple items in a collection view.
