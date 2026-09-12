> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/shadow/shadowprojection](https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow/shadowprojection)

# shadowProjection

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Sets the shadow projection used for shadow map rendering

## Declaration

```swift
var shadowProjection: DirectionalLightComponent.Shadow.ShadowProjectionType { get set }
```

## See Also

### Configuring the shadow

- [depthBias](depthbias.md): A constant value that RealityKit applies as a bias to its shadow calculations.
- [cullModeOverride](cullmodeoverride.md): The light’s culling mode for shadow map rendering.
- [maximumDistance](maximumdistance.md): Deprecated. The maximum distance for the shadow.
