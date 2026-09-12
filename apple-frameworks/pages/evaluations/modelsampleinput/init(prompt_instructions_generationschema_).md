> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsampleinput/init(prompt:instructions:generationschema:)](https://developer.apple.com/documentation/evaluations/modelsampleinput/init(prompt:instructions:generationschema:))

# init(prompt:instructions:generationSchema:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a model sample input with the given prompt, instructions, and schema.

## Declaration

```swift
init(prompt: Prompt, instructions: Instructions? = nil, generationSchema: GenerationSchema? = nil)
```

## Parameters

- `prompt`: The prompt to send to the language model.
- `instructions`: Optional system instructions for the model session.
- `generationSchema`: The output schema for the assistant’s response.

<a id="discussion"></a>

## Discussion

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
