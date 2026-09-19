> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/dataentry

# LanguageModelExecutorGenerationChannel.DataEntry

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

A top-level data-entry event addressed to a transcript entry.

## Declaration

```swift
struct DataEntry
```

<a id="overview"></a>

## Overview

A [LanguageModelExecutorGenerationChannel.DataEntry](dataentry.md) event carries an entry-level action; the currently defined action is [update(contentType:content:metadata:)](dataentry/action-swift.struct/update%28contenttype_content_metadata_%29.md), which upserts a data entry with the given fields — replacing the existing entry that matches `entryID`, or appending a new one.

## Topics

### Structures

- [LanguageModelExecutorGenerationChannel.DataEntry.Action](dataentry/action-swift.struct.md): Beta. An operation that can be performed on a data entry.
- [LanguageModelExecutorGenerationChannel.DataEntry.Update](dataentry/update.md): Beta. The content carried by an [update(contentType:content:metadata:)](dataentry/action-swift.struct/update%28contenttype_content_metadata_%29.md) action.

### Instance Properties

- [action](dataentry/action-swift.property.md): Beta. The action to perform.
- [entryID](dataentry/entryid.md): Beta. The identifier for the entry.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
