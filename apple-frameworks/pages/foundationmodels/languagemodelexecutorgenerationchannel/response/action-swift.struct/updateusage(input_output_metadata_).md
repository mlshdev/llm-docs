> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/response/action-swift.struct/updateusage(input:output:metadata:)

# updateUsage(input:output:metadata:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that replaces the entry’s token-usage totals.

## Declaration

```swift
static func updateUsage(input: LanguageModelExecutorGenerationChannel.Usage.Input, output: LanguageModelExecutorGenerationChannel.Usage.Output, metadata: [String : any ConvertibleToGeneratedContent] = [:]) -> LanguageModelExecutorGenerationChannel.Response.Action
```

## Parameters

- `input`: The token counts for the transcript submitted to the model.
- `output`: The token counts for the response the model produces.
- `metadata`: Additional metadata to record alongside the token counts.

## See Also

### Response action constants

- [appendText(\_:segmentID:tokenCount:)](appendtext%28__segmentid_tokencount_%29.md): Creates an action that appends text to the entry’s current text segment.
- [removeAttachmentSegment(id:)](removeattachmentsegment%28id_%29.md): Creates an action that removes an attachment segment from the entry.
- [replaceTextSegment(\_:segmentID:tokenCount:)](replacetextsegment%28__segmentid_tokencount_%29.md): Creates an action that replaces the entry’s current text segment.
- [updateMetadata(\_:)](updatemetadata%28__%29.md): Creates an action that replaces the entry’s metadata.
