> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/reasoning/action-swift.struct](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/reasoning/action-swift.struct)

# LanguageModelExecutorGenerationChannel.Reasoning.Action

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An operation that can be performed on a reasoning entry.

## Declaration

```swift
struct Action
```

<a id="overview"></a>

## Overview

`Action` is an enum-like struct; construct one with a leading-dot factory such as [appendText(\_:segmentID:tokenCount:)](action-swift.struct/appendtext%28__segmentid_tokencount_%29.md).

## Topics

### Reasoning actions

- [appendText(\_:segmentID:tokenCount:)](action-swift.struct/appendtext%28__segmentid_tokencount_%29.md)
- [replaceTextSegment(\_:segmentID:tokenCount:)](action-swift.struct/replacetextsegment%28__segmentid_tokencount_%29.md)
- [updateMetadata(\_:)](action-swift.struct/updatemetadata%28__%29.md)
- [updateSignature(\_:tokenCount:)](action-swift.struct/updatesignature%28__tokencount_%29.md)
- [updateUsage(input:output:metadata:)](action-swift.struct/updateusage%28input_output_metadata_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling reasoning

- [action](action-swift.property.md): The action to perform.
- [entryID](entryid.md): The identifier for the entry.
