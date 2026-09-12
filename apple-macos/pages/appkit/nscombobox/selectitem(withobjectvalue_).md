> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/selectitem(withobjectvalue:)](https://developer.apple.com/documentation/appkit/nscombobox/selectitem(withobjectvalue:))

# selectItem(withObjectValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the first pop-up list item that corresponds to the given object.

## Declaration

```swift
func selectItem(withObjectValue object: Any?)
```

## Parameters

- `object`: The object to select in the pop-up list.  Objects are considered equal if they have the same id or if `isEqual:` returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method logs a warning if [usesDataSource](usesdatasource.md) returns [true](https://developer.apple.com/documentation/swift/true). Posts an [selectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center if the selection does in fact change. Note that this method doesn’t alter the contents of the combo box’s text field.

## See Also

### Related Documentation

- [objectValue](../nscontrol/objectvalue.md): The value of the receiver’s cell as an Objective-C object.

### Manipulating the Selection

- [deselectItem(at:)](deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the pop-up list row at the given index.

# selectItemWithObjectValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the first pop-up list item that corresponds to the given object.

## Declaration

```objectivec
- (void) selectItemWithObjectValue:(id) object;
```

## Parameters

- `object`: The object to select in the pop-up list.  Objects are considered equal if they have the same id or if `isEqual:` returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method logs a warning if [usesDataSource](usesdatasource.md) returns [true](https://developer.apple.com/documentation/swift/true). Posts an [NSComboBoxSelectionDidChangeNotification](selectiondidchangenotification.md) to the default notification center if the selection does in fact change. Note that this method doesn’t alter the contents of the combo box’s text field.

## See Also

### Related Documentation

- [objectValue](../nscontrol/objectvalue.md): The value of the receiver’s cell as an Objective-C object.

### Manipulating the Selection

- [deselectItemAtIndex:](deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the pop-up list row at the given index.
