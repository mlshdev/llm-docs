> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/response/action-swift.struct/removeattachmentsegment(id:)

# removeAttachmentSegment(id:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that removes an attachment segment from the entry.

## Declaration

```swift
static func removeAttachmentSegment(id: String) -> LanguageModelExecutorGenerationChannel.Response.Action
```

## Parameters

- `id`: The identifier of the attachment segment to remove.

## See Also

### Response action constants

- [appendText(\_:segmentID:tokenCount:)](appendtext%28__segmentid_tokencount_%29.md): Creates an action that appends text to the entry’s current text segment.
- [replaceTextSegment(\_:segmentID:tokenCount:)](replacetextsegment%28__segmentid_tokencount_%29.md): Creates an action that replaces the entry’s current text segment.
- [updateMetadata(\_:)](updatemetadata%28__%29.md): Creates an action that replaces the entry’s metadata.
- [updateUsage(input:output:metadata:)](updateusage%28input_output_metadata_%29.md): Creates an action that replaces the entry’s token-usage totals.
