> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/title](https://developer.apple.com/documentation/tvservices/tvcontentitem/title)

# title (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The localized string title of the item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The title should be localized into the current user’s locale.

## See Also

### Inspecting the General Display Properties

- [badgeCount](badgecount.md): Deprecated. A badging integer for this item.
- [topShelfItems](topshelfitems.md): Deprecated. An array of content items that are the items of a section.

# title (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The localized string title of the item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The title should be localized into the current user’s locale.

## See Also

### Inspecting the General Display Properties

- [badgeCount](badgecount.md): Deprecated. A badging integer for this item.
- [topShelfItems](topshelfitems.md): Deprecated. An array of content items that are the items of a section.
