> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/titleofselecteditem](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/titleofselecteditem)

# titleOfSelectedItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title of the item last selected by the user.

## Declaration

```swift
var titleOfSelectedItem: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the title of the selected menu item, or an empty string if no item is selected.

## See Also

### Related Documentation

- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.

### Title conveniences

- [itemTitle(at:)](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of `NSString` objects containing the titles of every item in the menu.

# titleOfSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title of the item last selected by the user.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * titleOfSelectedItem;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the title of the selected menu item, or an empty string if no item is selected.

## See Also

### Related Documentation

- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.

### Title conveniences

- [itemTitleAtIndex:](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](itemtitles.md): An array of `NSString` objects containing the titles of every item in the menu.
