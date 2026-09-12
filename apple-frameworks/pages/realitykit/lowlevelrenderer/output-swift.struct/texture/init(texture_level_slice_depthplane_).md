> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct/texture/init(texture:level:slice:depthplane:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/texture/init(texture:level:slice:depthplane:))

# init(texture:level:slice:depthPlane:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a texture reference with the given texture, mip level, slice, and depth plane.

## Declaration

```swift
init(texture: any MTLTexture, level: Int = 0, slice: Int = 0, depthPlane: Int = 0)
```

## Parameters

- `texture`: The underlying Metal texture.
- `level`: The mipmap level of the texture to use. Defaults to `0`.
- `slice`: The slice of the texture to use. Defaults to `0`.
- `depthPlane`: The depth plane of the texture to use. Defaults to `0`.
