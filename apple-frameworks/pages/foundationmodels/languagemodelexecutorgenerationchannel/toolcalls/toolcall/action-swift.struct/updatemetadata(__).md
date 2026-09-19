> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/toolcalls/toolcall/action-swift.struct/updatemetadata(_:)

# updateMetadata(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an action that replaces the metadata for a tool call.

## Declaration

```swift
static func updateMetadata(_ values: [String : any ConvertibleToGeneratedContent]) -> LanguageModelExecutorGenerationChannel.ToolCalls.ToolCall.Action
```

## Parameters

- `values`: The key-value pairs that replace the current metadata for a tool call.

## See Also

### Tool call actions

- [appendArguments(\_:tokenCount:)](appendarguments%28__tokencount_%29.md): Creates an action that appends argument text to the tool call.
