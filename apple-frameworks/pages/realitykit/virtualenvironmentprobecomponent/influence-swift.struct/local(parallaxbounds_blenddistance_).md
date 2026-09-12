> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/virtualenvironmentprobecomponent/influence-swift.struct/local(parallaxbounds:blenddistance:)](https://developer.apple.com/documentation/realitykit/virtualenvironmentprobecomponent/influence-swift.struct/local(parallaxbounds:blenddistance:))

# local(parallaxBounds:blendDistance:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A local influence using a single bounding box for both parallax correction and influence volume. Local influence for virtual environment probes is available on devices with Apple6 GPU family feature support.

## Declaration

```swift
static func local(parallaxBounds: BoundingBox, blendDistance: Float) -> VirtualEnvironmentProbeComponent.Influence
```

## Parameters

- `parallaxBounds`: The bounding box used for parallax correction (local space).
- `blendDistance`: The distance from the edge of the influence volume over which the probe fades.

## See Also

### Creating an influence

- [global](global.md): A global influence — the probe affects all objects in the world regardless of position.
- [local(parallaxBounds:influenceBounds:blendDistance:)](local%28parallaxbounds_influencebounds_blenddistance_%29.md): A local influence with independent parallax correction and influence volumes. Local influence for virtual environment probes is available on devices with Apple6 GPU family feature support.
