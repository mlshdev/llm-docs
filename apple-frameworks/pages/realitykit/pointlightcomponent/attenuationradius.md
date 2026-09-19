> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/pointlightcomponent/attenuationradius

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

See [PointLightComponent](../pointlightcomponent.md) for more information about how the [intensity](intensity.md) and `attenuationRadius` properties affect this light.

## See Also

### Configuring the light

- [intensity](intensity.md): The intensity of the point light, measured in lumen.
- [attenuationFalloffExponent](attenuationfalloffexponent.md): The exponent value for the light’s intensity falloff-transition curve.
