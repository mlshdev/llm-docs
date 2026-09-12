> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/relateduniqueidentifier](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/relateduniqueidentifier)

# relatedUniqueIdentifier (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The unique identifier for the item to which the activity is related.

## Declaration

```swift
var relatedUniqueIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If you’re using both [NSUserActivity](../../foundation/nsuseractivity.md) and Core Spotlight APIs to index the same item, set this property in the activity to specify the unique identifier of the Core Spotlight item to which the activity is related, and to avoid displaying duplicate results in Spotlight.

If the unique identifier to which the activity is related hasn’t already been indexed with Core Spotlight, the activity won’t be indexed. Note that when the item is deleted, the related activity is also deleted, unlike the behavior of [weakRelatedUniqueIdentifier](weakrelateduniqueidentifier.md).

## See Also

### Describing general attributes

- [alternateNames](alternatenames.md): An array of localized strings that represent alternate display names for the item.
- [contentType](contenttype.md): The uniform type identifier (UTI) of the item.
- [contentTypeTree](contenttypetree.md): An attribute type that identifies a custom hierarchy of types to describe the attributes of your item.
- [contentURL](contenturl.md): The file URL of the content to index.
- [darkThumbnailURL](darkthumbnailurl.md): The local file URL of the thumbnail image for the item when Dark Mode is active.
- [displayName](displayname.md): A localized string that contains the name of the item, suitable to display in the user interface.
- [keywords](keywords.md): An array of keywords associated with the item, such as work, birthday, important, and so on.
- [metadataModificationDate](metadatamodificationdate.md): The date on which the last metadata attribute was changed.
- [path](path.md): The complete path to the item.
- [rankingHint](rankinghint.md): A number that indicates the relative importance of the item among other items from the app.
- [thumbnailData](thumbnaildata.md): Image data that represents the thumbnail of the item.
- [thumbnailURL](thumbnailurl.md): The local file URL of the thumbnail image for the item.
- [title](title.md): The title of the item.
- [domainIdentifier](domainidentifier.md): An identifier that represents the domain or owner of the item.
- [weakRelatedUniqueIdentifier](weakrelateduniqueidentifier.md): The unique identifier for the item to which the activity is related, but not linked.

# relatedUniqueIdentifier (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The unique identifier for the item to which the activity is related.

## Declaration

```objectivec
@property (copy, nullable) NSString * relatedUniqueIdentifier;
```

<a id="Discussion"></a>

## Discussion

If you’re using both [NSUserActivity](../../foundation/nsuseractivity.md) and Core Spotlight APIs to index the same item, set this property in the activity to specify the unique identifier of the Core Spotlight item to which the activity is related, and to avoid displaying duplicate results in Spotlight.

If the unique identifier to which the activity is related hasn’t already been indexed with Core Spotlight, the activity won’t be indexed. Note that when the item is deleted, the related activity is also deleted, unlike the behavior of [weakRelatedUniqueIdentifier](weakrelateduniqueidentifier.md).

## See Also

### Describing general attributes

- [alternateNames](alternatenames.md): An array of localized strings that represent alternate display names for the item.
- [contentType](contenttype.md): The uniform type identifier (UTI) of the item.
- [contentTypeTree](contenttypetree.md): An attribute type that identifies a custom hierarchy of types to describe the attributes of your item.
- [contentURL](contenturl.md): The file URL of the content to index.
- [darkThumbnailURL](darkthumbnailurl.md): The local file URL of the thumbnail image for the item when Dark Mode is active.
- [displayName](displayname.md): A localized string that contains the name of the item, suitable to display in the user interface.
- [keywords](keywords.md): An array of keywords associated with the item, such as work, birthday, important, and so on.
- [metadataModificationDate](metadatamodificationdate.md): The date on which the last metadata attribute was changed.
- [path](path.md): The complete path to the item.
- [rankingHint](rankinghint.md): A number that indicates the relative importance of the item among other items from the app.
- [thumbnailData](thumbnaildata.md): Image data that represents the thumbnail of the item.
- [thumbnailURL](thumbnailurl.md): The local file URL of the thumbnail image for the item.
- [title](title.md): The title of the item.
- [domainIdentifier](domainidentifier.md): An identifier that represents the domain or owner of the item.
- [weakRelatedUniqueIdentifier](weakrelateduniqueidentifier.md): The unique identifier for the item to which the activity is related, but not linked.
