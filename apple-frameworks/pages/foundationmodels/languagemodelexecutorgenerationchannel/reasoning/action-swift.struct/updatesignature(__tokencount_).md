> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/reasoning/action-swift.struct/updatesignature(_:tokencount:)

# updateSignature(\_:tokenCount:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that replaces the reasoning entry’s signature.

## Declaration

```swift
static func updateSignature(_ signature: Data, tokenCount: Int) -> LanguageModelExecutorGenerationChannel.Reasoning.Action
```

## Parameters

- `signature`: The opaque token that replaces the entry’s current signature.
- `tokenCount`: The number of the tokens the signature carries.

## See Also

### Reasoning actions

- [appendText(\_:segmentID:tokenCount:)](appendtext%28__segmentid_tokencount_%29.md): Creates an action that appends text to the entry’s current text segment.
- [replaceTextSegment(\_:segmentID:tokenCount:)](replacetextsegment%28__segmentid_tokencount_%29.md): Creates an action that replaces the entry’s current text segment.
- [updateMetadata(\_:)](updatemetadata%28__%29.md): Creates an action that replaces the entry’s metadata.
- [updateUsage(input:output:metadata:)](updateusage%28input_output_metadata_%29.md): Creates an action that replaces the entry’s token-usage totals.
