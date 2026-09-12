> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/opacitythreshold](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/opacitythreshold)

# opacityThreshold

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A threshold below which RealityKit ignores opacity.

## Declaration

```swift
var opacityThreshold: Float? { get set }
```

## Mentioned In

- [Applying realistic material and lighting effects to entities](../applying-realistic-material-and-lighting-effects-to-entities.md)

<a id="discussion"></a>

## Discussion

When `opacityThreshold` is set, RealityKit discards pixels with opacity values less than the `opacityThreshold`, and renders opacity values greater than or equal to `opacityThreshold` fully opaque.

> **Note**

> When the `opacityThreshold` property is set, the blend mode of the [blending](blending-swift.property.md) property is ignored and the renderer applies the masking behavior.

## See Also

### Specifying opacity

- [PhysicallyBasedMaterial.Blending.opaque](blending-swift.enum/opaque.md): An opaque surface.
- [PhysicallyBasedMaterial.Blending.transparent(opacity:)](blending-swift.enum/transparent%28opacity_%29.md): A surface that’s transparent.
- [PhysicallyBasedMaterial.Opacity](opacity.md): An object that defines the opacity of an entity.
