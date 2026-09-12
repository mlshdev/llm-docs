> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lightmapresource/init(perentitydata:)](https://developer.apple.com/documentation/realitykit/lightmapresource/init(perentitydata:))

# init(perEntityData:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Initializes the resource with the given entity descriptors, but does not specify any atlas textures. Skips validation of atlas texture indices and slices within bake descriptors. This is helpful for providing a SurfaceExtractor with information about how entities are laid out in the lightmap without needing to provide any texture data along with it.

## Declaration

```swift
convenience init(perEntityData: [LightmapResource.EntityLightmapDescriptor]) throws
```
