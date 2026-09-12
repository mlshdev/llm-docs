> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/selectitem(at:)](https://developer.apple.com/documentation/appkit/nscombobox/selectitem(at:))

# selectItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the pop-up list row at the given index.

## Declaration

```swift
func selectItem(at index: Int)
```

## Parameters

- `index`: The index of the item to select in the pop-up list.

<a id="Discussion"></a>

## Discussion

Posts an [selectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center if the selection does in fact change. Note that this method does not alter the contents of the combo box’s text field.

## See Also

### Related Documentation

- [objectValue](../nscontrol/objectvalue.md): The value of the receiver’s cell as an Objective-C object.

### Manipulating the Selection

- [deselectItem(at:)](deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItem(withObjectValue:)](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.

# selectItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the pop-up list row at the given index.

## Declaration

```objectivec
- (void) selectItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the item to select in the pop-up list.

<a id="Discussion"></a>

## Discussion

Posts an [NSComboBoxSelectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center if the selection does in fact change. Note that this method does not alter the contents of the combo box’s text field.

## See Also

### Related Documentation

- [objectValue](../nscontrol/objectvalue.md): The value of the receiver’s cell as an Objective-C object.

### Manipulating the Selection

- [deselectItemAtIndex:](deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItemWithObjectValue:](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.
