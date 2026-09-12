> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions/toolcallingmode-swift.property](https://developer.apple.com/documentation/foundationmodels/generationoptions/toolcallingmode-swift.property)

# toolCallingMode

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The tool calling requirements.

## Declaration

```swift
var toolCallingMode: GenerationOptions.ToolCallingMode?
```

## See Also

### Configuring options

- [temperature](temperature.md): A value that influences the confidence of the model’s response.
- [sampling](sampling.md): Deprecated. A sampling strategy for how the model picks tokens when generating a response.
- [samplingMode](samplingmode-swift.property.md): A sampling strategy for how the model picks tokens when generating a response.
- [GenerationOptions.SamplingMode](samplingmode-swift.struct.md): A type that defines how values are sampled from a probability distribution.
- [GenerationOptions.ToolCallingMode](toolcallingmode-swift.struct.md): A value you use to describe the model behavior when it comes to tool usage.
- [maximumResponseTokens](maximumresponsetokens.md): The maximum number of tokens the model is allowed to produce in its response.
