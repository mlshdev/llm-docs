> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/virtualenvironmentprobecomponent/influence-swift.struct](https://developer.apple.com/documentation/realitykit/virtualenvironmentprobecomponent/influence-swift.struct)

# VirtualEnvironmentProbeComponent.Influence

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Defines the spatial influence of an environment probe.

## Declaration

```swift
struct Influence
```

## Topics

### Creating an influence

- [global](influence-swift.struct/global.md): A global influence — the probe affects all objects in the world regardless of position.
- [local(parallaxBounds:blendDistance:)](influence-swift.struct/local%28parallaxbounds_blenddistance_%29.md): A local influence using a single bounding box for both parallax correction and influence volume. Local influence for virtual environment probes is available on devices with Apple6 GPU family feature support.
- [local(parallaxBounds:influenceBounds:blendDistance:)](influence-swift.struct/local%28parallaxbounds_influencebounds_blenddistance_%29.md): A local influence with independent parallax correction and influence volumes. Local influence for virtual environment probes is available on devices with Apple6 GPU family feature support.

## See Also

### Configuring probe influence

- [influence](influence-swift.property.md)
