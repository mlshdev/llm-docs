> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothforcevolumecomponent/noiseamplitude](https://developer.apple.com/documentation/realitykit/clothforcevolumecomponent/noiseamplitude)

# noiseAmplitude

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The amplitude of the noise applied to particles inside the volume.

## Declaration

```swift
var noiseAmplitude: Float { get set }
```

<a id="discussion"></a>

## Discussion

Must be non-negative; negative values are clamped to zero.

## See Also

### Adding force noise

- [noiseFrequency](noisefrequency.md): The frequency of the noise applied to particles inside the volume.
