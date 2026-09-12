> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/contentdomain/documents-swift.struct](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/contentdomain/documents-swift.struct)

# SpotlightSearchTool.ContentDomain.Documents

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Attribute mapping for the documents domain.

## Declaration

```swift
struct Documents
```

## Topics

### Configuring the domain

- [init(authors:keywords:created:modified:)](documents-swift.struct/init%28authors_keywords_created_modified_%29.md)

### Getting the domain attributes

- [authors](documents-swift.struct/authors.md): Attributes queried for document authors. Default: [authorNames](../../searchableitemattribute/authornames.md)
- [created](documents-swift.struct/created.md): Attributes queried for the creation date. Default: [contentCreationDate](../../searchableitemattribute/contentcreationdate.md)
- [keywords](documents-swift.struct/keywords.md): Attributes queried for content keywords. Default: [textContent](../../searchableitemattribute/textcontent.md)
- [modified](documents-swift.struct/modified.md): Attributes queried for the modified date. Default: [contentModificationDate](../../searchableitemattribute/contentmodificationdate.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the documents domain

- [documents](documents-swift.type.property.md): Documents, notes, and text-heavy content.
- [documents(\_:)](documents%28__%29.md): Documents, notes, and text-heavy content with custom attribute mapping.
