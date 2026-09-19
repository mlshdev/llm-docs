> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/action-swift.struct/removetoolcall(id:)

# removeToolCall(id:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that removes a tool call.

## Declaration

```swift
static func removeToolCall(id: String) -> LanguageModelExecutorGenerationChannel.ToolCalls.Action
```

## Parameters

- `id`: The identifier of the tool call to remove.

## See Also

### Tool calling actions

- [toolCall(id:name:action:)](toolcall%28id_name_action_%29.md): Creates an action that routes an event to a specific tool call within the entry.
- [updateMetadata(\_:)](updatemetadata%28__%29.md): Creates an action that replaces the tool call’s metadata.
- [updateUsage(input:output:metadata:)](updateusage%28input_output_metadata_%29.md): Creates an action that replaces the entry’s token-usage totals.
