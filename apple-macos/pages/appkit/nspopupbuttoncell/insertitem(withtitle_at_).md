> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/insertitem(withtitle:at:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/insertitem(withtitle:at:))

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
- `index`: The zero-based index at which to insert the item. Specifying `0` inserts the item at the top of the menu.

<a id="Discussion"></a>

## Discussion

The value in `index` must represent a valid position in the array. The menu item at `index` and all those that follow it are shifted down one slot to make room for the new menu item.

This method assigns the pop-up button’s default action and target to the new menu item. Use the menu item’s setAction: and setTarget: methods to assign a new action and target.

Because this method searches for duplicate items, it should not be used if you are adding an item to an already populated menu with more than a few hundred items. In a situation like this, add items directly to the button’s menu instead.

## See Also

### Related Documentation

- [insert(\_:at:)](https://developer.apple.com/documentation/foundation/nsmutablearray/insert%28_:at:%29-5dbx5): Inserts a given object into the array’s contents at a given index.

### Adding and removing items

- [addItem(withTitle:)](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItems(withTitles:)](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [removeItem(withTitle:)](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems()](removeallitems%28%29.md): Removes all items in the receiver’s item menu.

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
- `index`: The zero-based index at which to insert the item. Specifying `0` inserts the item at the top of the menu.

<a id="Discussion"></a>

## Discussion

The value in `index` must represent a valid position in the array. The menu item at `index` and all those that follow it are shifted down one slot to make room for the new menu item.

This method assigns the pop-up button’s default action and target to the new menu item. Use the menu item’s setAction: and setTarget: methods to assign a new action and target.

Because this method searches for duplicate items, it should not be used if you are adding an item to an already populated menu with more than a few hundred items. In a situation like this, add items directly to the button’s menu instead.

## See Also

### Related Documentation

- [insertObject:atIndex:](https://developer.apple.com/documentation/foundation/nsmutablearray/insert%28_:at:%29-5dbx5): Inserts a given object into the array’s contents at a given index.

### Adding and removing items

- [addItemWithTitle:](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItemsWithTitles:](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [removeItemWithTitle:](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems](removeallitems%28%29.md): Removes all items in the receiver’s item menu.
