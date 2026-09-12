> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/shadow/zfar](https://developer.apple.com/documentation/realitykit/spotlightcomponent/shadow/zfar)

# zFar

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The orthogonal plane of the shadow frustum that’s furthest from the spotlight.

## Declaration

```swift
var zFar: SpotLightComponent.Shadow.ShadowClippingPlane { get set }
```

<a id="discussion"></a>

## Discussion

The `zFar` is the maximum distance between the light and a visible surface for casting shadows.

The spotlight applies the value from [attenuationRadius](../attenuationradius.md), when you set this property to [SpotLightComponent.Shadow.ShadowClippingPlane.automatic](shadowclippingplane/automatic.md), which is its default value. Setting this value to [SpotLightComponent.Shadow.ShadowClippingPlane.fixed(\_:)](shadowclippingplane/fixed%28__%29.md) is equivalent to assigning it to `min(zFar, attenuationRadius)`.

## See Also

### Configuring the shadow

- [depthBias](depthbias.md): A constant value that RealityKit applies as a bias to its shadow calculations.
- [zNear](znear.md): The near-plane of a shadow frustum.
- [cullModeOverride](cullmodeoverride.md): The light’s culling mode for shadow map rendering.
