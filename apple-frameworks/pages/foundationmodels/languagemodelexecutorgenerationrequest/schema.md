> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationrequest/schema](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationrequest/schema)

# schema

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An optional schema dictating the required output format

## Declaration

```swift
var schema: GenerationSchema?
```

## See Also

### Configuring a generation request

- [id](id.md): A request id for logging and tracing purposes
- [metadata](metadata.md): Metadata to attach to the request
- [contextOptions](contextoptions.md): Settings that configure how the model is prompted
- [enabledToolDefinitions](enabledtooldefinitions.md): The subset tool definitions that the model is allowed to call
- [generationOptions](generationoptions.md): Generation options that control sampling behavior
- [transcript](transcript.md): A transcript to generate the next entry for
