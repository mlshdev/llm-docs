> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/item(at:)](https://developer.apple.com/documentation/appkit/nsmenu/item(at:))

# item(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu item at a specific location of the menu.

## Declaration

```swift
func item(at index: Int) -> NSMenuItem?
```

## Parameters

- `index`: An integer index locating a menu item in a menu.

<a id="return-value"></a>

## Return Value

The found menu item (an object conforming to the NSMenuItem protocol) or `nil` if the object couldn’t be found.

<a id="Discussion"></a>

## Discussion

This method raises an exception if `index` is out of bounds.

## See Also

### Related Documentation

- [index(of:)](index%28of_%29.md): Returns the index identifying the location of a specified menu item in the menu.

### Finding Menu Items

- [item(withTag:)](item%28withtag_%29.md): Returns the first menu item in the menu with the specified tag.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the first menu item in the menu with a specified title.
- [numberOfItems](numberofitems.md): The number of menu items in the menu, including separator items.
- [items](items.md): An array containing the menu items in the menu.

# itemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu item at a specific location of the menu.

## Declaration

```objectivec
- (NSMenuItem *) itemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: An integer index locating a menu item in a menu.

<a id="return-value"></a>

## Return Value

The found menu item (an object conforming to the NSMenuItem protocol) or `nil` if the object couldn’t be found.

<a id="Discussion"></a>

## Discussion

This method raises an exception if `index` is out of bounds.

## See Also

### Related Documentation

- [indexOfItem:](index%28of_%29.md): Returns the index identifying the location of a specified menu item in the menu.

### Finding Menu Items

- [itemWithTag:](item%28withtag_%29.md): Returns the first menu item in the menu with the specified tag.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the first menu item in the menu with a specified title.
- [numberOfItems](numberofitems.md): The number of menu items in the menu, including separator items.
- [itemArray](items.md): An array containing the menu items in the menu.
