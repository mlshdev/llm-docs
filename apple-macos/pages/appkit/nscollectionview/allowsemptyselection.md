> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/allowsemptyselection](https://developer.apple.com/documentation/appkit/nscollectionview/allowsemptyselection)

# allowsEmptySelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value indicating whether the collection view may have no selected items.

## Declaration

```swift
var allowsEmptySelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which allows the collection view to have no selected items. Setting this property to [false](https://developer.apple.com/documentation/swift/false) causes the collection view to always leave at least one item selected.

## See Also

### Managing the Selection

- [isSelectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll(\_:)](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItems(at:scrollPosition:)](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItems(at:)](deselectitems%28at_%29.md): Removes the specified items from the current selection.

# allowsEmptySelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value indicating whether the collection view may have no selected items.

## Declaration

```objectivec
@property BOOL allowsEmptySelection;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which allows the collection view to have no selected items. Setting this property to [false](https://developer.apple.com/documentation/swift/false) causes the collection view to always leave at least one item selected.

## See Also

### Managing the Selection

- [selectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll:](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll:](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItemsAtIndexPaths:scrollPosition:](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItemsAtIndexPaths:](deselectitems%28at_%29.md): Removes the specified items from the current selection.
