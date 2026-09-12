> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/systemitem](https://developer.apple.com/documentation/uikit/uitabbaritem/systemitem)

# UITabBarItem.SystemItem (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that represent the system tab bar items.

## Declaration

```swift
enum SystemItem
```

## Topics

### System items

- [UITabBarItem.SystemItem.bookmarks](systemitem/bookmarks.md): The bookmarks system item.
- [UITabBarItem.SystemItem.contacts](systemitem/contacts.md): The contacts system item.
- [UITabBarItem.SystemItem.downloads](systemitem/downloads.md): The downloads system item.
- [UITabBarItem.SystemItem.favorites](systemitem/favorites.md): The favorites system item.
- [UITabBarItem.SystemItem.featured](systemitem/featured.md): The featured system item.
- [UITabBarItem.SystemItem.history](systemitem/history.md): The history system item.
- [UITabBarItem.SystemItem.more](systemitem/more.md): The more system item.
- [UITabBarItem.SystemItem.mostRecent](systemitem/mostrecent.md): The most recent system item.
- [UITabBarItem.SystemItem.mostViewed](systemitem/mostviewed.md): The most viewed system item.
- [UITabBarItem.SystemItem.recents](systemitem/recents.md): The recents system item.
- [UITabBarItem.SystemItem.search](systemitem/search.md): The search system item.
- [UITabBarItem.SystemItem.topRated](systemitem/toprated.md): The top rated system item.

### Initializers

- [init(rawValue:)](systemitem/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a tab bar item

- [init(tabBarSystemItem:tag:)](init%28tabbarsystemitem_tag_%29.md): Creates a tab bar item using a system-provided configuration.
- [init(title:image:tag:)](init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [init(title:image:selectedImage:)](init%28title_image_selectedimage_%29.md): Creates a tab bar item that toggles the image it displays when its selected state changes.
- [init()](init%28%29.md): Creates a tab bar item with a default configuration.
- [init(coder:)](init%28coder_%29.md): Creates a tab bar item from a serialized instance.

# UITabBarSystemItem (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that represent the system tab bar items.

## Declaration

```objectivec
enum UITabBarSystemItem : NSInteger;
```

## Topics

### System items

- [UITabBarSystemItemBookmarks](systemitem/bookmarks.md): The bookmarks system item.
- [UITabBarSystemItemContacts](systemitem/contacts.md): The contacts system item.
- [UITabBarSystemItemDownloads](systemitem/downloads.md): The downloads system item.
- [UITabBarSystemItemFavorites](systemitem/favorites.md): The favorites system item.
- [UITabBarSystemItemFeatured](systemitem/featured.md): The featured system item.
- [UITabBarSystemItemHistory](systemitem/history.md): The history system item.
- [UITabBarSystemItemMore](systemitem/more.md): The more system item.
- [UITabBarSystemItemMostRecent](systemitem/mostrecent.md): The most recent system item.
- [UITabBarSystemItemMostViewed](systemitem/mostviewed.md): The most viewed system item.
- [UITabBarSystemItemRecents](systemitem/recents.md): The recents system item.
- [UITabBarSystemItemSearch](systemitem/search.md): The search system item.
- [UITabBarSystemItemTopRated](systemitem/toprated.md): The top rated system item.

## See Also

### Creating a tab bar item

- [initWithTabBarSystemItem:tag:](init%28tabbarsystemitem_tag_%29.md): Creates a tab bar item using a system-provided configuration.
- [initWithTitle:image:tag:](init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [initWithTitle:image:selectedImage:](init%28title_image_selectedimage_%29.md): Creates a tab bar item that toggles the image it displays when its selected state changes.
- [init](init%28%29.md): Creates a tab bar item with a default configuration.
- [initWithCoder:](init%28coder_%29.md): Creates a tab bar item from a serialized instance.
