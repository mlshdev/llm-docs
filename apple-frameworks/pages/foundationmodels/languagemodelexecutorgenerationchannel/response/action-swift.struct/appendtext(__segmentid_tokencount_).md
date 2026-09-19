> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/response/action-swift.struct/appendtext(_:segmentid:tokencount:)

# appendText(\_:segmentID:tokenCount:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that appends text to the entry’s current text segment.

## Declaration

```swift
static func appendText(_ text: String, segmentID: String? = nil, tokenCount: Int) -> LanguageModelExecutorGenerationChannel.Response.Action
```

## Parameters

- `text`: The text to append to the entry.
- `segmentID`: The identifier of the segment to append to, or `nil` to append to the current segment.
- `tokenCount`: The number of the tokens the text carries.

## See Also

### Response action constants

- [removeAttachmentSegment(id:)](removeattachmentsegment%28id_%29.md): Creates an action that removes an attachment segment from the entry.
- [replaceTextSegment(\_:segmentID:tokenCount:)](replacetextsegment%28__segmentid_tokencount_%29.md): Creates an action that replaces the entry’s current text segment.
- [updateMetadata(\_:)](updatemetadata%28__%29.md): Creates an action that replaces the entry’s metadata.
- [updateUsage(input:output:metadata:)](updateusage%28input_output_metadata_%29.md): Creates an action that replaces the entry’s token-usage totals.
