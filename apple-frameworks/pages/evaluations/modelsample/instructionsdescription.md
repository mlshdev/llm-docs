> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsample/instructionsdescription](https://developer.apple.com/documentation/evaluations/modelsample/instructionsdescription)

# instructionsDescription

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A text representation of the instructions, synthesized from their segments.

## Declaration

```swift
var instructionsDescription: String? { get }
```

## See Also

### Specifying the query

- [prompt](prompt.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. The user’s prompt for this sample.
- [promptDescription](promptdescription.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. A text representation of the prompt, synthesized from its segments.
- [instructions](instructions.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. Optional instructions providing context to the model for this sample.
- [input](input.md): The bundled language model input (prompt, instructions, schema).
