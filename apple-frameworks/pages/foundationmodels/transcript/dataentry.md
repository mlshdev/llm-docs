> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/dataentry

# Transcript.DataEntry

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

A top-level transcript entry payload in a serialized, portable format.

## Declaration

```swift
struct DataEntry
```

<a id="overview"></a>

## Overview

A [Transcript.DataEntry](dataentry.md) records the bytes and identifier of a value that a [LanguageModel](../languagemodel.md) implementation opted into via [supportsDataEntryType(\_:)](../languagemodel/supportsdataentrytype%28__%29.md). It’s what a [DataEntryRepresentable](../dataentryrepresentable.md)-conforming type produces from its [transcriptRepresentation](../dataentryrepresentable/transcriptrepresentation.md), and it round-trips through the transcript’s `Codable` conformance so the transcript remains portable even in environments where the declaring package isn’t installed.

## Topics

### Initializers

- [init(id:contentType:content:metadata:)](dataentry/init%28id_contenttype_content_metadata_%29.md): Beta. Creates a data entry with the content type, content, and metadata you provide.

### Instance Properties

- [content](dataentry/content.md): Beta. A raw binary representation of the entry.
- [contentType](dataentry/contenttype.md): Beta. A `UTType` identifying how to interpret [content](dataentry/content.md).
- [metadata](dataentry/metadata.md): Beta. Metadata pertinent to this entry.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
