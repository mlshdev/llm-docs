> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/itemtitle(at:)](https://developer.apple.com/documentation/appkit/nspopupbutton/itemtitle(at:))

# itemTitle(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the title of the item at the specified index.

## Declaration

```swift
func itemTitle(at index: Int) -> String
```

## Parameters

- `index`: The index of the item you want.

<a id="return-value"></a>

## Return Value

The title of the item, or an empty string if no item exists at the specified index.

## See Also

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.

# itemTitleAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the title of the item at the specified index.

## Declaration

```objectivec
- (NSString *) itemTitleAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the item you want.

<a id="return-value"></a>

## Return Value

The title of the item, or an empty string if no item exists at the specified index.

## See Also

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.
