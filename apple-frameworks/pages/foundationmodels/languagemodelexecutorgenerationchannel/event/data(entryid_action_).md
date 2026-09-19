> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/event/data(entryid:action:)

# data(entryID:action:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

A data-entry event addressed to a transcript entry.

## Declaration

```swift
static func data(entryID: String? = nil, action: LanguageModelExecutorGenerationChannel.DataEntry.Action) -> LanguageModelExecutorGenerationChannel.Event
```

## Parameters

- `entryID`: The identifier for the data entry to upsert. Pass `nil` to have the framework assign a fresh id.
- `action`: The operation to perform on the data entry.

<a id="discussion"></a>

## Discussion

The entry’s `contentType` (from [update(contentType:content:metadata:)](../dataentry/action-swift.struct/update%28contenttype_content_metadata_%29.md)) is checked against [supportsDataEntryType(\_:)](../../languagemodel/supportsdataentrytype%28__%29.md) before the entry is appended, and rejected entries surface as [LanguageModelError.unsupportedTranscriptContent(\_:)](../../languagemodelerror/unsupportedtranscriptcontent%28__%29.md).
