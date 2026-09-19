> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/dataattachment

# Transcript.DataAttachment

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

A data attachment payload in a serialized, portable format.

## Declaration

```swift
struct DataAttachment
```

<a id="overview"></a>

## Overview

A [Transcript.DataAttachment](dataattachment.md) records the bytes and identifier of a value that a [LanguageModel](../languagemodel.md) implementation opted into via [supportsDataAttachmentType(\_:)](../languagemodel/supportsdataattachmenttype%28__%29.md). It’s what a [DataAttachmentRepresentable](../dataattachmentrepresentable.md)-conforming type produces from its [transcriptRepresentation](../dataattachmentrepresentable/transcriptrepresentation.md), and it round-trips through the transcript’s `Codable` conformance so the transcript remains portable even in environments where the declaring package isn’t installed.

## Topics

### Initializers

- [init(contentType:content:metadata:)](dataattachment/init%28contenttype_content_metadata_%29.md): Beta. Creates a data attachment with the content type, content, and metadata you provide.

### Instance Properties

- [content](dataattachment/content.md): Beta. A raw binary representation of the attachment.
- [contentType](dataattachment/contenttype.md): Beta. A `UTType` identifying how to interpret [content](dataattachment/content.md).
- [metadata](dataattachment/metadata.md): Beta. Metadata pertinent to this attachment.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
