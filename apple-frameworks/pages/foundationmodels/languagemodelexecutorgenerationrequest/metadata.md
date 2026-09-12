> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationrequest/metadata](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationrequest/metadata)

# metadata

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Metadata to attach to the request

## Declaration

```swift
var metadata: [String : GeneratedContent]
```

## See Also

### Configuring a generation request

- [id](id.md): A request id for logging and tracing purposes
- [contextOptions](contextoptions.md): Settings that configure how the model is prompted
- [enabledToolDefinitions](enabledtooldefinitions.md): The subset tool definitions that the model is allowed to call
- [generationOptions](generationoptions.md): Generation options that control sampling behavior
- [schema](schema.md): An optional schema dictating the required output format
- [transcript](transcript.md): A transcript to generate the next entry for
