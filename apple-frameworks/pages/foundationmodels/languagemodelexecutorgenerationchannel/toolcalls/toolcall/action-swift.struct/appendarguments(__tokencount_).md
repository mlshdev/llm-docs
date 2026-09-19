> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/toolcall/action-swift.struct/appendarguments(_:tokencount:)

# appendArguments(\_:tokenCount:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that appends argument text to the tool call.

## Declaration

```swift
static func appendArguments(_ content: String, tokenCount: Int) -> LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall.Action
```

## Parameters

- `content`: The argument text to append to the tool call.
- `tokenCount`: The number of the tokens the argument text carries.

## See Also

### Tool call actions

- [updateMetadata(\_:)](updatemetadata%28__%29.md): Creates an action that replaces the metadata for a tool call.
