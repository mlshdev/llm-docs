> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/topshelfitems](https://developer.apple.com/documentation/tvservices/tvcontentitem/topshelfitems)

# topShelfItems (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

An array of content items that are the items of a section.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
var topShelfItems: [TVContentItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is non-`nil`, the content item represents a section item in a sectioned Top Shelf style. For more information, see [TVTopShelfContentStyle](../tvtopshelfcontentstyle.md). The title property must also be set to a non-`nil` string.

## See Also

### Inspecting the General Display Properties

- [badgeCount](badgecount.md): Deprecated. A badging integer for this item.
- [title](title.md): Deprecated. The localized string title of the item.

# topShelfItems (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

An array of content items that are the items of a section.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<TVContentItem *> * topShelfItems;
```

<a id="Discussion"></a>

## Discussion

If this property is non-`nil`, the content item represents a section item in a sectioned Top Shelf style. For more information, see [TVTopShelfContentStyle](../tvtopshelfcontentstyle.md). The title property must also be set to a non-`nil` string.

## See Also

### Inspecting the General Display Properties

- [badgeCount](badgecount.md): Deprecated. A badging integer for this item.
- [title](title.md): Deprecated. The localized string title of the item.
