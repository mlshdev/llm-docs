> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/configuration-swift.struct/featuresensitivity-swift.property](https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/featuresensitivity-swift.property)

# featureSensitivity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The precision of landmark detection.

## Declaration

```swift
var featureSensitivity: PhotogrammetrySession.Configuration.FeatureSensitivity
```

<a id="discussion"></a>

## Discussion

The photogrammetry process relies on finding identifiable landmarks in the overlap between images. Landmarks can be hard to identify if the images don’t have enough contrast, aren’t in focus, or if the object is all one color and lacks surface detail.

When [featureSensitivity](featuresensitivity-swift.property.md) is set to [PhotogrammetrySession.Configuration.FeatureSensitivity.high](featuresensitivity-swift.enum/high.md), it instructs RealityKit to search an image for landmarks using an algorithm that analyzes an image closely and in detail. This slower, more sensitive process can produce an accurate 3D object even when landmarks are difficult to discern.

## See Also

### Configuring feature sensitivity

- [PhotogrammetrySession.Configuration.FeatureSensitivity](featuresensitivity-swift.enum.md): The sensitivity to sample landmarks.
