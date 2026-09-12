> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/additem(withtitle:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/additem(withtitle:))

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

- `title`: The title of the new menu item. If an item with the same title already exists in the menu, the existing item is removed and the new one is added.

<a id="Discussion"></a>

## Discussion

The menu item uses the pop-up button’s default action and target, but you can change these using the setAction: and setTarget: methods of the corresponding [NSMenuItem](../nsmenuitem.md) object.

Because this method searches for duplicate items, it should not be used if you are adding an item to an already populated menu with more than a few hundred items. In a situation like this, add items directly to the button’s menu instead.

## See Also

### Adding and removing items

- [addItems(withTitles:)](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItem(withTitle:at:)](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItem(withTitle:)](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems()](removeallitems%28%29.md): Removes all items in the receiver’s item menu.

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

- `title`: The title of the new menu item. If an item with the same title already exists in the menu, the existing item is removed and the new one is added.

<a id="Discussion"></a>

## Discussion

The menu item uses the pop-up button’s default action and target, but you can change these using the setAction: and setTarget: methods of the corresponding [NSMenuItem](../nsmenuitem.md) object.

Because this method searches for duplicate items, it should not be used if you are adding an item to an already populated menu with more than a few hundred items. In a situation like this, add items directly to the button’s menu instead.

## See Also

### Adding and removing items

- [addItemsWithTitles:](additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItemWithTitle:atIndex:](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItemWithTitle:](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems](removeallitems%28%29.md): Removes all items in the receiver’s item menu.
