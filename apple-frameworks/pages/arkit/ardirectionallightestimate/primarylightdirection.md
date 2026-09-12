> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ardirectionallightestimate/primarylightdirection](https://developer.apple.com/documentation/arkit/ardirectionallightestimate/primarylightdirection)

# primaryLightDirection (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A vector indicating the orientation of the strongest directional light source in the scene.

## Declaration

```swift
var primaryLightDirection: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

When ARKit analyzes the directional lighting environment for a detected face, the resulting lighting estimate can represent the influence of multiple light sources with different directions and intensities. To access this level of detail for use in your custom rendering code, use the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.

If your app displays AR content using a technology that doesn’t support environment-based lighting, this [primaryLightDirection](primarylightdirection.md) property represents the average of directional light sources in the scene. This vector is normalized and in world coordinate space.

## See Also

### Examining Light Parameters

- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions.
- [primaryLightIntensity](primarylightintensity.md): The estimated intensity, in lumens, of the strongest directional light source in the scene.

# primaryLightDirection (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A vector indicating the orientation of the strongest directional light source in the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3 primaryLightDirection;
```

<a id="Discussion"></a>

## Discussion

When ARKit analyzes the directional lighting environment for a detected face, the resulting lighting estimate can represent the influence of multiple light sources with different directions and intensities. To access this level of detail for use in your custom rendering code, use the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.

If your app displays AR content using a technology that doesn’t support environment-based lighting, this [primaryLightDirection](primarylightdirection.md) property represents the average of directional light sources in the scene. This vector is normalized and in world coordinate space.

## See Also

### Examining Light Parameters

- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions.
- [primaryLightIntensity](primarylightintensity.md): The estimated intensity, in lumens, of the strongest directional light source in the scene.
