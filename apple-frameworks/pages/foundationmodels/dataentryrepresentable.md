> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/dataentryrepresentable

# DataEntryRepresentable

**Framework:** Foundation Models  
**Kind:** Protocol  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

A type that a model can produce and represent as a top-level transcript entry.

## Declaration

```swift
protocol DataEntryRepresentable : Sendable
```

<a id="overview"></a>

## Overview

Conform to this protocol to describe how a value serializes into — and deserializes back from — a [Transcript.DataEntry](transcript/dataentry.md).

[transcriptRepresentation](dataentryrepresentable/transcriptrepresentation.md) is non-throwing: any fallible encoding should be surfaced from the conformer’s own initializer, where the developer is already deciding what input to accept. [init(\_:)](dataentryrepresentable/init%28__%29.md) is throwing because the wire representation may come from a persisted transcript, from over the network, or from any source the conformer doesn’t control, and could be malformed. The asymmetry mirrors Foundation’s `String.init(data:encoding:)` (failable) and `String.utf8` (total).

## Topics

### Initializers

- [init(\_:)](dataentryrepresentable/init%28__%29.md): Beta. Rehydrate this type from its transcript representation.

### Instance Properties

- [transcriptRepresentation](dataentryrepresentable/transcriptrepresentation.md): Beta. How this type appears when recorded in a session transcript.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
