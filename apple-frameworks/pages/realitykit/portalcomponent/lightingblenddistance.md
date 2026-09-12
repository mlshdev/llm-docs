> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/lightingblenddistance](https://developer.apple.com/documentation/realitykit/portalcomponent/lightingblenddistance)

# lightingBlendDistance

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.0+ · macOS 27.0+ · tvOS 26.0+ · visionOS 27.0+

The distance over which crossing-entity lighting blends between the host scene and the portal world.

## Declaration

```swift
var lightingBlendDistance: Float { get set }
```

<a id="discussion"></a>

## Discussion

As an entity with [PortalCrossingComponent](../portalcrossingcomponent.md) crosses the portal boundary, RealityKit transitions its lighting from the host scene’s environment to the portal world’s environment. This property controls the width, in meters, of that transition:

- A value of `0` produces a sharp lighting boundary, with the entity fully lit by the portal world on the inside and the host scene on the outside.
- A positive value produces a smooth gradient that spans the given distance into the portal world, portal crossing entities are unaffected by this value.

The boundary used for the distance calculation is the geometry you configure with [crossingMode](crossingmode-swift.property.md): a plane for [PortalComponent.CrossingMode.plane(\_:)](crossingmode-swift.enum/plane%28__%29.md), or a box for [PortalComponent.CrossingMode.volume(\_:)](crossingmode-swift.enum/volume%28__%29.md).

> **Note**

> This property only affects rendering when [crossingMode](crossingmode-swift.property.md) is enabled.
