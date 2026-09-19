> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/unlitmaterial/secondarytexturecoordinatetransform

# secondaryTextureCoordinateTransform

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A two-dimensional transformation to apply to the entity’s secondary texture coordinates.

## Declaration

```swift
var secondaryTextureCoordinateTransform: UnlitMaterial.TextureCoordinateTransform { get set }
```

<a id="discussion"></a>

## Discussion

This property transforms the secondary set. To transform the primary UV coordinates in a material, see [textureCoordinateTransform](texturecoordinatetransform-swift.property.md).
