> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/index(of:)](https://developer.apple.com/documentation/appkit/nsmenu/index(of:))

# index(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index identifying the location of a specified menu item in the menu.

## Declaration

```swift
func index(of item: NSMenuItem) -> Int
```

## Parameters

- `item`: A menu item—that is an object conforming to the NSMenuItem protocol.

<a id="return-value"></a>

## Return Value

The integer index of the menu item or, if no such menu item is in the menu, –1.

## See Also

### Related Documentation

- [item(at:)](item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [insertItem(\_:at:)](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.

### Finding Indices of Menu Items

- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the first menu item in the menu that has a specified title.
- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the first menu item in the menu identified by a tag.
- [indexOfItem(withTarget:andAction:)](indexofitem%28withtarget_andaction_%29.md): Returns the index of the first menu item in the menu that has a specified action and target.
- [indexOfItem(withRepresentedObject:)](indexofitem%28withrepresentedobject_%29.md): Returns the index of the first menu item in the menu that has a given represented object.
- [indexOfItem(withSubmenu:)](indexofitem%28withsubmenu_%29.md): Returns the index of the menu item in the menu with the given submenu.

# indexOfItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index identifying the location of a specified menu item in the menu.

## Declaration

```objectivec
- (NSInteger) indexOfItem:(NSMenuItem *) item;
```

## Parameters

- `item`: A menu item—that is an object conforming to the NSMenuItem protocol.

<a id="return-value"></a>

## Return Value

The integer index of the menu item or, if no such menu item is in the menu, –1.

## See Also

### Related Documentation

- [itemAtIndex:](item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [insertItem:atIndex:](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.

### Finding Indices of Menu Items

- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the first menu item in the menu that has a specified title.
- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the first menu item in the menu identified by a tag.
- [indexOfItemWithTarget:andAction:](indexofitem%28withtarget_andaction_%29.md): Returns the index of the first menu item in the menu that has a specified action and target.
- [indexOfItemWithRepresentedObject:](indexofitem%28withrepresentedobject_%29.md): Returns the index of the first menu item in the menu that has a given represented object.
- [indexOfItemWithSubmenu:](indexofitem%28withsubmenu_%29.md): Returns the index of the menu item in the menu with the given submenu.
