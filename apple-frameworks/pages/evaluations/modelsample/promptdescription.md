> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsample/promptdescription](https://developer.apple.com/documentation/evaluations/modelsample/promptdescription)

# promptDescription

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A text representation of the prompt, synthesized from its segments.

## Declaration

```swift
var promptDescription: String { get }
```

## See Also

### Specifying the query

- [prompt](prompt.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. The user’s prompt for this sample.
- [instructions](instructions.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. Optional instructions providing context to the model for this sample.
- [instructionsDescription](instructionsdescription.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. A text representation of the instructions, synthesized from their segments.
- [input](input.md): The bundled language model input (prompt, instructions, schema).
