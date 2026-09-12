> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/toolcall/action-swift.struct](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/toolcall/action-swift.struct)

# LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall.Action

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An operation that can be performed on a tool call.

## Declaration

```swift
struct Action
```

<a id="overview"></a>

## Overview

`Action` is an enum-like struct; construct one with a leading-dot factory such as [appendArguments(\_:tokenCount:)](action-swift.struct/appendarguments%28__tokencount_%29.md).

## Topics

### Tool call actions

- [appendArguments(\_:tokenCount:)](action-swift.struct/appendarguments%28__tokencount_%29.md)
- [updateMetadata(\_:)](action-swift.struct/updatemetadata%28__%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling a tool call

- [action](action-swift.property.md): The action to perform.
- [id](id.md): The identifier for the tool call.
- [name](name.md): The name of the tool call.
- [LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall.ArgumentsFragment](argumentsfragment.md): Argument text appended to this tool call.
