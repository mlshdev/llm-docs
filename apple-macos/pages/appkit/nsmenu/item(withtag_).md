> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/item(withtag:)](https://developer.apple.com/documentation/appkit/nsmenu/item(withtag:))

# item(withTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the first menu item in the menu with the specified tag.

## Declaration

```swift
func item(withTag tag: Int) -> NSMenuItem?
```

## Parameters

- `tag`: A numeric tag associated with a menu item.

<a id="return-value"></a>

## Return Value

The found menu item (an object conforming to the NSMenuItem protocol) or `nil` if the object couldn’t be found.

## See Also

### Related Documentation

- [indexOfItem(withTag:)](indexofitem%28withtag_%29.md): Returns the index of the first menu item in the menu identified by a tag.

### Finding Menu Items

- [item(withTitle:)](item%28withtitle_%29.md): Returns the first menu item in the menu with a specified title.
- [item(at:)](item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [numberOfItems](numberofitems.md): The number of menu items in the menu, including separator items.
- [items](items.md): An array containing the menu items in the menu.

# itemWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the first menu item in the menu with the specified tag.

## Declaration

```objectivec
- (NSMenuItem *) itemWithTag:(NSInteger) tag;
```

## Parameters

- `tag`: A numeric tag associated with a menu item.

<a id="return-value"></a>

## Return Value

The found menu item (an object conforming to the NSMenuItem protocol) or `nil` if the object couldn’t be found.

## See Also

### Related Documentation

- [indexOfItemWithTag:](indexofitem%28withtag_%29.md): Returns the index of the first menu item in the menu identified by a tag.

### Finding Menu Items

- [itemWithTitle:](item%28withtitle_%29.md): Returns the first menu item in the menu with a specified title.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [numberOfItems](numberofitems.md): The number of menu items in the menu, including separator items.
- [itemArray](items.md): An array containing the menu items in the menu.
