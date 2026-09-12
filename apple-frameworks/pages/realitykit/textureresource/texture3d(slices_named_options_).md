> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/texture3d(slices:named:options:)](https://developer.apple.com/documentation/realitykit/textureresource/texture3d(slices:named:options:))

# texture3D(slices:named:options:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Asynchronously creates a 3D texture by generating it from images.

## Declaration

```swift
@MainActor @preconcurrency static func texture3D(slices: [CGImage], named resourceName: String? = nil, options: TextureResource.CreateOptions) async throws -> TextureResource
```

## Parameters

- `slices`: The source images, one per depth index. All images need to be square, and of equal size and format.
- `resourceName`: A unique name for syncing the texture resource across the network. The name is empty if you don’t include one.
- `options`: A configuration for generating the texture.

<a id="discussion"></a>

## Discussion

RealityKit creates a [MTLTextureType.type3D](../../metal/mtltexturetype/type3d.md) texture with `depth == slices.count` from an array of images.

You can assign the resulting texture to a material you create in Reality Composer Pro that requires a 3D texture.

```swift
// Create a 3D texture from image slices.
let texture3D = try await TextureResource.texture3D(
    slices: [image0, image1, image2, image3],
    options: TextureResource.CreateOptions(semantic: .color))

// Assign the 3D texture to a compatible shader graph material parameter.
var material = try await ShaderGraphMaterial(
    named: "/Root/Alien/MaterialWith3DTexture", from: url)

try material.setParameter(
name: "input3DTexture",
value: .textureResource(texture3D))
```
