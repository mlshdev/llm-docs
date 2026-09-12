> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/pointlightcomponent/init(color:intensity:attenuationradius:attenuationfalloffexponent:)](https://developer.apple.com/documentation/realitykit/pointlightcomponent/init(color:intensity:attenuationradius:attenuationfalloffexponent:))

# init(color:intensity:attenuationRadius:attenuationFalloffExponent:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a point light component with a configuration.

## Declaration

```swift
init(color: PointLightComponent.Color = .white, intensity: Float = 26963.76, attenuationRadius: Float = 10.0, attenuationFalloffExponent: Float = 2.0)
```

## Parameters

- `color`: The color of the light.
- `intensity`: The intensity of the light in lumens.
- `attenuationRadius`: The distance from the light source where its intensity reaches zero. Any objects at or beyond this distance do not receive illumination.
- `attenuationFalloffExponent`: An exponent value for the light’s intensity falloff-transition curve.
