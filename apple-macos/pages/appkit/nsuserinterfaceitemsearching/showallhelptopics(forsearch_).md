> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfaceitemsearching/showallhelptopics(forsearch:)](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemsearching/showallhelptopics(forsearch:))

# showAllHelpTopics(forSearch:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

If this method is implemented, a “Show All Help Topics” item will appear in the menu and this method is called when the user selects it.

## Declaration

```swift
optional func showAllHelpTopics(forSearch searchString: String)
```

## Parameters

- `searchString`: The search string.

<a id="Discussion"></a>

## Discussion

The application should show all its results for this search, which does not include results for menu items.  The string for “Show All Help Topics” is system defined and localized and cannot be changed by the user.

## See Also

### Show Help Menu

- [localizedTitles(forItem:)](localizedtitles%28foritem_%29.md): Returns an array of localized strings that will form the help menu item.

# showAllHelpTopicsForSearchString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

If this method is implemented, a “Show All Help Topics” item will appear in the menu and this method is called when the user selects it.

## Declaration

```objectivec
- (void) showAllHelpTopicsForSearchString:(NSString *) searchString;
```

## Parameters

- `searchString`: The search string.

<a id="Discussion"></a>

## Discussion

The application should show all its results for this search, which does not include results for menu items.  The string for “Show All Help Topics” is system defined and localized and cannot be changed by the user.

## See Also

### Show Help Menu

- [localizedTitlesForItem:](localizedtitles%28foritem_%29.md): Returns an array of localized strings that will form the help menu item.
