> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/event/toolcalls(entryid:action:)](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/event/toolcalls(entryid:action:))

# toolCalls(entryID:action:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A tool-calls event addressed to a transcript entry.

## Declaration

```swift
static func toolCalls(entryID: String? = nil, action: LanguageModelExecutorGenerationChannel.ToolCalls.Action) -> LanguageModelExecutorGenerationChannel.Event
```

## Parameters

- `entryID`: The tool-calls entry this event targets. Pass `nil` to let the framework coalesce consecutive tool-calls events into a single entry; pass an explicit id to anchor the event to a specific entry.
- `action`: The operation to perform on the tool-calls entry.

## See Also

### Handling the channel events

- [response(entryID:action:)](response%28entryid_action_%29.md): A response event addressed to a transcript entry.
- [reasoning(entryID:action:)](reasoning%28entryid_action_%29.md): A reasoning event addressed to a transcript entry.
