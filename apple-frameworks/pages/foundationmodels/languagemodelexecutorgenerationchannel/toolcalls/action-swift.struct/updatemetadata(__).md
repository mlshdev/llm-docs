> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/action-swift.struct/updatemetadata(_:)

# updateMetadata(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that replaces the tool call’s metadata.

## Declaration

```swift
static func updateMetadata(_ values: [String : any ConvertibleToGeneratedContent]) -> LanguageModelExecutorGenerationChannel.ToolCalls.Action
```

## Parameters

- `values`: The key-value pairs that replace the tool call’s current metadata.

## See Also

### Tool calling actions

- [toolCall(id:name:action:)](toolcall%28id_name_action_%29.md): Creates an action that routes an event to a specific tool call within the entry.
- [removeToolCall(id:)](removetoolcall%28id_%29.md): Creates an action that removes a tool call.
- [updateUsage(input:output:metadata:)](updateusage%28input_output_metadata_%29.md): Creates an action that replaces the entry’s token-usage totals.
