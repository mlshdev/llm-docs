> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions/init(samplingmode:temperature:maximumresponsetokens:toolcallingmode:)](https://developer.apple.com/documentation/foundationmodels/generationoptions/init(samplingmode:temperature:maximumresponsetokens:toolcallingmode:))

# init(samplingMode:temperature:maximumResponseTokens:toolCallingMode:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates generation options that control token sampling behavior.

## Declaration

```swift
init(samplingMode: GenerationOptions.SamplingMode? = nil, temperature: Double? = nil, maximumResponseTokens: Int? = nil, toolCallingMode: GenerationOptions.ToolCallingMode?)
```

## Parameters

- `samplingMode`: A strategy to use for sampling from a distribution.
- `temperature`: A value between `0` and `1`, inclusive, that controls how sharply the model favors its most likely responses. A higher value increases variety.
- `maximumResponseTokens`: The maximum number of tokens the model is allowed to produce before being artificially halted. Must be positive.

## See Also

### Creating options

- [init(samplingMode:temperature:maximumResponseTokens:)](init%28samplingmode_temperature_maximumresponsetokens_%29.md)
- [init(sampling:temperature:maximumResponseTokens:)](init%28sampling_temperature_maximumresponsetokens_%29.md): Deprecated. Creates generation options that control token sampling behavior.
