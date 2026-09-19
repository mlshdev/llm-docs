> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsuserinterfaceitemsearching/performaction(foritem:)

# performAction(forItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the user selects a search result in Help menu.

## Declaration

```swift
optional func performAction(forItem item: Any)
```

## Parameters

- `item`: An item in the help menu.

<a id="Discussion"></a>

## Discussion

The default implementation brings up Help Viewer for a Help item.

## See Also

### Search Help Content

- [searchForItems(withSearch:resultLimit:matchedItemHandler:)](searchforitems%28withsearch_resultlimit_matcheditemhandler_%29.md): Search for the specified items, with the result limit.

# performActionForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the user selects a search result in Help menu.

## Declaration

```objectivec
- (void) performActionForItem:(id) item;
```

## Parameters

- `item`: An item in the help menu.

<a id="Discussion"></a>

## Discussion

The default implementation brings up Help Viewer for a Help item.

## See Also

### Search Help Content

- [searchForItemsWithSearchString:resultLimit:matchedItemHandler:](searchforitems%28withsearch_resultlimit_matcheditemhandler_%29.md): Search for the specified items, with the result limit.
