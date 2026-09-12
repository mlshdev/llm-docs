> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsampleinput](https://developer.apple.com/documentation/evaluations/modelsampleinput)

# ModelSampleInput

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The data a language model receives for evaluation.

## Declaration

```swift
struct ModelSampleInput
```

<a id="overview"></a>

## Overview

```swift
@Generable
struct WeatherAnswer {
    let condition: String
}

let input = ModelSampleInput(
    prompt: Prompt("What's the weather like in Cupertino?"),
    instructions: Instructions("Respond with the weather condition only."),
    generationSchema: GenerationSchema(type: WeatherAnswer.self, properties: [])
)
```

synthesizes text representations for display, logging, and synthetic data.

## Topics

### Initializers

- [init(prompt:instructions:generationSchema:)](modelsampleinput/init%28prompt_instructions_generationschema_%29.md): Creates a model sample input with the given prompt, instructions, and schema.

### Instance Properties

- [description](modelsampleinput/description.md): A text representation of this input, equivalent to `promptDescription`.
- [generationSchema](modelsampleinput/generationschema.md): The output schema for the assistant’s response.
- [instructions](modelsampleinput/instructions.md): The optional FoundationModels instructions for this input.
- [instructionsDescription](modelsampleinput/instructionsdescription.md): A text representation of the instructions, synthesized from instruction segments.
- [prompt](modelsampleinput/prompt.md): The FoundationModels prompt for this input.
- [promptDescription](modelsampleinput/promptdescription.md): A text representation of the prompt, synthesized from prompt segments.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bundled input and output

- [ModelSampleOutput](modelsampleoutput.md): The expected output value and evaluation expectations for a sample.
