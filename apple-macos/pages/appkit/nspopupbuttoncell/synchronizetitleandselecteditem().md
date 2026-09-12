> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/synchronizetitleandselecteditem()](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/synchronizetitleandselecteditem())

# synchronizeTitleAndSelectedItem() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Synchronizes the pop-up button’s displayed item with the currently selected menu item.

## Declaration

```swift
func synchronizeTitleAndSelectedItem()
```

<a id="Discussion"></a>

## Discussion

If no item is currently selected, this method synchronizes the pop-up buttons displayed item with the first menu item. If the pop-up button cell does not get its displayed item from a menu item, this method does nothing.

For pull-down menus, this method sets the displayed item to the title first menu item.

If the pop-up button’s menu does not contain any menu items, this method sets the pop-up button’s displayed item to `nil`, resulting in nothing being displayed in the control.

## See Also

### Dealing with selection

- [select(\_:)](select%28__%29.md): Selects the specified menu item.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItem(withTag:)](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle(\_:)](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.

# synchronizeTitleAndSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Synchronizes the pop-up button’s displayed item with the currently selected menu item.

## Declaration

```objectivec
- (void) synchronizeTitleAndSelectedItem;
```

<a id="Discussion"></a>

## Discussion

If no item is currently selected, this method synchronizes the pop-up buttons displayed item with the first menu item. If the pop-up button cell does not get its displayed item from a menu item, this method does nothing.

For pull-down menus, this method sets the displayed item to the title first menu item.

If the pop-up button’s menu does not contain any menu items, this method sets the pop-up button’s displayed item to `nil`, resulting in nothing being displayed in the control.

## See Also

### Dealing with selection

- [selectItem:](select%28__%29.md): Selects the specified menu item.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItemWithTag:](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle:](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.
