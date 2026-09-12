> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/insertitem(withtitle:at:)](https://developer.apple.com/documentation/appkit/nspopupbutton/insertitem(withtitle:at:))

# insertItem(withTitle:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts an item at the specified position in the menu.

## Declaration

```swift
func insertItem(withTitle title: String, at index: Int)
```

## Parameters

- `title`: The title of the new item. If an item with the same title already exists in the menu, the existing item is removed and the new one is added
- `index`: The zero-based index at which to insert the item. Specifying 0 inserts the item at the top of the menu.

<a id="Discussion"></a>

## Discussion

If you want to move an item, it’s better to invoke [removeItem(withTitle:)](removeitem%28withtitle_%29.md) explicitly and then send this method. After adding the item, this method uses the [synchronizeTitleAndSelectedItem()](synchronizetitleandselecteditem%28%29.md) method to make sure the item displayed matches the currently selected item.

Since this method searches for duplicate items, it should not be used if you are adding an item to an already populated menu with more than a few hundred items. Add items directly to the receiver’s menu instead.

## See Also

### Related Documentation

- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.

### Inserting and deleting items

- [addItem(withTitle:)](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItems(withTitles:)](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [removeAllItems()](removeallitems%28%29.md): Removes all items in the receiver’s item menu.
- [removeItem(withTitle:)](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index.

# insertItemWithTitle:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts an item at the specified position in the menu.

## Declaration

```objectivec
- (void) insertItemWithTitle:(NSString *) title atIndex:(NSInteger) index;
```

## Parameters

- `title`: The title of the new item. If an item with the same title already exists in the menu, the existing item is removed and the new one is added
- `index`: The zero-based index at which to insert the item. Specifying 0 inserts the item at the top of the menu.

<a id="Discussion"></a>

## Discussion

If you want to move an item, it’s better to invoke [removeItemWithTitle:](removeitem%28withtitle_%29.md) explicitly and then send this method. After adding the item, this method uses the [synchronizeTitleAndSelectedItem](synchronizetitleandselecteditem%28%29.md) method to make sure the item displayed matches the currently selected item.

Since this method searches for duplicate items, it should not be used if you are adding an item to an already populated menu with more than a few hundred items. Add items directly to the receiver’s menu instead.

## See Also

### Related Documentation

- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.

### Inserting and deleting items

- [addItemWithTitle:](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItemsWithTitles:](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [removeAllItems](removeallitems%28%29.md): Removes all items in the receiver’s item menu.
- [removeItemWithTitle:](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index.
