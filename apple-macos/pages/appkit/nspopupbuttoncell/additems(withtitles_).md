> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/additems(withtitles:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/additems(withtitles:))

# addItems(withTitles:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds multiple items to the end of the menu.

## Declaration

```swift
func addItems(withTitles itemTitles: [String])
```

## Parameters

- `itemTitles`: An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects containing the titles of the items you want to add. Each string in the array should be unique. If an item with the same title already exists in the menu, the existing item is removed and the new one is added.

<a id="Discussion"></a>

## Discussion

The new menu items use the pop-up button’s default action and target, but you can change these using the setAction: and setTarget: methods of the corresponding [NSMenuItem](../nsmenuitem.md) object.

If you want to move an item, it’s better to invoke [removeItem(withTitle:)](removeitem%28withtitle_%29.md) explicitly and then call this method. After adding the items, this method uses the [synchronizeTitleAndSelectedItem()](synchronizetitleandselecteditem%28%29.md) method to make sure the item being displayed matches the currently selected item.

Because this method searches for duplicate items, it should not be used if you are adding items to an already populated menu with more than a few hundred items. In a situation like this, add items directly to the receiver’s menu instead.

## See Also

### Adding and removing items

- [addItem(withTitle:)](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [insertItem(withTitle:at:)](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItem(withTitle:)](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems()](removeallitems%28%29.md): Removes all items in the receiver’s item menu.

# addItemsWithTitles: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds multiple items to the end of the menu.

## Declaration

```objectivec
- (void) addItemsWithTitles:(NSArray<NSString *> *) itemTitles;
```

## Parameters

- `itemTitles`: An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects containing the titles of the items you want to add. Each string in the array should be unique. If an item with the same title already exists in the menu, the existing item is removed and the new one is added.

<a id="Discussion"></a>

## Discussion

The new menu items use the pop-up button’s default action and target, but you can change these using the setAction: and setTarget: methods of the corresponding [NSMenuItem](../nsmenuitem.md) object.

If you want to move an item, it’s better to invoke [removeItemWithTitle:](removeitem%28withtitle_%29.md) explicitly and then call this method. After adding the items, this method uses the [synchronizeTitleAndSelectedItem](synchronizetitleandselecteditem%28%29.md) method to make sure the item being displayed matches the currently selected item.

Because this method searches for duplicate items, it should not be used if you are adding items to an already populated menu with more than a few hundred items. In a situation like this, add items directly to the receiver’s menu instead.

## See Also

### Adding and removing items

- [addItemWithTitle:](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [insertItemWithTitle:atIndex:](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItemWithTitle:](removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems](removeallitems%28%29.md): Removes all items in the receiver’s item menu.
