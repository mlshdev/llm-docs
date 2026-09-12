> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/reasoningsignature](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/reasoningsignature)

# LanguageModelExecutorGenerationChannel.ReasoningSignature

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Payload for a reasoning entry’s signature update.

## Declaration

```swift
struct ReasoningSignature
```

<a id="overview"></a>

## Overview

The signature is an opaque, producer-supplied token; each `updateSignature` event replaces the prior value wholesale. `tokenCount` is the producer’s count of tokens carried by the signature, used for usage accounting.

## Topics

### Handling the reasoning signature

- [signature](reasoningsignature/signature.md)
- [tokenCount](reasoningsignature/tokencount.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the event types

- [LanguageModelExecutorGenerationChannel.Metadata](metadata.md): Snapshot of an entry’s metadata dictionary.
- [LanguageModelExecutorGenerationChannel.Reasoning](reasoning.md): A reasoning event.
- [LanguageModelExecutorGenerationChannel.TextFragment](textfragment.md): Text appended to a streaming entry’s current text segment.
- [LanguageModelExecutorGenerationChannel.TextSegmentReplacement](textsegmentreplacement.md): A replacement for a streaming entry’s current text segment.
- [LanguageModelExecutorGenerationChannel.Response](response.md): A model-generated response event: text, segment replacements, citations, advisories, custom segments, metadata, or usage.
- [LanguageModelExecutorGenerationChannel.ToolCalls](toolcalls.md): A tool-call lifecycle event, including per-call argument streaming, reasoning, metadata, usage, or retraction.
- [LanguageModelExecutorGenerationChannel.Usage](usage.md): Snapshot of an entry’s token totals.
