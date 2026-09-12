> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/boundarystyle/infiniteplane()](https://developer.apple.com/documentation/realitykit/portalcomponent/boundarystyle/infiniteplane())

# infinitePlane()

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a boundary style that uses an infinite plane.

## Declaration

```swift
static func infinitePlane() -> PortalComponent.BoundaryStyle
```

<a id="discussion"></a>

## Discussion

The boundary is the entity’s local XY plane. RealityKit clips portal world content behind the surface and lets crossing entities pass through it freely.

This boundary corresponds to [PortalComponent.ClippingMode.plane(\_:)](../clippingmode-swift.enum/plane%28__%29.md) and [PortalComponent.CrossingMode.plane(\_:)](../crossingmode-swift.enum/plane%28__%29.md) configured with [positiveZ](../plane/positivez.md).
