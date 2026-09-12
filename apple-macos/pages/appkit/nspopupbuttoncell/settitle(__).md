> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/settitle(_:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/settitle(_:))

# setTitle(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the string displayed in the receiver when the user isn’t pressing the mouse button.

## Declaration

```swift
func setTitle(_ string: String?)
```

## Parameters

- `string`: The string to display.

<a id="Discussion"></a>

## Discussion

For pull-down menus that get their titles from a menu item, this method simply sets the pop-up button cell’s menu item to the first item in the menu. For pop-up menus, if a menu item whose title matches `aString` exists, this method makes that menu item the current selection; otherwise, it creates a new menu item with the title `aString`, adds it to the pop-up menu, and selects it.

## See Also

### Related Documentation

- [init(textCell:pullsDown:)](init%28textcell_pullsdown_%29.md): Returns an `NSPopUpButtonCell` object initialized with the specified title.

### Dealing with selection

- [select(\_:)](select%28__%29.md): Selects the specified menu item.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItem(withTag:)](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.
- [synchronizeTitleAndSelectedItem()](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.

# setTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the string displayed in the receiver when the user isn’t pressing the mouse button.

## Declaration

```objectivec
- (void) setTitle:(NSString *) string;
```

## Parameters

- `string`: The string to display.

<a id="Discussion"></a>

## Discussion

For pull-down menus that get their titles from a menu item, this method simply sets the pop-up button cell’s menu item to the first item in the menu. For pop-up menus, if a menu item whose title matches `aString` exists, this method makes that menu item the current selection; otherwise, it creates a new menu item with the title `aString`, adds it to the pop-up menu, and selects it.

## See Also

### Related Documentation

- [initTextCell:pullsDown:](init%28textcell_pullsdown_%29.md): Returns an `NSPopUpButtonCell` object initialized with the specified title.

### Dealing with selection

- [selectItem:](select%28__%29.md): Selects the specified menu item.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItemWithTag:](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.
- [synchronizeTitleAndSelectedItem](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.
