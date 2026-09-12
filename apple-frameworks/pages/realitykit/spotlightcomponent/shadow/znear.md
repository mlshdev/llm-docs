> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/shadow/znear](https://developer.apple.com/documentation/realitykit/spotlightcomponent/shadow/znear)

# zNear

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The near-plane of a shadow frustum.

## Declaration

```swift
var zNear: SpotLightComponent.Shadow.ShadowClippingPlane { get set }
```

<a id="discussion"></a>

## Discussion

The `zNear` is the minimum distance between the light and a visible surface for casting shadows. The default value for `zNear` is [SpotLightComponent.Shadow.ShadowClippingPlane.automatic](shadowclippingplane/automatic.md).

## See Also

### Configuring the shadow

- [depthBias](depthbias.md): A constant value that RealityKit applies as a bias to its shadow calculations.
- [zFar](zfar.md): The orthogonal plane of the shadow frustum that’s furthest from the spotlight.
- [cullModeOverride](cullmodeoverride.md): The light’s culling mode for shadow map rendering.
