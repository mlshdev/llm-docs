> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/selectall(_:)](https://developer.apple.com/documentation/appkit/nscollectionview/selectall(_:))

# selectAll(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Selects all items in the collection view, if doing so is possible.

## Declaration

```swift
@IBAction func selectAll(_ sender: Any?)
```

## Parameters

- `sender`: The object that requested the action. You may specify `nil` for this property.

<a id="Discussion"></a>

## Discussion

This method works only when the [isSelectable](isselectable.md) and [allowsMultipleSelection](allowsmultipleselection.md) properties are both [true](https://developer.apple.com/documentation/swift/true). If either property is set to [false](https://developer.apple.com/documentation/swift/false), this method quietly does nothing and any connected menu item is disabled.

This method consults the delegate object regarding the selection. Specifically, it calls the delegate’s [collectionView(\_:shouldSelectItemsAt:)](../nscollectionviewdelegate/collectionview%28__shouldselectitemsat_%29.md) method to see if the items should be selected. For any items that are selected, it calls the [collectionView(\_:didSelectItemsAt:)](../nscollectionviewdelegate/collectionview%28__didselectitemsat_%29.md) method.

## See Also

### Managing the Selection

- [isSelectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItems(at:scrollPosition:)](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItems(at:)](deselectitems%28at_%29.md): Removes the specified items from the current selection.

# selectAll: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Selects all items in the collection view, if doing so is possible.

## Declaration

```objectivec
- (void) selectAll:(id) sender;
```

## Parameters

- `sender`: The object that requested the action. You may specify `nil` for this property.

<a id="Discussion"></a>

## Discussion

This method works only when the [selectable](isselectable.md) and [allowsMultipleSelection](allowsmultipleselection.md) properties are both [true](https://developer.apple.com/documentation/swift/true). If either property is set to [false](https://developer.apple.com/documentation/swift/false), this method quietly does nothing and any connected menu item is disabled.

This method consults the delegate object regarding the selection. Specifically, it calls the delegate’s [collectionView:shouldSelectItemsAtIndexPaths:](../nscollectionviewdelegate/collectionview%28__shouldselectitemsat_%29.md) method to see if the items should be selected. For any items that are selected, it calls the [collectionView:didSelectItemsAtIndexPaths:](../nscollectionviewdelegate/collectionview%28__didselectitemsat_%29.md) method.

## See Also

### Managing the Selection

- [selectable](isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](selectionindexpaths.md): The set of index paths representing the currently selected items.
- [deselectAll:](deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItemsAtIndexPaths:scrollPosition:](selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItemsAtIndexPaths:](deselectitems%28at_%29.md): Removes the specified items from the current selection.
