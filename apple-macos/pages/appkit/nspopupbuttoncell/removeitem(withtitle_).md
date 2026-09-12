> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/removeitem(withtitle:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/removeitem(withtitle:))

# removeItem(withTitle:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the item with the specified title from the menu.

## Declaration

```swift
func removeItem(withTitle title: String)
```

## Parameters

- `title`: The title of the item you want to remove. If no menu item exists with the specified title, this method triggers an assertion.

## See Also

### Adding and removing items

- [addItem(withTitle:)](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItems(withTitles:)](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItem(withTitle:at:)](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems()](removeallitems%28%29.md): Removes all items in the receiver’s item menu.

# removeItemWithTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the item with the specified title from the menu.

## Declaration

```objectivec
- (void) removeItemWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title of the item you want to remove. If no menu item exists with the specified title, this method triggers an assertion.

## See Also

### Adding and removing items

- [addItemWithTitle:](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItemsWithTitles:](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItemWithTitle:atIndex:](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems](removeallitems%28%29.md): Removes all items in the receiver’s item menu.
