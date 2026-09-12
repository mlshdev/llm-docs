> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationrequest/enabledtooldefinitions](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationrequest/enabledtooldefinitions)

# enabledToolDefinitions

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The subset tool definitions that the model is allowed to call

## Declaration

```swift
var enabledToolDefinitions: [Transcript.ToolDefinition]
```

## See Also

### Configuring a generation request

- [id](id.md): A request id for logging and tracing purposes
- [metadata](metadata.md): Metadata to attach to the request
- [contextOptions](contextoptions.md): Settings that configure how the model is prompted
- [generationOptions](generationoptions.md): Generation options that control sampling behavior
- [schema](schema.md): An optional schema dictating the required output format
- [transcript](transcript.md): A transcript to generate the next entry for
