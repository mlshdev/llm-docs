> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/additem(withtitle:)](https://developer.apple.com/documentation/appkit/nspopupbutton/additem(withtitle:))

# addItem(withTitle:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds an item with the specified title to the end of the menu.

## Declaration

```swift
func addItem(withTitle title: String)
```

## Parameters

- `title`: The title of the menu-item entry. If an item with the same title already exists in the menu, the existing item is removed and the new one is added.

<a id="Discussion"></a>

## Discussion

If you want to move an item, it’s better to invoke [removeItem(withTitle:)](removeitem%28withtitle_%29.md) explicitly and then send this method. After adding the item, this method calls the [synchronizeTitleAndSelectedItem()](synchronizetitleandselecteditem%28%29.md) method to make sure the item being displayed matches the currently selected item.

Since this method searches for duplicate items, it should not be used if you are adding an item to an already populated menu with more than a few hundred items. Add items directly to the receiver’s menu instead.

## See Also

### Related Documentation

- [setTitle(\_:)](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.

### Inserting and deleting items

- [addItems(withTitles:)](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItem(withTitle:at:)](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeAllItems()](removeallitems%28%29.md): Removes all items in the receiver’s item menu.
- [removeItem(withTitle:)](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index.

# addItemWithTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds an item with the specified title to the end of the menu.

## Declaration

```objectivec
- (void) addItemWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title of the menu-item entry. If an item with the same title already exists in the menu, the existing item is removed and the new one is added.

<a id="Discussion"></a>

## Discussion

If you want to move an item, it’s better to invoke [removeItemWithTitle:](removeitem%28withtitle_%29.md) explicitly and then send this method. After adding the item, this method calls the [synchronizeTitleAndSelectedItem](synchronizetitleandselecteditem%28%29.md) method to make sure the item being displayed matches the currently selected item.

Since this method searches for duplicate items, it should not be used if you are adding an item to an already populated menu with more than a few hundred items. Add items directly to the receiver’s menu instead.

## See Also

### Related Documentation

- [setTitle:](settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.

### Inserting and deleting items

- [addItemsWithTitles:](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItemWithTitle:atIndex:](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeAllItems](removeallitems%28%29.md): Removes all items in the receiver’s item menu.
- [removeItemWithTitle:](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index.
