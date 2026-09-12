> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/event/reasoning(entryid:action:)](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/event/reasoning(entryid:action:))

# reasoning(entryID:action:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A reasoning event addressed to a transcript entry.

## Declaration

```swift
static func reasoning(entryID: String? = nil, action: LanguageModelExecutorGenerationChannel.Reasoning.Action) -> LanguageModelExecutorGenerationChannel.Event
```

## Parameters

- `entryID`: The reasoning entry this event targets. Pass `nil` to coalesce consecutive reasoning deltas into the trailing reasoning entry; pass an explicit id when you need a stable anchor.
- `action`: The operation to perform on the reasoning entry.

## See Also

### Handling the channel events

- [response(entryID:action:)](response%28entryid_action_%29.md): A response event addressed to a transcript entry.
- [toolCalls(entryID:action:)](toolcalls%28entryid_action_%29.md): A tool-calls event addressed to a transcript entry.
