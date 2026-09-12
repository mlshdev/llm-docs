> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/shadow/depthbias](https://developer.apple.com/documentation/realitykit/spotlightcomponent/shadow/depthbias)

# depthBias

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A constant value that RealityKit applies as a bias to its shadow calculations.

## Declaration

```swift
var depthBias: Float { get set }
```

<a id="discussion"></a>

## Discussion

Reduce visual effects such as *shadow acne*, by adjusting this property. The default value is `1.0`.

## See Also

### Configuring the shadow

- [zNear](znear.md): The near-plane of a shadow frustum.
- [zFar](zfar.md): The orthogonal plane of the shadow frustum that’s furthest from the spotlight.
- [cullModeOverride](cullmodeoverride.md): The light’s culling mode for shadow map rendering.
