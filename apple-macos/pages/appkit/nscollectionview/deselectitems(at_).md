> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/deselectitems(at:)](https://developer.apple.com/documentation/appkit/nscollectionview/deselectitems(at:))

# deselectItems(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Removes the specified items from the current selection.

## Declaration

```swift
func deselectItems(at indexPaths: Set<IndexPath>)
```

## Parameters

- `indexPaths`: The index paths of the items you want to deselect.

<a id="Discussion"></a>

## Discussion

Use this method to reduce the current selection. If you want to animate the deselection of the new items, call this method on the collection view’s [animator()](../nsanimatablepropertycontainer/animator%28%29.md) proxy object instead. This method does not call any methods of the delegate object when making the selection.

## See Also

### Managing the Selection

- [isSelectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll(\_:)](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItems(at:scrollPosition:)](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.

# deselectItemsAtIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Removes the specified items from the current selection.

## Declaration

```objectivec
- (void) deselectItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: The index paths of the items you want to deselect.

<a id="Discussion"></a>

## Discussion

Use this method to reduce the current selection. If you want to animate the deselection of the new items, call this method on the collection view’s [animator](../nsanimatablepropertycontainer/animator%28%29.md) proxy object instead. This method does not call any methods of the delegate object when making the selection.

## See Also

### Managing the Selection

- [selectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll:](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll:](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItemsAtIndexPaths:scrollPosition:](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
