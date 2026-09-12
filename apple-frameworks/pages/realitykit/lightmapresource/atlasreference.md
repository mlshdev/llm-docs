> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lightmapresource/atlasreference](https://developer.apple.com/documentation/realitykit/lightmapresource/atlasreference)

# LightmapResource.AtlasReference

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specifies an area in a lightmap atlas to fetch data from.

## Declaration

```swift
struct AtlasReference
```

## Topics

### Locating the atlas texture

- [atlasTextureIndex](atlasreference/atlastextureindex.md): Index of the atlas within the LightmapResource.
- [atlasTextureSlice](atlasreference/atlastextureslice.md): Index of the slice within the atlas.

### Mapping texture coordinates

- [uvScale](atlasreference/uvscale.md): A scale to apply to lightmap UV attribute before sampling from the slice of the atlas. Note that lightmap textures use the Metal convention: UV (0,0) corresponds to the top-left corner of the image, while UV (1,1) corresponds to the bottom-right.
- [uvOffset](atlasreference/uvoffset.md): An offset to apply to lightmap UV attribute before sampling from the slice of the atlas. Note that lightmap textures use the Metal convention: UV (0,0) corresponds to the top-left corner of the image, while UV (1,1) corresponds to the bottom-right.

### Initializers

- [init()](atlasreference/init%28%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
