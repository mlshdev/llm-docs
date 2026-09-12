> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/createoptions/samplingquality-swift.enum/veryhigh](https://developer.apple.com/documentation/realitykit/environmentresource/createoptions/samplingquality-swift.enum/veryhigh)

# EnvironmentResource.CreateOptions.SamplingQuality.veryHigh

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** macOS 15.0+

Computes the environment textures with very high sampling rates.

## Declaration

```swift
case veryHigh
```

<a id="discussion"></a>

## Discussion

Use only to capture very small frequency details in the specular texture.

> **Note**

> Only available in macOS.

## See Also

### Sampling qualities

- [EnvironmentResource.CreateOptions.SamplingQuality.fast](fast.md): Computes the environment textures with small sampling rates.
- [EnvironmentResource.CreateOptions.SamplingQuality.normal](normal.md): Computes the environment textures with regular sampling rates.
- [EnvironmentResource.CreateOptions.SamplingQuality.high](high.md): Computes the environment textures with high sampling rates, reducing texture noise in high-frequency areas.
