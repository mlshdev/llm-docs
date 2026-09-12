> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/virtualenvironmentprobecomponent/probe/intensityexponent](https://developer.apple.com/documentation/realitykit/virtualenvironmentprobecomponent/probe/intensityexponent)

# intensityExponent

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The intensity value for the resource, which RealityKit defines on a logarithmic scale.

## Declaration

```swift
var intensityExponent: Float
```

<a id="discussion"></a>

## Discussion

RealityKit multiplies the intensity of the probe by `2^intensityExponent`. An `intensityExponent` of `0.0` means using the diffuse and specular intensities as-is.
