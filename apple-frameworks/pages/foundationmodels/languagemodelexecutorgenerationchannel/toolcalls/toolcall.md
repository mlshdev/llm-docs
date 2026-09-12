> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/toolcall](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/toolcall)

# LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A per-tool-call event payload.

## Declaration

```swift
struct ToolCall
```

<a id="overview"></a>

## Overview

The `id` and `name` route the event to a specific tool call within the `ToolCalls` entry. The`action` names the mutation.

## Topics

### Handling a tool call

- [action](toolcall/action-swift.property.md): The action to perform.
- [LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall.Action](toolcall/action-swift.struct.md): An operation that can be performed on a tool call.
- [id](toolcall/id.md): The identifier for the tool call.
- [name](toolcall/name.md): The name of the tool call.
- [LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall.ArgumentsFragment](toolcall/argumentsfragment.md): Argument text appended to this tool call.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling tool calls

- [action](action-swift.property.md): The action to perform.
- [LanguageModelExecutorGenerationChannel.ToolCalls.Action](action-swift.struct.md): An operation that can be performed on a tool-calls entry.
- [entryID](entryid.md): The identifier for the entry.
