> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions/temperature](https://developer.apple.com/documentation/foundationmodels/generationoptions/temperature)

# temperature

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A value that influences the confidence of the model’s response.

## Declaration

```swift
var temperature: Double?
```

<a id="discussion"></a>

## Discussion

The value of this property must be a number between `0` and `1` inclusive.

Temperature is an adjustment applied to the probability distribution prior to sampling. A value of `1` results in no adjustment. Values less than `1` make the probability distribution sharper, with already likely tokens becoming even more likely.

The net effect is that low temperatures manifest as more stable and predictable responses, while high temperatures give the model more creative license.

> **Note**

> Leaving `temperature` nil lets the system choose a reasonable default on your behalf.

## See Also

### Configuring options

- [sampling](sampling.md): Deprecated. A sampling strategy for how the model picks tokens when generating a response.
- [samplingMode](samplingmode-swift.property.md): A sampling strategy for how the model picks tokens when generating a response.
- [GenerationOptions.SamplingMode](samplingmode-swift.struct.md): A type that defines how values are sampled from a probability distribution.
- [toolCallingMode](toolcallingmode-swift.property.md): The tool calling requirements.
- [GenerationOptions.ToolCallingMode](toolcallingmode-swift.struct.md): A value you use to describe the model behavior when it comes to tool usage.
- [maximumResponseTokens](maximumresponsetokens.md): The maximum number of tokens the model is allowed to produce in its response.
