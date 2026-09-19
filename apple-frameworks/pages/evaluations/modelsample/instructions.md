> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/modelsample/instructions

# instructions

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Optional instructions providing context to the model for this sample.

## Declaration

```swift
var instructions: Instructions? { get }
```

## See Also

### Specifying the query

- [prompt](prompt.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. The user’s prompt for this sample.
- [promptDescription](promptdescription.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. A text representation of the prompt, synthesized from its segments.
- [instructionsDescription](instructionsdescription.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. A text representation of the instructions, synthesized from their segments.
- [input](input.md): The bundled language model input (prompt, instructions, schema).
