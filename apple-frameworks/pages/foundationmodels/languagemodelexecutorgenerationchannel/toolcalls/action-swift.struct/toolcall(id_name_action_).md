> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/action-swift.struct/toolcall(id:name:action:)

# toolCall(id:name:action:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that routes an event to a specific tool call within the entry.

## Declaration

```swift
static func toolCall(id: String, name: String, action: LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall.Action) -> LanguageModelExecutorGenerationChannel.ToolCalls.Action
```

## Parameters

- `id`: The identifier of the tool call the event targets.
- `name`: The name of the tool being called.
- `action`: The operation to perform on the tool call.

## See Also

### Tool calling actions

- [removeToolCall(id:)](removetoolcall%28id_%29.md): Creates an action that removes a tool call.
- [updateMetadata(\_:)](updatemetadata%28__%29.md): Creates an action that replaces the tool call’s metadata.
- [updateUsage(input:output:metadata:)](updateusage%28input_output_metadata_%29.md): Creates an action that replaces the entry’s token-usage totals.
