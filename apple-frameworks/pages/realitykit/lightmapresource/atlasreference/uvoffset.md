> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lightmapresource/atlasreference/uvoffset](https://developer.apple.com/documentation/realitykit/lightmapresource/atlasreference/uvoffset)

# uvOffset

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An offset to apply to lightmap UV attribute before sampling from the slice of the atlas. Note that lightmap textures use the Metal convention: UV (0,0) corresponds to the top-left corner of the image, while UV (1,1) corresponds to the bottom-right.

## Declaration

```swift
var uvOffset: SIMD2<Float>
```

## See Also

### Mapping texture coordinates

- [uvScale](uvscale.md): A scale to apply to lightmap UV attribute before sampling from the slice of the atlas. Note that lightmap textures use the Metal convention: UV (0,0) corresponds to the top-left corner of the image, while UV (1,1) corresponds to the bottom-right.
