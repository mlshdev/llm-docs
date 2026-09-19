> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/structuredtranscript/init(toolcalls:tooloutputs:instructiontext:prompts:responses:)

# init(toolCalls:toolOutputs:instructionText:prompts:responses:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a structured transcript.

## Declaration

```swift
init(toolCalls: [Transcript.ToolCall] = [], toolOutputs: [Transcript.ToolOutput] = [], instructionText: String = "", prompts: [String] = [], responses: [Transcript.Response] = [])
```

## Parameters

- `toolCalls`: The tool calls from the session.
- `toolOutputs`: The tool outputs from the session.
- `instructionText`: The system instructions text.
- `prompts`: The user prompts.
- `responses`: The model responses.
