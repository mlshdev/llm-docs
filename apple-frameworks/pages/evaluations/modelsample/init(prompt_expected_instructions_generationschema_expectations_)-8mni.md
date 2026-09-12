> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsample/init(prompt:expected:instructions:generationschema:expectations:)-8mni](https://developer.apple.com/documentation/evaluations/modelsample/init(prompt:expected:instructions:generationschema:expectations:)-8mni)

# init(prompt:expected:instructions:generationSchema:expectations:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a model sample with a FoundationModels prompt.

## Declaration

```swift
init(prompt: Prompt, expected: ExpectedValue? = Optional<String>(nilLiteral: ()), instructions: Instructions? = nil, generationSchema: GenerationSchema? = nil, expectations: TrajectoryExpectation? = nil)
```

## See Also

### Creating a sample

- [init(prompt:expected:instructions:generationSchema:expectations:)](init%28prompt_expected_instructions_generationschema_expectations_%29-7daed.md): Creates a model sample with string-based prompt and instructions.
- [init(input:expected:expectations:)](init%28input_expected_expectations_%29.md): Creates a model sample with a prebuilt input.
