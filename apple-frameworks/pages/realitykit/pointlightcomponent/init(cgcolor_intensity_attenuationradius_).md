> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/pointlightcomponent/init(cgcolor:intensity:attenuationradius:)

# init(cgColor:intensity:attenuationRadius:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

Creates a new instance with the specified color, intensity and attenuation.

## Declaration

```swift
init(cgColor: CGColor, intensity: Float = 26963.76, attenuationRadius: Float = 10.0)
```

## Parameters

- `cgColor`: The color of the light.
- `intensity`: The light’s brightness.
- `attenuationRadius`: The distance from the light source where its intensity reaches zero. Any objects at or beyond this distance do not receive illumination.
