> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagebasedlighttexturegenerator/generatespecular(using:fromskyboxcube:quality:into:)](https://developer.apple.com/documentation/realitykit/imagebasedlighttexturegenerator/generatespecular(using:fromskyboxcube:quality:into:))

# generateSpecular(using:fromSkyboxCube:quality:into:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds commands for generating an image based light specular texture from a skybox cube.

## Declaration

```swift
func generateSpecular(using commandBuffer: any MTLCommandBuffer, fromSkyboxCube texture: any MTLTexture, quality: TextureSamplingQuality = .low, into destination: any MTLTexture) throws
```

## Parameters

- `commandBuffer`: The command buffer to dispatch GPU work to generate Image Based Light Specular
- `texture`: The source image cube skybox texture, which must have mipmaps.
- `quality`: The sampling quality the method applies as it generates the cube texture.
- `destination`: The destination cube texture. Use [makeSpecularDescriptor(fromCube:)](makespeculardescriptor%28fromcube_%29.md) to get a recommended descriptor for creating the destination texture.

<a id="discussion"></a>

## Discussion

> **Throws**

> If `destination`’s pixel format does not support shader writes on this device, or if a per-mip texture view cannot be created.

## See Also

### Generating IBL textures

- [generateDiffuse(using:fromSkyboxCube:quality:into:)](generatediffuse%28using_fromskyboxcube_quality_into_%29.md): Adds commands for generating an image based light diffuse texture from a skybox cube.
