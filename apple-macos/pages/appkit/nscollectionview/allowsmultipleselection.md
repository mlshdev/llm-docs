> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/allowsmultipleselection](https://developer.apple.com/documentation/appkit/nscollectionview/allowsmultipleselection)

# allowsMultipleSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value that indicates whether the user may select more than one item in the collection view.

## Declaration

```swift
var allowsMultipleSelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the collection view supports the selection of more than one item at a time. The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Changing the value from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false) reduces the current selection to the first item in the selected group.

## See Also

### Managing the Selection

- [isSelectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll(\_:)](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItems(at:scrollPosition:)](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItems(at:)](deselectitems%28at_%29.md): Removes the specified items from the current selection.

# allowsMultipleSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value that indicates whether the user may select more than one item in the collection view.

## Declaration

```objectivec
@property BOOL allowsMultipleSelection;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the collection view supports the selection of more than one item at a time. The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Changing the value from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false) reduces the current selection to the first item in the selected group.

## See Also

### Managing the Selection

- [selectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll:](selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll:](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItemsAtIndexPaths:scrollPosition:](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItemsAtIndexPaths:](deselectitems%28at_%29.md): Removes the specified items from the current selection.
