> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/shadow/maximumdistance](https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow/maximumdistance)

# maximumDistance

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0)

The maximum distance for the shadow.

> Use .shadowProjection = .automatic(maximumDistance:)

## Declaration

```swift
var maximumDistance: Float { get set }
```

## See Also

### Configuring the shadow

- [depthBias](depthbias.md): A constant value that RealityKit applies as a bias to its shadow calculations.
- [cullModeOverride](cullmodeoverride.md): The light’s culling mode for shadow map rendering.
- [shadowProjection](shadowprojection.md): Sets the shadow projection used for shadow map rendering
