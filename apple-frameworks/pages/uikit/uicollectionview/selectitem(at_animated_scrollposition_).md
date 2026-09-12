> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/selectitem(at:animated:scrollposition:)](https://developer.apple.com/documentation/uikit/uicollectionview/selectitem(at:animated:scrollposition:))

# selectItem(at:animated:scrollPosition:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Selects the item at the specified index path and optionally scrolls it into view.

## Declaration

```swift
func selectItem(at indexPath: IndexPath?, animated: Bool, scrollPosition: UICollectionView.ScrollPosition)
```

## Parameters

- `indexPath`: The index path of the item to select. Specifying `nil` for this parameter clears the current selection.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the change in the selection or [false](https://developer.apple.com/documentation/swift/false) to make the change without animating it.
- `scrollPosition`: An option that specifies where the item should be positioned when scrolling finishes. For a list of possible values, see [UICollectionView.ScrollPosition](scrollposition.md).

<a id="Discussion"></a>

## Discussion

If the [allowsSelection](allowsselection.md) property is [false](https://developer.apple.com/documentation/swift/false), calling this method has no effect. If there’s an existing selection with a different index path and the [allowsMultipleSelection](allowsmultipleselection.md) property is [false](https://developer.apple.com/documentation/swift/false), calling this method replaces the previous selection.

This method doesn’t cause any selection-related delegate methods to be called.

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [deselectItem(at:animated:)](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.

# selectItemAtIndexPath:animated:scrollPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Selects the item at the specified index path and optionally scrolls it into view.

## Declaration

```objectivec
- (void) selectItemAtIndexPath:(NSIndexPath *) indexPath animated:(BOOL) animated scrollPosition:(UICollectionViewScrollPosition) scrollPosition;
```

## Parameters

- `indexPath`: The index path of the item to select. Specifying `nil` for this parameter clears the current selection.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the change in the selection or [false](https://developer.apple.com/documentation/swift/false) to make the change without animating it.
- `scrollPosition`: An option that specifies where the item should be positioned when scrolling finishes. For a list of possible values, see [UICollectionViewScrollPosition](scrollposition.md).

<a id="Discussion"></a>

## Discussion

If the [allowsSelection](allowsselection.md) property is [false](https://developer.apple.com/documentation/swift/false), calling this method has no effect. If there’s an existing selection with a different index path and the [allowsMultipleSelection](allowsmultipleselection.md) property is [false](https://developer.apple.com/documentation/swift/false), calling this method replaces the previous selection.

This method doesn’t cause any selection-related delegate methods to be called.

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [deselectItemAtIndexPath:animated:](deselectitem%28at_animated_%29.md): Deselects the item at the specified index.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
