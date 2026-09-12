> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/itemtitles](https://developer.apple.com/documentation/appkit/nspopupbutton/itemtitles)

# itemTitles (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of strings corresponding to the titles of the items in the menu.

## Declaration

```swift
var itemTitles: [String] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains the title of an item in the menu. The order of the titles in this array matches the order of the items in the menu. If the menu contains separator items, the array contains an empty string for each separator item.

## See Also

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitle(at:)](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [item(withTitle:)](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.

# itemTitles (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of strings corresponding to the titles of the items in the menu.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * itemTitles;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains the title of an item in the menu. The order of the titles in this array matches the order of the items in the menu. If the menu contains separator items, the array contains an empty string for each separator item.

## See Also

### Getting menu items

- [menu](menu.md): The menu associated with the pop-up button.
- [numberOfItems](numberofitems.md): The number of items in the menu.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitleAtIndex:](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemWithTitle:](item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](lastitem.md): The last item in the menu.
