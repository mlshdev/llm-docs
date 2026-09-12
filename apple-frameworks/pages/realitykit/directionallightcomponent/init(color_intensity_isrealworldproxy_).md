> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/init(color:intensity:isrealworldproxy:)](https://developer.apple.com/documentation/realitykit/directionallightcomponent/init(color:intensity:isrealworldproxy:))

# init(color:intensity:isRealWorldProxy:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a directional light with a configuration.

## Declaration

```swift
init(color: DirectionalLightComponent.Color = .white, intensity: Float = 2145.7078, isRealWorldProxy: Bool = false)
```

## Parameters

- `color`: A color for the light.
- `intensity`: The intensity of the light, measured in lumen per square meter.
- `isRealWorldProxy`: A Boolean that you use to control whether the light operates as a proxy for a real-world light.
