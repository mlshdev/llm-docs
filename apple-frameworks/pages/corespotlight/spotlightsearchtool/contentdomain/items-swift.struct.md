> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/contentdomain/items-swift.struct](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/contentdomain/items-swift.struct)

# SpotlightSearchTool.ContentDomain.Items

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Attribute mapping for the items domain.

## Declaration

```swift
struct Items
```

## Topics

### Configuring the domain

- [init(title:text:created:modified:)](items-swift.struct/init%28title_text_created_modified_%29.md)

### Getting the domain attributes

- [created](items-swift.struct/created.md): Attributes queried for the creation date. Default: [contentCreationDate](../../searchableitemattribute/contentcreationdate.md)
- [modified](items-swift.struct/modified.md): Attributes queried for the modified date. Default: [contentModificationDate](../../searchableitemattribute/contentmodificationdate.md)
- [text](items-swift.struct/text.md): Attributes queried for content keywords. Default: [textContent](../../searchableitemattribute/textcontent.md)
- [title](items-swift.struct/title.md): Attributes queried for the item title. Default: [title](../../searchableitemattribute/title.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the items domain

- [items](items-swift.type.property.md): Any items with title, text, and dates.
- [items(\_:)](items%28__%29.md): Any items with title, text, and dates with custom attribute mapping.
