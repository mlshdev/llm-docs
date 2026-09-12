> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeprompt/init(instructions:evaluationtarget:reference:)](https://developer.apple.com/documentation/evaluations/modeljudgeprompt/init(instructions:evaluationtarget:reference:))

# init(instructions:evaluationTarget:reference:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a model prompt configuration.

## Declaration

```swift
init(instructions: String = ModelJudgePrompt.defaultInstructions, evaluationTarget: (@Sendable (Input.ExpectedValue) -> String)? = nil, reference: (nonisolated(nonsending) @Sendable (Input, Input.ExpectedValue) async throws -> [String : String])? = nil)
```

## Parameters

- `instructions`: System instructions for the model judge. Defaults to a general-purpose evaluator prompt.
- `evaluationTarget`: Optional closure to convert the response to a string. When `nil`, the response is JSON-serialized.
- `reference`: Optional closure returning labeled reference data to include in the model prompt.

<a id="discussion"></a>

## Discussion

```swift
let prompt = ModelJudgePrompt<ModelSample<String>>(
    instructions: "You are a domain expert."
)
```

## See Also

### Creating a prompt configuration

- [defaultInstructions](defaultinstructions.md): The default system instructions used when no custom instructions are provided.
