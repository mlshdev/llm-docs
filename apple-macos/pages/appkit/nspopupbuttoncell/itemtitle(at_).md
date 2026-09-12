> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/itemtitle(at:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/itemtitle(at:))

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

### Related Documentation

- [item(at:)](item%28at_%29.md): Returns the menu item at the specified index.

### Title conveniences

- [itemTitles](itemtitles.md): An array of `NSString` objects containing the titles of every item in the menu.
- [titleOfSelectedItem](titleofselecteditem.md): The title of the item last selected by the user.

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

### Related Documentation

- [itemAtIndex:](item%28at_%29.md): Returns the menu item at the specified index.

### Title conveniences

- [itemTitles](itemtitles.md): An array of `NSString` objects containing the titles of every item in the menu.
- [titleOfSelectedItem](titleofselecteditem.md): The title of the item last selected by the user.
