> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/item(at:)](https://developer.apple.com/documentation/appkit/nspopupbutton/item(at:))

# item(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu item at the specified index.

## Declaration

```swift
func item(at index: Int) -> NSMenuItem?
```

## Parameters

- `index`: The index of the item you want.

<a id="return-value"></a>

## Return Value

The menu item, or `nil` if no item exists at the specified index.

## See Also

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [itemTitle(at:)](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.

# itemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu item at the specified index.

## Declaration

```objectivec
- (NSMenuItem *) itemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the item you want.

<a id="return-value"></a>

## Return Value

The menu item, or `nil` if no item exists at the specified index.

## See Also

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [itemTitleAtIndex:](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.
