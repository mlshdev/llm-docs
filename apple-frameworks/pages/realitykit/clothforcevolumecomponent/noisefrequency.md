> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothforcevolumecomponent/noisefrequency

# noiseFrequency

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The frequency of the noise applied to particles inside the volume.

## Declaration

```swift
var noiseFrequency: Float { get set }
```

<a id="discussion"></a>

## Discussion

Must be non-negative; negative values are clamped to zero.

## See Also

### Adding force noise

- [noiseAmplitude](noiseamplitude.md): The amplitude of the noise applied to particles inside the volume.
