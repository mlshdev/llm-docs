> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/item(withtitle:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/item(withtitle:))

# item(withTitle:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu item with the specified title.

## Declaration

```swift
func item(withTitle title: String) -> NSMenuItem?
```

## Parameters

- `title`: The title of the menu item you want.

<a id="return-value"></a>

## Return Value

The menu item, or `nil` if no item with the specified title exists in the menu.

## See Also

### Related Documentation

- [itemTitle(at:)](itemtitle%28at_%29.md): Returns the title of the item at the specified index.

### Accessing the items

- [itemArray](itemarray.md): An array of [NSMenuItem](../nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [index(of:)](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withRepresentedObject:)](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItem(withTarget:andAction:)](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.
- [lastItem](lastitem.md): The last item in the menu.

# itemWithTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu item with the specified title.

## Declaration

```objectivec
- (NSMenuItem *) itemWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title of the menu item you want.

<a id="return-value"></a>

## Return Value

The menu item, or `nil` if no item with the specified title exists in the menu.

## See Also

### Related Documentation

- [itemTitleAtIndex:](itemtitle%28at_%29.md): Returns the title of the item at the specified index.

### Accessing the items

- [itemArray](itemarray.md): An array of [NSMenuItem](../nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [indexOfItem:](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithRepresentedObject:](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItemWithTarget:andAction:](indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.
- [lastItem](lastitem.md): The last item in the menu.
