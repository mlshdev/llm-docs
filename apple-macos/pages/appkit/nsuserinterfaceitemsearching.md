> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfaceitemsearching](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemsearching)

# NSUserInterfaceItemSearching (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods an app can implement to provide Spotlight for Help for its own custom help data.

## Declaration

```swift
protocol NSUserInterfaceItemSearching : NSObjectProtocol
```

<a id="overview"></a>

## Overview

In general, users find the Help search functionality very useful. However, many large apps don’t use Apple Help API because of cross platform requirements, which means that some important Help topics are not presented as part of the Help menu. This API allows developers to incorporate their own Help topics and take full advantage of the Help feature.

In your app, you implement the [NSUserInterfaceItemSearching](nsuserinterfaceitemsearching.md) protocol and then register your object with [registerUserInterfaceItemSearchHandler(\_:)](nsapplication/registeruserinterfaceitemsearchhandler%28__%29.md).

## Topics

### Show Help Menu

- [localizedTitles(forItem:)](nsuserinterfaceitemsearching/localizedtitles%28foritem_%29.md): Returns an array of localized strings that will form the help menu item.
- [showAllHelpTopics(forSearch:)](nsuserinterfaceitemsearching/showallhelptopics%28forsearch_%29.md): If this method is implemented, a “Show All Help Topics” item will appear in the menu and this method is called when the user selects it.

### Search Help Content

- [searchForItems(withSearch:resultLimit:matchedItemHandler:)](nsuserinterfaceitemsearching/searchforitems%28withsearch_resultlimit_matcheditemhandler_%29.md): Search for the specified items, with the result limit.
- [performAction(forItem:)](nsuserinterfaceitemsearching/performaction%28foritem_%29.md): Invoked when the user selects a search result in Help menu.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App Help

- [NSHelpManager](nshelpmanager.md): An object for displaying online help for an app.

# NSUserInterfaceItemSearching (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods an app can implement to provide Spotlight for Help for its own custom help data.

## Declaration

```objectivec
@protocol NSUserInterfaceItemSearching <NSObject>
```

<a id="overview"></a>

## Overview

In general, users find the Help search functionality very useful. However, many large apps don’t use Apple Help API because of cross platform requirements, which means that some important Help topics are not presented as part of the Help menu. This API allows developers to incorporate their own Help topics and take full advantage of the Help feature.

In your app, you implement the [NSUserInterfaceItemSearching](nsuserinterfaceitemsearching.md) protocol and then register your object with [registerUserInterfaceItemSearchHandler:](nsapplication/registeruserinterfaceitemsearchhandler%28__%29.md).

## Topics

### Show Help Menu

- [localizedTitlesForItem:](nsuserinterfaceitemsearching/localizedtitles%28foritem_%29.md): Returns an array of localized strings that will form the help menu item.
- [showAllHelpTopicsForSearchString:](nsuserinterfaceitemsearching/showallhelptopics%28forsearch_%29.md): If this method is implemented, a “Show All Help Topics” item will appear in the menu and this method is called when the user selects it.

### Search Help Content

- [searchForItemsWithSearchString:resultLimit:matchedItemHandler:](nsuserinterfaceitemsearching/searchforitems%28withsearch_resultlimit_matcheditemhandler_%29.md): Search for the specified items, with the result limit.
- [performActionForItem:](nsuserinterfaceitemsearching/performaction%28foritem_%29.md): Invoked when the user selects a search result in Help menu.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App Help

- [NSHelpManager](nshelpmanager.md): An object for displaying online help for an app.
