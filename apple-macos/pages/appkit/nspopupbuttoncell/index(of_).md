> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/index(of:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/index(of:))

# index(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the specified menu item.

## Declaration

```swift
func index(of item: NSMenuItem) -> Int
```

## Parameters

- `item`: The menu item whose index you want.

<a id="return-value"></a>

## Return Value

The index of the item or `-1` if no such item was found.

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.

### Accessing the items

- [itemArray](itemarray.md): An array of [NSMenuItem](../nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withRepresentedObject:)](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItem(withTarget:andAction:)](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.

# indexOfItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the specified menu item.

## Declaration

```objectivec
- (NSInteger) indexOfItem:(NSMenuItem *) item;
```

## Parameters

- `item`: The menu item whose index you want.

<a id="return-value"></a>

## Return Value

The index of the item or `-1` if no such item was found.

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.

### Accessing the items

- [itemArray](itemarray.md): An array of [NSMenuItem](../nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithRepresentedObject:](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItemWithTarget:andAction:](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.
