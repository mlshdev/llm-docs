> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/selectitems(at:scrollposition:)](https://developer.apple.com/documentation/appkit/nscollectionview/selectitems(at:scrollposition:))

# selectItems(at:scrollPosition:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds the specified items to the current selection and optionally scrolls the items into position.

## Declaration

```swift
func selectItems(at indexPaths: Set<IndexPath>, scrollPosition: NSCollectionView.ScrollPosition)
```

## Parameters

- `indexPaths`: The index paths of the items you want to select.
- `scrollPosition`: The options for scrolling the newly selected items into view. You may combine one vertical and one horizontal scrolling option when calling this method. Specifying more than one option for either the vertical or horizontal directions raises an exception.

<a id="Discussion"></a>

## Discussion

Use this method to extend the current selection. If you want to animate the selection of the new items, call this method on the collection view’s [animator()](../nsanimatablepropertycontainer/animator%28%29.md) proxy object instead. This method does not call any methods of the delegate object when making the selection.

## See Also

### Managing the Selection

- [isSelectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll(\_:)](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all items in the collection view.
- [deselectItems(at:)](deselectitems%28at_%29.md): Removes the specified items from the current selection.

# selectItemsAtIndexPaths:scrollPosition: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds the specified items to the current selection and optionally scrolls the items into position.

## Declaration

```objectivec
- (void) selectItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths scrollPosition:(NSCollectionViewScrollPosition) scrollPosition;
```

## Parameters

- `indexPaths`: The index paths of the items you want to select.
- `scrollPosition`: The options for scrolling the newly selected items into view. You may combine one vertical and one horizontal scrolling option when calling this method. Specifying more than one option for either the vertical or horizontal directions raises an exception.

<a id="Discussion"></a>

## Discussion

Use this method to extend the current selection. If you want to animate the selection of the new items, call this method on the collection view’s [animator](../nsanimatablepropertycontainer/animator%28%29.md) proxy object instead. This method does not call any methods of the delegate object when making the selection.

## See Also

### Managing the Selection

- [selectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll:](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll:](deselectall%28__%29.md): Deselects all items in the collection view.
- [deselectItemsAtIndexPaths:](deselectitems%28at_%29.md): Removes the specified items from the current selection.
