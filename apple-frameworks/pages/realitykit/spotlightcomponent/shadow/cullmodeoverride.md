> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/shadow/cullmodeoverride](https://developer.apple.com/documentation/realitykit/spotlightcomponent/shadow/cullmodeoverride)

# cullModeOverride

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The light’s culling mode for shadow map rendering.

## Declaration

```swift
var cullModeOverride: SpotLightComponent.Shadow.ShadowMapCullMode? { get set }
```

## See Also

### Configuring the shadow

- [depthBias](depthbias.md): A constant value that RealityKit applies as a bias to its shadow calculations.
- [zNear](znear.md): The near-plane of a shadow frustum.
- [zFar](zfar.md): The orthogonal plane of the shadow frustum that’s furthest from the spotlight.
