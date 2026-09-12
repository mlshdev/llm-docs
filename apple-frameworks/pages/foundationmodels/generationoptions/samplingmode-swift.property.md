> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions/samplingmode-swift.property](https://developer.apple.com/documentation/foundationmodels/generationoptions/samplingmode-swift.property)

# samplingMode

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A sampling strategy for how the model picks tokens when generating a response.

## Declaration

```swift
@backDeployed(before: iOS 27.0, macOS 27.0, visionOS 27.0)
var samplingMode: GenerationOptions.SamplingMode? { get set }
```

<a id="discussion"></a>

## Discussion

When you execute a prompt on a model, the model produces a probability for every token in its vocabulary. The sampling strategy controls how the model narrows down the list of tokens to consider during that process. A strategy that picks the single most likely token yields a predictable response every time, but other strategies offer results that often sound more natural to a person.

> **Note**

> Leaving the `sampling` nil lets the system choose a a reasonable default on your behalf.

## See Also

### Configuring options

- [temperature](temperature.md): A value that influences the confidence of the model’s response.
- [sampling](sampling.md): Deprecated. A sampling strategy for how the model picks tokens when generating a response.
- [GenerationOptions.SamplingMode](samplingmode-swift.struct.md): A type that defines how values are sampled from a probability distribution.
- [toolCallingMode](toolcallingmode-swift.property.md): The tool calling requirements.
- [GenerationOptions.ToolCallingMode](toolcallingmode-swift.struct.md): A value you use to describe the model behavior when it comes to tool usage.
- [maximumResponseTokens](maximumresponsetokens.md): The maximum number of tokens the model is allowed to produce in its response.
