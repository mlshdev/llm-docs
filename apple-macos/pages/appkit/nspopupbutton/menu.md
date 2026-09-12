> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/menu](https://developer.apple.com/documentation/appkit/nspopupbutton/menu)

# menu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu associated with the pop-up button.

## Declaration

```swift
var menu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

If another menu was already associated with the pop-up button, this method releases its reference to the old menu.

## See Also

### Getting menu items

- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitle(at:)](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.

# menu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu associated with the pop-up button.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * menu;
```

<a id="Discussion"></a>

## Discussion

If another menu was already associated with the pop-up button, this method releases its reference to the old menu.

## See Also

### Getting menu items

- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitleAtIndex:](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.
