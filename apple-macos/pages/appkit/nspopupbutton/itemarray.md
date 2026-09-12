> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/itemarray](https://developer.apple.com/documentation/appkit/nspopupbutton/itemarray)

# itemArray (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The array of menu item objects associated with the button.

## Declaration

```swift
var itemArray: [NSMenuItem] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSMenuItem](../nsmenuitem.md) objects representing the items in the menu. Usually, you access menu items using the methods and properties of this class rather than accessing the items directly.

## See Also

### Related Documentation

- [insertItem(withTitle:at:)](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index.

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitle(at:)](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.

# itemArray (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The array of menu item objects associated with the button.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSMenuItem *> * itemArray;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSMenuItem](../nsmenuitem.md) objects representing the items in the menu. Usually, you access menu items using the methods and properties of this class rather than accessing the items directly.

## See Also

### Related Documentation

- [insertItemWithTitle:atIndex:](insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index.

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitleAtIndex:](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.
