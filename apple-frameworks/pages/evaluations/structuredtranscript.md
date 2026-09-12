> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/structuredtranscript](https://developer.apple.com/documentation/evaluations/structuredtranscript)

# StructuredTranscript

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

## Declaration

```swift
struct StructuredTranscript
```

## Topics

### Creating a transcript

- [init(toolCalls:toolOutputs:instructionText:prompts:responses:)](structuredtranscript/init%28toolcalls_tooloutputs_instructiontext_prompts_responses_%29.md): Creates a structured transcript.

### Inspecting prompts and responses

- [instructionText](structuredtranscript/instructiontext.md): The system instruction text from the transcript.
- [prompts](structuredtranscript/prompts.md): The user prompt strings from the transcript.
- [responses](structuredtranscript/responses.md): The model responses from the transcript.

### Inspecting tool interactions

- [toolCalls](structuredtranscript/toolcalls.md): The tool calls extracted from the transcript.
- [toolOutputs](structuredtranscript/tooloutputs.md): The tool outputs extracted from the transcript.
- [StructuredValue](structuredvalue.md): A type-safe representation of JSON values.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting tool calls

- [toolCalls](modelsubject/toolcalls.md): Conforms when `Value` conforms to `Decodable`, `Encodable`, and `Sendable`. The tool calls from the transcript, or an empty array if no transcript was provided.
