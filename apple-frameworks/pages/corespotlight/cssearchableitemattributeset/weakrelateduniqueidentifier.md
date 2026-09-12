> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/weakrelateduniqueidentifier](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/weakrelateduniqueidentifier)

# weakRelatedUniqueIdentifier (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The unique identifier for the item to which the activity is related, but not linked.

## Declaration

```swift
var weakRelatedUniqueIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Unlike the similar [relatedUniqueIdentifier](relateduniqueidentifier.md) property, this property does not link the lifetime of the item to the lifetime of the activity. In particular, deleting the item does not delete the activity.

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
- [title](title.md): The title of the item.
- [domainIdentifier](domainidentifier.md): An identifier that represents the domain or owner of the item.

# weakRelatedUniqueIdentifier (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The unique identifier for the item to which the activity is related, but not linked.

## Declaration

```objectivec
@property (copy, nullable) NSString * weakRelatedUniqueIdentifier;
```

<a id="Discussion"></a>

## Discussion

Unlike the similar [relatedUniqueIdentifier](relateduniqueidentifier.md) property, this property does not link the lifetime of the item to the lifetime of the activity. In particular, deleting the item does not delete the activity.

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
- [title](title.md): The title of the item.
- [domainIdentifier](domainidentifier.md): An identifier that represents the domain or owner of the item.
