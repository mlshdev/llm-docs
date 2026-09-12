> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/deselectitem(at:animated:)](https://developer.apple.com/documentation/uikit/uicollectionview/deselectitem(at:animated:))

# deselectItem(at:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deselects the item at the specified index.

## Declaration

```swift
func deselectItem(at indexPath: IndexPath, animated: Bool)
```

## Parameters

- `indexPath`: The index path of the item to select. Specifying `nil` results in no change to the current selection.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the change in the selection or [false](https://developer.apple.com/documentation/swift/false) to make the change without animating it.

<a id="Discussion"></a>

## Discussion

If the [allowsSelection](allowsselection.md) property is [false](https://developer.apple.com/documentation/swift/false), calling this method has no effect.

This method doesn’t cause any selection-related delegate methods to be called.

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [selectItem(at:animated:scrollPosition:)](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.

# deselectItemAtIndexPath:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deselects the item at the specified index.

## Declaration

```objectivec
- (void) deselectItemAtIndexPath:(NSIndexPath *) indexPath animated:(BOOL) animated;
```

## Parameters

- `indexPath`: The index path of the item to select. Specifying `nil` results in no change to the current selection.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the change in the selection or [false](https://developer.apple.com/documentation/swift/false) to make the change without animating it.

<a id="Discussion"></a>

## Discussion

If the [allowsSelection](allowsselection.md) property is [false](https://developer.apple.com/documentation/swift/false), calling this method has no effect.

This method doesn’t cause any selection-related delegate methods to be called.

## See Also

### Selecting cells

- [indexPathsForSelectedItems](indexpathsforselecteditems.md): The index paths for the selected items.
- [selectItemAtIndexPath:animated:scrollPosition:](selectitem%28at_animated_scrollposition_%29.md): Selects the item at the specified index path and optionally scrolls it into view.
- [allowsSelection](allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether users can select more than one item in the collection view.
- [allowsSelectionDuringEditing](allowsselectionduringediting.md): A Boolean value that determines whether users can select cells while the collection view is in editing mode.
- [allowsMultipleSelectionDuringEditing](allowsmultipleselectionduringediting.md): A Boolean value that controls whether users can select more than one cell simultaneously in editing mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
