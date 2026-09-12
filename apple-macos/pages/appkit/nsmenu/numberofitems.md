> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/numberofitems](https://developer.apple.com/documentation/appkit/nsmenu/numberofitems)

# numberOfItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of menu items in the menu, including separator items.

## Declaration

```swift
var numberOfItems: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a value of type `NSInteger` that indicates the number of menu items in the menu, including separator items.

## See Also

### Finding Menu Items

- [item(withTag:)](item%28withtag_%29.md): Returns the first menu item in the menu with the specified tag.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the first menu item in the menu with a specified title.
- [item(at:)](item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [items](items.md): An array containing the menu items in the menu.

# numberOfItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of menu items in the menu, including separator items.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfItems;
```

<a id="Discussion"></a>

## Discussion

This property contains a value of type `NSInteger` that indicates the number of menu items in the menu, including separator items.

## See Also

### Finding Menu Items

- [itemWithTag:](item%28withtag_%29.md): Returns the first menu item in the menu with the specified tag.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the first menu item in the menu with a specified title.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [itemArray](items.md): An array containing the menu items in the menu.
