> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/intensity](https://developer.apple.com/documentation/realitykit/spotlightcomponent/intensity)

# intensity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

The intensity of the spotlight measured in lumen.

## Declaration

```swift
var intensity: Float
```

<a id="discussion"></a>

## Discussion

The default value is `6740.94` lumens.

For more information on how the `intensity` and [attenuationRadius](attenuationradius.md) affect this light, see  [SpotLightComponent](../spotlightcomponent.md).

## See Also

### Configuring the spotlight

- [innerAngleInDegrees](innerangleindegrees.md): The inner angle of the spotlight in degrees.
- [outerAngleInDegrees](outerangleindegrees.md): The outer angle of the spotlight in degrees.
- [attenuationRadius](attenuationradius.md): The distance from the light source where its intensity reaches zero.
- [attenuationFalloffExponent](attenuationfalloffexponent.md): The exponent value for the light’s intensity falloff-transition curve.
