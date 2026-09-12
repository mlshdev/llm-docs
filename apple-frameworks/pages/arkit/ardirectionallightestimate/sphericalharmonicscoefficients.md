> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ardirectionallightestimate/sphericalharmonicscoefficients](https://developer.apple.com/documentation/arkit/ardirectionallightestimate/sphericalharmonicscoefficients)

# sphericalHarmonicsCoefficients (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Data describing the estimated lighting environment in all directions.

## Declaration

```swift
var sphericalHarmonicsCoefficients: Data { get }
```

<a id="Discussion"></a>

## Discussion

Spherical harmonics provide a compact mathematical model for the global lighting environment around a point in space, describing the distribution and colors of multiple directional light sources. When used in a renderer that supports environment-based lighting, spherical harmonics provide much less high-frequency detail than a cube map texture, but make much more efficient use of GPU resources.

ARKit provides second-level spherical harmonics in separate red, green, and blue data planes. Thus, this data buffer contains 3 sets of 9 coefficients, or a total of 27 values of 32-bit floating point type.

## See Also

### Examining Light Parameters

- [primaryLightDirection](primarylightdirection.md): A vector indicating the orientation of the strongest directional light source in the scene.
- [primaryLightIntensity](primarylightintensity.md): The estimated intensity, in lumens, of the strongest directional light source in the scene.

# sphericalHarmonicsCoefficients (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Data describing the estimated lighting environment in all directions.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * sphericalHarmonicsCoefficients;
```

<a id="Discussion"></a>

## Discussion

Spherical harmonics provide a compact mathematical model for the global lighting environment around a point in space, describing the distribution and colors of multiple directional light sources. When used in a renderer that supports environment-based lighting, spherical harmonics provide much less high-frequency detail than a cube map texture, but make much more efficient use of GPU resources.

ARKit provides second-level spherical harmonics in separate red, green, and blue data planes. Thus, this data buffer contains 3 sets of 9 coefficients, or a total of 27 values of 32-bit floating point type.

## See Also

### Examining Light Parameters

- [primaryLightDirection](primarylightdirection.md): A vector indicating the orientation of the strongest directional light source in the scene.
- [primaryLightIntensity](primarylightintensity.md): The estimated intensity, in lumens, of the strongest directional light source in the scene.
