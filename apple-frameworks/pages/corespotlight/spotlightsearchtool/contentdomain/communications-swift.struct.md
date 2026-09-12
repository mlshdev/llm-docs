> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/contentdomain/communications-swift.struct](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/contentdomain/communications-swift.struct)

# SpotlightSearchTool.ContentDomain.Communications

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Attribute mapping for the communications domain.

## Declaration

```swift
struct Communications
```

<a id="overview"></a>

## Overview

Each field is an optional array of [SearchableItemAttribute](../../searchableitemattribute.md) values to query across. `nil` uses the built-in default mapping. Use [textContent](../../searchableitemattribute/textcontent.md) to trigger a full-text keyword search across all indexed content.

## Topics

### Configuring the domain

- [init(authors:recipients:sent:received:topic:)](communications-swift.struct/init%28authors_recipients_sent_received_topic_%29.md)

### Getting the domain attributes

- [authors](communications-swift.struct/authors.md): Attributes queried for the author field. Default: [authorNames](../../searchableitemattribute/authornames.md)
- [received](communications-swift.struct/received.md): Attributes queried for the received date field. Default: [contentCreationDate](../../searchableitemattribute/contentcreationdate.md)
- [recipients](communications-swift.struct/recipients.md): Attributes queried for the recipient field. Default: [recipientNames](../../searchableitemattribute/recipientnames.md)
- [sent](communications-swift.struct/sent.md): Attributes queried for the sent date field. Default: [contentCreationDate](../../searchableitemattribute/contentcreationdate.md)
- [topic](communications-swift.struct/topic.md): Attributes queried for the subject/body field. Default: [textContent](../../searchableitemattribute/textcontent.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the communications domain

- [communications](communications-swift.type.property.md): Email, messaging, and other person-to-person communication.
- [communications(\_:)](communications%28__%29.md): Email, messaging, and other person-to-person communication with custom attribute mapping.
