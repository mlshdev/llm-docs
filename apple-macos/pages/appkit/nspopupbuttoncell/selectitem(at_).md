> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/selectitem(at:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/selectitem(at:))

# selectItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the item in the menu at the specified index.

## Declaration

```swift
func selectItem(at index: Int)
```

## Parameters

- `index`: The index of the item you want to select, or `-1` you want to deselect all menu items.

<a id="Discussion"></a>

## Discussion

By default, selecting or deselecting a menu item from a pop-up menu changes its state. Selecting a menu item from a pull-down menu does not automatically alter the state of the item. To disassociate the current selection from the state of menu items, set the [altersStateOfSelectedItem](altersstateofselecteditem.md) property to [false](https://developer.apple.com/documentation/swift/false).

Subclassers can override this method to catch all select calls.

## See Also

### Related Documentation

- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.

### Dealing with selection

- [select(\_:)](select%28__%29.md): Selects the specified menu item.
- [selectItem(withTag:)](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle(\_:)](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.
- [synchronizeTitleAndSelectedItem()](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.

# selectItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the item in the menu at the specified index.

## Declaration

```objectivec
- (void) selectItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the item you want to select, or `-1` you want to deselect all menu items.

<a id="Discussion"></a>

## Discussion

By default, selecting or deselecting a menu item from a pop-up menu changes its state. Selecting a menu item from a pull-down menu does not automatically alter the state of the item. To disassociate the current selection from the state of menu items, set the [altersStateOfSelectedItem](altersstateofselecteditem.md) property to [false](https://developer.apple.com/documentation/swift/false).

Subclassers can override this method to catch all select calls.

## See Also

### Related Documentation

- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.

### Dealing with selection

- [selectItem:](select%28__%29.md): Selects the specified menu item.
- [selectItemWithTag:](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle:](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.
- [synchronizeTitleAndSelectedItem](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.
