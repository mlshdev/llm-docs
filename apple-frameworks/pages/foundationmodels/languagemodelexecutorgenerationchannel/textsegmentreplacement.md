> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/textsegmentreplacement

# LanguageModelExecutorGenerationChannel.TextSegmentReplacement

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A replacement for a streaming entry’s current text segment.

## Declaration

```swift
struct TextSegmentReplacement
```

<a id="overview"></a>

## Overview

The `tokenCount` is the producer’s count of tokens carried by `content` and is used by safety or usage accounting to credit the replacement against.

## Topics

### Handling the replacement

- [content](textsegmentreplacement/content.md): The replacement text for the entry’s current text segment.
- [tokenCount](textsegmentreplacement/tokencount.md): The number of tokens the replacement text carries.
- [segmentID](textsegmentreplacement/segmentid.md): The identifier of the text segment to replace, or empty for the current segment.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the event types

- [LanguageModelExecutorGenerationChannel.Metadata](metadata.md): Snapshot of an entry’s metadata dictionary.
- [LanguageModelExecutorGenerationChannel.Reasoning](reasoning.md): A reasoning event.
- [LanguageModelExecutorGenerationChannel.ReasoningSignature](reasoningsignature.md): Payload for a reasoning entry’s signature update.
- [LanguageModelExecutorGenerationChannel.TextFragment](textfragment.md): Text appended to a streaming entry’s current text segment.
- [LanguageModelExecutorGenerationChannel.Response](response.md): A model-generated response event: text, segment replacements, citations, advisories, custom segments, metadata, or usage.
- [LanguageModelExecutorGenerationChannel.ToolCalls](toolcalls.md): A tool-call lifecycle event, including per-call argument streaming, reasoning, metadata, usage, or retraction.
- [LanguageModelExecutorGenerationChannel.Usage](usage.md): Snapshot of an entry’s token totals.
