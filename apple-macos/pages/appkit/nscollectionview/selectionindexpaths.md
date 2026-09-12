> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/selectionindexpaths](https://developer.apple.com/documentation/appkit/nscollectionview/selectionindexpaths)

# selectionIndexPaths (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The set of index paths representing the currently selected items.

## Declaration

```swift
var selectionIndexPaths: Set<IndexPath> { get set }
```

<a id="Discussion"></a>

## Discussion

This property reflects the index paths of the currently selected items, where each index path contains a [section](https://developer.apple.com/documentation/foundation/nsindexpath/section) number and an index number for the [item](https://developer.apple.com/documentation/foundation/nsindexpath/item) in that section. This property is updated automatically when the user selects items interactively. You can also change the selection programmatically by assigning a new value to this property. To animate changes to the selection, call this method on the collection view’s [animator()](../nsanimatablepropertycontainer/animator%28%29.md) proxy object instead.

It is a programmer error to specify an index path that does not refer to a valid item in the data source. If you specify an invalid index path, this method raises an exception.

This property is key-value observable. Other methods that modify the selection automatically update this property.

## See Also

### Managing the Selection

- [isSelectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectAll(\_:)](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItems(at:scrollPosition:)](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItems(at:)](deselectitems%28at_%29.md): Removes the specified items from the current selection.

# selectionIndexPaths (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The set of index paths representing the currently selected items.

## Declaration

```objectivec
@property (copy) NSSet<NSIndexPath *> * selectionIndexPaths;
```

<a id="Discussion"></a>

## Discussion

This property reflects the index paths of the currently selected items, where each index path contains a [section](https://developer.apple.com/documentation/foundation/nsindexpath/section) number and an index number for the [item](https://developer.apple.com/documentation/foundation/nsindexpath/item) in that section. This property is updated automatically when the user selects items interactively. You can also change the selection programmatically by assigning a new value to this property. To animate changes to the selection, call this method on the collection view’s [animator](../nsanimatablepropertycontainer/animator%28%29.md) proxy object instead.

It is a programmer error to specify an index path that does not refer to a valid item in the data source. If you specify an invalid index path, this method raises an exception.

This property is key-value observable. Other methods that modify the selection automatically update this property.

## See Also

### Managing the Selection

- [selectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectAll:](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll:](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItemsAtIndexPaths:scrollPosition:](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItemsAtIndexPaths:](deselectitems%28at_%29.md): Removes the specified items from the current selection.
