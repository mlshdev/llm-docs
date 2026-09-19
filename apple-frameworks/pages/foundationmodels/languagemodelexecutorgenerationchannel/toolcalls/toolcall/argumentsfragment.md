> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/toolcall/argumentsfragment

# LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall.ArgumentsFragment

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Argument text appended to this tool call.

## Declaration

```swift
struct ArgumentsFragment
```

<a id="overview"></a>

## Overview

The first event for a given id opens the tool call (using `name` from the enclosing [LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall](../toolcall.md)); subsequent events append additional argument text.

## Topics

### Handling the arguments fragment

- [content](argumentsfragment/content.md): The argument text to append to the tool call.
- [tokenCount](argumentsfragment/tokencount.md): The number of tokens the argument text carries.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling a tool call

- [action](action-swift.property.md): The action to perform.
- [LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall.Action](action-swift.struct.md): An operation that can be performed on a tool call.
- [id](id.md): The identifier for the tool call.
- [name](name.md): The name of the tool call.
