> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/indexofitem(withrepresentedobject:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/indexofitem(withrepresentedobject:))

# indexOfItem(withRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item that holds the specified represented object.

## Declaration

```swift
func indexOfItem(withRepresentedObject obj: Any?) -> Int
```

## Parameters

- `obj`: The represented object associated with a menu item.

<a id="return-value"></a>

## Return Value

The index of the menu item that owns the specified object, or `-1` if no such menu item was found.

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.

### Accessing the items

- [itemArray](itemarray.md): An array of [NSMenuItem](../nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [index(of:)](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withTarget:andAction:)](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.

# indexOfItemWithRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item that holds the specified represented object.

## Declaration

```objectivec
- (NSInteger) indexOfItemWithRepresentedObject:(id) obj;
```

## Parameters

- `obj`: The represented object associated with a menu item.

<a id="return-value"></a>

## Return Value

The index of the menu item that owns the specified object, or `-1` if no such menu item was found.

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.

### Accessing the items

- [itemArray](itemarray.md): An array of [NSMenuItem](../nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [indexOfItem:](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithTarget:andAction:](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.
