> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/deselectitem(at:)](https://developer.apple.com/documentation/appkit/nscomboboxcell/deselectitem(at:))

# deselectItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects the pop-up list item at the given index if it’s selected.

## Declaration

```swift
func deselectItem(at index: Int)
```

## Parameters

- `index`: The index of the item to deselect.

<a id="Discussion"></a>

## Discussion

If the selection does in fact change, this method posts an [selectionDidChangeNotification](../nscombobox/selectiondidchangenotification.md) to the default notification center.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.

### Manipulating the Selection

- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItem(withObjectValue:)](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the specified object.

# deselectItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deselects the pop-up list item at the given index if it’s selected.

## Declaration

```objectivec
- (void) deselectItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the item to deselect.

<a id="Discussion"></a>

## Discussion

If the selection does in fact change, this method posts an [NSComboBoxSelectionDidChangeNotification](../nscombobox/selectiondidchangenotification.md) to the default notification center.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.

### Manipulating the Selection

- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItemWithObjectValue:](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the specified object.
