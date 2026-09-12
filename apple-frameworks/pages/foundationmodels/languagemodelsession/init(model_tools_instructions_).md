> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/init(model:tools:instructions:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/init(model:tools:instructions:))

# init(model:tools:instructions:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a session in a blank slate state with an instructions builder.

## Declaration

```swift
convenience init(model: SystemLanguageModel = .default, tools: [any Tool] = [], @InstructionsBuilder instructions: () throws -> Instructions) rethrows
```

## Mentioned In

- [Adding server-side intelligence with Private Cloud Compute](../adding-server-side-intelligence-with-private-cloud-compute.md)
- [Running a Core AI model in a Foundation Models session](../running-a-core-ai-model-in-a-foundation-models-session.md)

<a id="discussion"></a>

## Discussion

- Parameters

  - model: The language model to use for this session.
  - tools: Tools to make available to the model for this session.
  - instructions: Instructions that control the model’s behavior.

## See Also

### Creating a session

- [init(model:tools:transcript:)](init%28model_tools_transcript_%29.md): Creates a session by rehydrating from a transcript.
