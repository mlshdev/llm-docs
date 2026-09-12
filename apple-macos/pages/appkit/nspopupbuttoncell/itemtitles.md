> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/itemtitles](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/itemtitles)

# itemTitles (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of `NSString` objects containing the titles of every item in the menu.

## Declaration

```swift
var itemTitles: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The titles appear in the order in which the items appear in the menu. If the menu contains separator items, the array contains an empty string (`@""`) for each separator item.

## See Also

### Title conveniences

- [itemTitle(at:)](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [titleOfSelectedItem](titleofselecteditem.md): The title of the item last selected by the user.

# itemTitles (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of `NSString` objects containing the titles of every item in the menu.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * itemTitles;
```

<a id="Discussion"></a>

## Discussion

The titles appear in the order in which the items appear in the menu. If the menu contains separator items, the array contains an empty string (`@""`) for each separator item.

## See Also

### Title conveniences

- [itemTitleAtIndex:](itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [titleOfSelectedItem](titleofselecteditem.md): The title of the item last selected by the user.
