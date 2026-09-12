> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/boundarymode/none](https://developer.apple.com/documentation/realitykit/portalcomponent/boundarymode/none)

# PortalComponent.BoundaryMode.none

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The portal renders without clipping or crossing.

## Declaration

```swift
case none
```

<a id="discussion"></a>

## Discussion

Portal world content is bounded only by the [PortalMaterial](../../portalmaterial.md) mesh. Entities with [PortalCrossingComponent](../../portalcrossingcomponent.md) don’t cross the portal.
