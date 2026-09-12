> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/badgecount](https://developer.apple.com/documentation/tvservices/tvcontentitem/badgecount)

# badgeCount (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

A badging integer for this item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
@NSCopying var badgeCount: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

The display-badge number is interpreted as a positive integer. Not all UI elements that use content items display badges.

## See Also

### Inspecting the General Display Properties

- [title](title.md): Deprecated. The localized string title of the item.
- [topShelfItems](topshelfitems.md): Deprecated. An array of content items that are the items of a section.

# badgeCount (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

A badging integer for this item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * badgeCount;
```

<a id="Discussion"></a>

## Discussion

The display-badge number is interpreted as a positive integer. Not all UI elements that use content items display badges.

## See Also

### Inspecting the General Display Properties

- [title](title.md): Deprecated. The localized string title of the item.
- [topShelfItems](topshelfitems.md): Deprecated. An array of content items that are the items of a section.
