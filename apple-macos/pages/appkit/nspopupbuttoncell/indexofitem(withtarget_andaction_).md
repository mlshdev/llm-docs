> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/indexofitem(withtarget:andaction:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/indexofitem(withtarget:andaction:))

# indexOfItem(withTarget:andAction:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item with the specified target and action.

## Declaration

```swift
func indexOfItem(withTarget target: Any?, andAction actionSelector: Selector?) -> Int
```

## Parameters

- `target`: The target object associated with the menu item.
- `actionSelector`: The action method associated with the menu item.

<a id="return-value"></a>

## Return Value

The index of the menu item, or `-1` if no menu item contains the specified target and action.

<a id="Discussion"></a>

## Discussion

If you specify `NULL` for the `actionSelector` parameter, the index of the first menu item with the specified target is returned.

The `NSPopUpButtonCell` class assigns a default action and target to each menu item, but you can change these values using the setAction: and setTarget: methods of [NSMenuItem](../nsmenuitem.md).

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.

### Accessing the items

- [itemArray](itemarray.md): An array of [NSMenuItem](../nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [index(of:)](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withRepresentedObject:)](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.

# indexOfItemWithTarget:andAction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the menu item with the specified target and action.

## Declaration

```objectivec
- (NSInteger) indexOfItemWithTarget:(id) target andAction:(SEL) actionSelector;
```

## Parameters

- `target`: The target object associated with the menu item.
- `actionSelector`: The action method associated with the menu item.

<a id="return-value"></a>

## Return Value

The index of the menu item, or `-1` if no menu item contains the specified target and action.

<a id="Discussion"></a>

## Discussion

If you specify `NULL` for the `actionSelector` parameter, the index of the first menu item with the specified target is returned.

The `NSPopUpButtonCell` class assigns a default action and target to each menu item, but you can change these values using the setAction: and setTarget: methods of [NSMenuItem](../nsmenuitem.md).

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item last selected by the user.

### Accessing the items

- [itemArray](itemarray.md): An array of [NSMenuItem](../nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [indexOfItem:](index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithRepresentedObject:](indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.
