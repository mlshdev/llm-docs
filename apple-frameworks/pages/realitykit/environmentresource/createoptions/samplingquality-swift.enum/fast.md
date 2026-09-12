> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/createoptions/samplingquality-swift.enum/fast](https://developer.apple.com/documentation/realitykit/environmentresource/createoptions/samplingquality-swift.enum/fast)

# EnvironmentResource.CreateOptions.SamplingQuality.fast

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Computes the environment textures with small sampling rates.

## Declaration

```swift
case fast
```

<a id="discussion"></a>

## Discussion

Low sampling rates can result in higher noise in high-frequency areas and banding in low-frequency gradients.

## See Also

### Sampling qualities

- [EnvironmentResource.CreateOptions.SamplingQuality.normal](normal.md): Computes the environment textures with regular sampling rates.
- [EnvironmentResource.CreateOptions.SamplingQuality.high](high.md): Computes the environment textures with high sampling rates, reducing texture noise in high-frequency areas.
- [EnvironmentResource.CreateOptions.SamplingQuality.veryHigh](veryhigh.md): Computes the environment textures with very high sampling rates.
