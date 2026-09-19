> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/dataattachmentrepresentable

# DataAttachmentRepresentable

**Framework:** Foundation Models  
**Kind:** Protocol  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

A type that you use as the content of a data attachment.

## Declaration

```swift
protocol DataAttachmentRepresentable : Sendable
```

<a id="overview"></a>

## Overview

Conform to this protocol to describe how a value serializes into — and deserializes back from — a [Transcript.DataAttachment](transcript/dataattachment.md). The serialized form is a portable `Data` blob identified by a content type identifier, which is what gets persisted when a [Transcript](transcript.md) is encoded, so a transcript remains readable even in environments where the declaring package isn’t installed.

A [LanguageModel](languagemodel.md) advertises which content types it accepts through [supportsDataAttachmentType(\_:)](languagemodel/supportsdataattachmenttype%28__%29.md); the framework validates each data attachment’s [contentType](transcript/dataattachment/contenttype.md) against that predicate before dispatching to the executor.

## Topics

### Initializers

- [init(\_:)](dataattachmentrepresentable/init%28__%29.md): Beta. Rehydrates this content from its transcript representation.

### Instance Properties

- [transcriptRepresentation](dataattachmentrepresentable/transcriptrepresentation.md): Beta. The transcript representation of this content.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
