> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/event](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/event)

# LanguageModelExecutorGenerationChannel.Event

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A generation event sent on a generation channel.

## Declaration

```swift
struct Event
```

<a id="overview"></a>

## Overview

Construct one with a leading-dot factory — [response(entryID:action:)](event/response%28entryid_action_%29.md), [reasoning(entryID:action:)](event/reasoning%28entryid_action_%29.md), or [toolCalls(entryID:action:)](event/toolcalls%28entryid_action_%29.md) — and pass it to [send(\_:)](send%28__%29.md).

## Topics

### Handling the channel events

- [response(entryID:action:)](event/response%28entryid_action_%29.md): A response event addressed to a transcript entry.
- [toolCalls(entryID:action:)](event/toolcalls%28entryid_action_%29.md): A tool-calls event addressed to a transcript entry.
- [reasoning(entryID:action:)](event/reasoning%28entryid_action_%29.md): A reasoning event addressed to a transcript entry.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending an event

- [send(\_:)](send%28__%29.md): Sends a generation event on the channel.
