> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ardirectionallightestimate/primarylightintensity](https://developer.apple.com/documentation/arkit/ardirectionallightestimate/primarylightintensity)

# primaryLightIntensity (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The estimated intensity, in lumens, of the strongest directional light source in the scene.

## Declaration

```swift
var primaryLightIntensity: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

When ARKit analyzes the directional lighting environment for a detected face, the resulting lighting estimate can represent the influence of multiple light sources with different directions and intensities. To access this level of detail for use in your custom rendering code, use the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.

If your app displays AR content using a technology that doesn’t support environment-based lighting, this [primaryLightIntensity](primarylightintensity.md) property represents the average of directional light sources in the scene. This value is scaled to be appropriate for use in rendering architectures that use realistic lighting metrics, with a value of 1000 representing neutral lighting.

For example, you can pass this value directly to the [intensity](../../scenekit/scnlight/intensity.md) property of a SceneKit directional light for lighting results that roughly match those of the real-world scene captured by the device camera. (However, passing this value to SceneKit is generally not necessary; the [ARSCNView](../arscnview.md) class automatically sets SceneKit lighting based on the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.)

## See Also

### Examining Light Parameters

- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions.
- [primaryLightDirection](primarylightdirection.md): A vector indicating the orientation of the strongest directional light source in the scene.

# primaryLightIntensity (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The estimated intensity, in lumens, of the strongest directional light source in the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat primaryLightIntensity;
```

<a id="Discussion"></a>

## Discussion

When ARKit analyzes the directional lighting environment for a detected face, the resulting lighting estimate can represent the influence of multiple light sources with different directions and intensities. To access this level of detail for use in your custom rendering code, use the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.

If your app displays AR content using a technology that doesn’t support environment-based lighting, this [primaryLightIntensity](primarylightintensity.md) property represents the average of directional light sources in the scene. This value is scaled to be appropriate for use in rendering architectures that use realistic lighting metrics, with a value of 1000 representing neutral lighting.

For example, you can pass this value directly to the [intensity](../../scenekit/scnlight/intensity.md) property of a SceneKit directional light for lighting results that roughly match those of the real-world scene captured by the device camera. (However, passing this value to SceneKit is generally not necessary; the [ARSCNView](../arscnview.md) class automatically sets SceneKit lighting based on the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.)

## See Also

### Examining Light Parameters

- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions.
- [primaryLightDirection](primarylightdirection.md): A vector indicating the orientation of the strongest directional light source in the scene.
