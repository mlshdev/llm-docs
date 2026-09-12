> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/attenuationradius](https://developer.apple.com/documentation/realitykit/spotlightcomponent/attenuationradius)

# attenuationRadius

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

The distance from the light source where its intensity reaches zero.

## Declaration

```swift
var attenuationRadius: Float
```

<a id="discussion"></a>

## Discussion

Any objects at or beyond this distance do not receive illumination. The default value is `10.0` meters.

See [SpotLightComponent](../spotlightcomponent.md) for more information about how the [intensity](intensity.md) and `attenuationRadius` properties affect this light.

## See Also

### Configuring the spotlight

- [intensity](intensity.md): The intensity of the spotlight measured in lumen.
- [innerAngleInDegrees](innerangleindegrees.md): The inner angle of the spotlight in degrees.
- [outerAngleInDegrees](outerangleindegrees.md): The outer angle of the spotlight in degrees.
- [attenuationFalloffExponent](attenuationfalloffexponent.md): The exponent value for the light’s intensity falloff-transition curve.
