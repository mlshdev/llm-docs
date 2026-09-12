> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/indexofselecteditem](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/indexofselecteditem)

# indexOfSelectedItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the item last selected by the user.

## Declaration

```swift
var indexOfSelectedItem: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the index of the selected item, or `-1` if no item is selected.

## See Also

### Related Documentation

- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [index(of:)](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTarget:andAction:)](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [indexOfItem(withRepresentedObject:)](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.

### Dealing with selection

- [select(\_:)](select%28__%29.md): Selects the specified menu item.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItem(withTag:)](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle(\_:)](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [synchronizeTitleAndSelectedItem()](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.

# indexOfSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the item last selected by the user.

## Declaration

```objectivec
@property (readonly) NSInteger indexOfSelectedItem;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the index of the selected item, or `-1` if no item is selected.

## See Also

### Related Documentation

- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem:](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTarget:andAction:](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [indexOfItemWithRepresentedObject:](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.

### Dealing with selection

- [selectItem:](select%28__%29.md): Selects the specified menu item.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItemWithTag:](selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle:](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [synchronizeTitleAndSelectedItem](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.
