> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/title](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/title)

# title (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The title of the item.

## Declaration

```swift
var title: String? { get set }
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)

<a id="Discussion"></a>

## Discussion

An item title might be the title of a document or MP3 file or the subject of an email message.

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
- [relatedUniqueIdentifier](relateduniqueidentifier.md): The unique identifier for the item to which the activity is related.
- [thumbnailData](thumbnaildata.md): Image data that represents the thumbnail of the item.
- [thumbnailURL](thumbnailurl.md): The local file URL of the thumbnail image for the item.
- [domainIdentifier](domainidentifier.md): An identifier that represents the domain or owner of the item.
- [weakRelatedUniqueIdentifier](weakrelateduniqueidentifier.md): The unique identifier for the item to which the activity is related, but not linked.

# title (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The title of the item.

## Declaration

```objectivec
@property (copy, nullable) NSString * title;
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)

<a id="Discussion"></a>

## Discussion

An item title might be the title of a document or MP3 file or the subject of an email message.

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
- [relatedUniqueIdentifier](relateduniqueidentifier.md): The unique identifier for the item to which the activity is related.
- [thumbnailData](thumbnaildata.md): Image data that represents the thumbnail of the item.
- [thumbnailURL](thumbnailurl.md): The local file URL of the thumbnail image for the item.
- [domainIdentifier](domainidentifier.md): An identifier that represents the domain or owner of the item.
- [weakRelatedUniqueIdentifier](weakrelateduniqueidentifier.md): The unique identifier for the item to which the activity is related, but not linked.
