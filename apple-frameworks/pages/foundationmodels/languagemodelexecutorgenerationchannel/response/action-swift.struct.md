> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/response/action-swift.struct

# LanguageModelExecutorGenerationChannel.Response.Action

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An operation that can be performed on a response entry.

## Declaration

```swift
struct Action
```

<a id="overview"></a>

## Overview

`Action` is an enum-like struct; construct one with a leading-dot factory such as [appendText(\_:segmentID:tokenCount:)](action-swift.struct/appendtext%28__segmentid_tokencount_%29.md).

## Topics

### Response action cases

- [addAttachmentSegment(\_:)](action-swift.struct/addattachmentsegment%28__%29.md): Creates an action that adds an attachment segment to the entry.

### Response action constants

- [appendText(\_:segmentID:tokenCount:)](action-swift.struct/appendtext%28__segmentid_tokencount_%29.md): Creates an action that appends text to the entry’s current text segment.
- [removeAttachmentSegment(id:)](action-swift.struct/removeattachmentsegment%28id_%29.md): Creates an action that removes an attachment segment from the entry.
- [replaceTextSegment(\_:segmentID:tokenCount:)](action-swift.struct/replacetextsegment%28__segmentid_tokencount_%29.md): Creates an action that replaces the entry’s current text segment.
- [updateMetadata(\_:)](action-swift.struct/updatemetadata%28__%29.md): Creates an action that replaces the entry’s metadata.
- [updateUsage(input:output:metadata:)](action-swift.struct/updateusage%28input_output_metadata_%29.md): Creates an action that replaces the entry’s token-usage totals.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling a response

- [action](action-swift.property.md): The action to perform.
- [entryID](entryid.md): The identifier for the entry.
- [LanguageModelExecutorGenerationChannel.TextSegmentReplacement](../textsegmentreplacement.md): A replacement for a streaming entry’s current text segment.
