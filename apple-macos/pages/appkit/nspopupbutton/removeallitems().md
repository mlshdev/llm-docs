> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/removeallitems()](https://developer.apple.com/documentation/appkit/nspopupbutton/removeallitems())

# removeAllItems() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes all items in the receiver’s item menu.

## Declaration

```swift
func removeAllItems()
```

<a id="Discussion"></a>

## Discussion

After removing the items, this method uses the [synchronizeTitleAndSelectedItem()](synchronizetitleandselecteditem%28%29.md) method to refresh the menu.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The number of items in the menu.

### Inserting and deleting items

- [addItem(withTitle:)](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItems(withTitles:)](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItem(withTitle:at:)](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItem(withTitle:)](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index.

# removeAllItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes all items in the receiver’s item menu.

## Declaration

```objectivec
- (void) removeAllItems;
```

<a id="Discussion"></a>

## Discussion

After removing the items, this method uses the [synchronizeTitleAndSelectedItem](synchronizetitleandselecteditem%28%29.md) method to refresh the menu.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The number of items in the menu.

### Inserting and deleting items

- [addItemWithTitle:](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItemsWithTitles:](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItemWithTitle:atIndex:](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItemWithTitle:](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index.
