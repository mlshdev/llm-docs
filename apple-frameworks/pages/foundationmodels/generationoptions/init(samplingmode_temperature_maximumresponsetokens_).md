> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generationoptions/init(samplingmode:temperature:maximumresponsetokens:)

# init(samplingMode:temperature:maximumResponseTokens:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates generation options that control token sampling behavior.

## Declaration

```swift
@backDeployed(before: iOS 27.0, macOS 27.0, visionOS 27.0)
init(samplingMode: GenerationOptions.SamplingMode? = nil, temperature: Double? = nil, maximumResponseTokens: Int? = nil)
```

## Parameters

- `samplingMode`: A strategy to use for sampling from a distribution.
- `temperature`: A value between `0` and `1`, inclusive, that controls how sharply the model favors its most likely responses. A higher value increases variety.
- `maximumResponseTokens`: The maximum number of tokens the model produces before being halted. Must be positive.

## See Also

### Creating options

- [init(samplingMode:temperature:maximumResponseTokens:toolCallingMode:)](init%28samplingmode_temperature_maximumresponsetokens_toolcallingmode_%29.md): Creates generation options that control token sampling behavior.
- [init(sampling:temperature:maximumResponseTokens:)](init%28sampling_temperature_maximumresponsetokens_%29.md): Deprecated. Creates generation options that control token sampling behavior.
