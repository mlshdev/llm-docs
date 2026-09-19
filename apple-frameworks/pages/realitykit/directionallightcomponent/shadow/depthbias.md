> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow/depthbias

# depthBias

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

A constant value that RealityKit applies as a bias to its shadow calculations.

## Declaration

```swift
var depthBias: Float
```

<a id="discussion"></a>

## Discussion

Reduce visual effects such as *shadow acne*, by adjusting this property. The default value is `1.0`.

## See Also

### Configuring the shadow

- [cullModeOverride](cullmodeoverride.md): The light’s culling mode for shadow map rendering.
- [shadowProjection](shadowprojection.md): Sets the shadow projection used for shadow map rendering
- [maximumDistance](maximumdistance.md): Deprecated. The maximum distance for the shadow.
