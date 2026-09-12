> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/environment-swift.struct/imagebasedlight/intensityexponent](https://developer.apple.com/documentation/realitykit/arview/environment-swift.struct/imagebasedlight/intensityexponent)

# intensityExponent

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

The intensity value of the light, defined on a logarithmic scale.

## Declaration

```swift
var intensityExponent: Float
```

<a id="discussion"></a>

## Discussion

An intensity factor is computed as `2^intensityExponent`. The computed value modulates the native value specified in the diffuse and specular textures.

Set the intensity to `0` to result in a scale factor of `1`. This uses the unmodified texture’s diffuse and specular intensities.
