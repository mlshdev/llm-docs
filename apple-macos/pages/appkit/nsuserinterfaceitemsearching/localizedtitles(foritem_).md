> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfaceitemsearching/localizedtitles(foritem:)](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemsearching/localizedtitles(foritem:))

# localizedTitles(forItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of localized strings that will form the help menu item.

## Declaration

```swift
func localizedTitles(forItem item: Any) -> [String]
```

## Parameters

- `item`: At item in the help menu.

<a id="return-value"></a>

## Return Value

An `NSArray` of `NSStrings` (localized for display in the menu) that will be combined with separators to form the menu item title.

## See Also

### Show Help Menu

- [showAllHelpTopics(forSearch:)](showallhelptopics%28forsearch_%29.md): If this method is implemented, a “Show All Help Topics” item will appear in the menu and this method is called when the user selects it.

# localizedTitlesForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of localized strings that will form the help menu item.

## Declaration

```objectivec
- (NSArray<NSString *> *) localizedTitlesForItem:(id) item;
```

## Parameters

- `item`: At item in the help menu.

<a id="return-value"></a>

## Return Value

An `NSArray` of `NSStrings` (localized for display in the menu) that will be combined with separators to form the menu item title.

## See Also

### Show Help Menu

- [showAllHelpTopicsForSearchString:](showallhelptopics%28forsearch_%29.md): If this method is implemented, a “Show All Help Topics” item will appear in the menu and this method is called when the user selects it.
