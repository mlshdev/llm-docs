> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions/init(sampling:temperature:maximumresponsetokens:)](https://developer.apple.com/documentation/foundationmodels/generationoptions/init(sampling:temperature:maximumresponsetokens:))

# init(sampling:temperature:maximumResponseTokens:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates generation options that control token sampling behavior.

## Declaration

```swift
init(sampling: GenerationOptions.SamplingMode?, temperature: Double? = nil, maximumResponseTokens: Int? = nil)
```

## Parameters

- `sampling`: A strategy to use for sampling from a distribution.
- `temperature`: Increasing temperature makes it possible for the model to produce less likely responses. Must be between `0` and `1`, inclusive.
- `maximumResponseTokens`: The maximum number of tokens the model is allowed to produce before being artificially halted. Must be positive.

## See Also

### Creating options

- [init(samplingMode:temperature:maximumResponseTokens:)](init%28samplingmode_temperature_maximumresponsetokens_%29.md)
- [init(samplingMode:temperature:maximumResponseTokens:toolCallingMode:)](init%28samplingmode_temperature_maximumresponsetokens_toolcallingmode_%29.md): Creates generation options that control token sampling behavior.
