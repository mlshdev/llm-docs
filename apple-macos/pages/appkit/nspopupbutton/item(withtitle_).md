> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/item(withtitle:)](https://developer.apple.com/documentation/appkit/nspopupbutton/item(withtitle:))

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

- [indexOfItem(withTitle:)](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [addItem(withTitle:)](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitle(at:)](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
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

- [indexOfItemWithTitle:](indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [addItemWithTitle:](additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitleAtIndex:](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [lastItem](lastitem.md): The last item in the menu.
