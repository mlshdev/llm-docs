> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/textfragment](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/textfragment)

# LanguageModelExecutorGenerationChannel.TextFragment

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Text appended to a streaming entry’s current text segment.

## Declaration

```swift
struct TextFragment
```

<a id="overview"></a>

## Overview

Use this type when appending text with [LanguageModelExecutorGenerationChannel.Response](response.md) and [LanguageModelExecutorGenerationChannel.Reasoning](reasoning.md) actions.

## Topics

### Handling the text fragment

- [content](textfragment/content.md)
- [tokenCount](textfragment/tokencount.md)
- [segmentID](textfragment/segmentid.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the event types

- [LanguageModelExecutorGenerationChannel.Metadata](metadata.md): Snapshot of an entry’s metadata dictionary.
- [LanguageModelExecutorGenerationChannel.Reasoning](reasoning.md): A reasoning event.
- [LanguageModelExecutorGenerationChannel.ReasoningSignature](reasoningsignature.md): Payload for a reasoning entry’s signature update.
- [LanguageModelExecutorGenerationChannel.TextSegmentReplacement](textsegmentreplacement.md): A replacement for a streaming entry’s current text segment.
- [LanguageModelExecutorGenerationChannel.Response](response.md): A model-generated response event: text, segment replacements, citations, advisories, custom segments, metadata, or usage.
- [LanguageModelExecutorGenerationChannel.ToolCalls](toolcalls.md): A tool-call lifecycle event, including per-call argument streaming, reasoning, metadata, usage, or retraction.
- [LanguageModelExecutorGenerationChannel.Usage](usage.md): Snapshot of an entry’s token totals.
