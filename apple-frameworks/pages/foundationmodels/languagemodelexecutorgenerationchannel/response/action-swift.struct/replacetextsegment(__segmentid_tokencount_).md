> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/response/action-swift.struct/replacetextsegment(_:segmentid:tokencount:)

# replaceTextSegment(\_:segmentID:tokenCount:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that replaces the entry’s current text segment.

## Declaration

```swift
static func replaceTextSegment(_ text: String, segmentID: String? = nil, tokenCount: Int) -> LanguageModelExecutorGenerationChannel.Response.Action
```

## Parameters

- `text`: The replacement text for the segment.
- `segmentID`: The identifier of the segment to replace, or `nil` for the current segment.
- `tokenCount`: The number of the tokens the replacement text carries.

## See Also

### Response action constants

- [appendText(\_:segmentID:tokenCount:)](appendtext%28__segmentid_tokencount_%29.md): Creates an action that appends text to the entry’s current text segment.
- [removeAttachmentSegment(id:)](removeattachmentsegment%28id_%29.md): Creates an action that removes an attachment segment from the entry.
- [updateMetadata(\_:)](updatemetadata%28__%29.md): Creates an action that replaces the entry’s metadata.
- [updateUsage(input:output:metadata:)](updateusage%28input_output_metadata_%29.md): Creates an action that replaces the entry’s token-usage totals.
