> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/blending-swift.enum/transparent(opacity:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/blending-swift.enum/transparent(opacity:))

# PhysicallyBasedMaterial.Blending.transparent(opacity:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A surface that’s transparent.

## Declaration

```swift
case transparent(opacity: PhysicallyBasedMaterial.Opacity)
```

## Parameters

- `opacity`: The opacity of the material.

<a id="discussion"></a>

## Discussion

This enumeration case indicates that the material supports transparency.

## See Also

### Specifying opacity

- [PhysicallyBasedMaterial.Blending.opaque](opaque.md): An opaque surface.
- [opacityThreshold](../opacitythreshold.md): A threshold below which RealityKit ignores opacity.
- [PhysicallyBasedMaterial.Opacity](../opacity.md): An object that defines the opacity of an entity.
