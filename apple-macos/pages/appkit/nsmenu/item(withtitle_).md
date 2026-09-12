> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/item(withtitle:)](https://developer.apple.com/documentation/appkit/nsmenu/item(withtitle:))

# item(withTitle:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the first menu item in the menu with a specified title.

## Declaration

```swift
func item(withTitle title: String) -> NSMenuItem?
```

## Parameters

- `title`: The title of a menu item.

<a id="return-value"></a>

## Return Value

The found menu item (an object conforming to the NSMenuItem protocol) or `nil` if the object couldn’t be found.

## See Also

### Related Documentation

- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the first menu item in the menu that has a specified title.

### Finding Menu Items

- [item(withTag:)](item%28withtag_%29.md): Returns the first menu item in the menu with the specified tag.
- [item(at:)](item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [numberOfItems](numberofitems.md): The number of menu items in the menu, including separator items.
- [items](items.md): An array containing the menu items in the menu.

# itemWithTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the first menu item in the menu with a specified title.

## Declaration

```objectivec
- (NSMenuItem *) itemWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title of a menu item.

<a id="return-value"></a>

## Return Value

The found menu item (an object conforming to the NSMenuItem protocol) or `nil` if the object couldn’t be found.

## See Also

### Related Documentation

- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the first menu item in the menu that has a specified title.

### Finding Menu Items

- [itemWithTag:](item%28withtag_%29.md): Returns the first menu item in the menu with the specified tag.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [numberOfItems](numberofitems.md): The number of menu items in the menu, including separator items.
- [itemArray](items.md): An array containing the menu items in the menu.
