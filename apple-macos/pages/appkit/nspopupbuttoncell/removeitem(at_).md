> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/removeitem(at:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/removeitem(at:))

# removeItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the item at the specified index.

## Declaration

```swift
func removeItem(at index: Int)
```

## Parameters

- `index`: The zero-based index indicating which item to remove. Specifying `0` removes the item at the top of the menu. The index must be valid and non-negative.

## See Also

### Adding and removing items

- [addItem(withTitle:)](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItems(withTitles:)](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItem(withTitle:at:)](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItem(withTitle:)](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeAllItems()](removeallitems%28%29.md): Removes all items in the receiver’s item menu.

# removeItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the item at the specified index.

## Declaration

```objectivec
- (void) removeItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The zero-based index indicating which item to remove. Specifying `0` removes the item at the top of the menu. The index must be valid and non-negative.

## See Also

### Adding and removing items

- [addItemWithTitle:](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItemsWithTitles:](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItemWithTitle:atIndex:](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItemWithTitle:](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeAllItems](removeallitems%28%29.md): Removes all items in the receiver’s item menu.
