> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/pointlightcomponent/intensity](https://developer.apple.com/documentation/realitykit/pointlightcomponent/intensity)

# intensity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

The intensity of the point light, measured in lumen.

## Declaration

```swift
var intensity: Float
```

<a id="discussion"></a>

## Discussion

The default value is `26963.76` lumens.

See [PointLightComponent](../pointlightcomponent.md) for more information about how the `intensity` and [attenuationRadius](attenuationradius.md) properties affect this light.

## See Also

### Configuring the light

- [attenuationRadius](attenuationradius.md): The distance from the light source where its intensity reaches zero.
- [attenuationFalloffExponent](attenuationfalloffexponent.md): The exponent value for the light’s intensity falloff-transition curve.
