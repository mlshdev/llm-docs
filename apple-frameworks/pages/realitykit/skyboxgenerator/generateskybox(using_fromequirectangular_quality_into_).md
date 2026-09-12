> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skyboxgenerator/generateskybox(using:fromequirectangular:quality:into:)](https://developer.apple.com/documentation/realitykit/skyboxgenerator/generateskybox(using:fromequirectangular:quality:into:))

# generateSkybox(using:fromEquirectangular:quality:into:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds commands for generating a cube from an equirectangular image, including generating mipmaps.

## Declaration

```swift
func generateSkybox(using commandBuffer: any MTLCommandBuffer, fromEquirectangular texture: any MTLTexture, quality: TextureSamplingQuality = .low, into destination: any MTLTexture) throws
```

## Parameters

- `commandBuffer`: The command buffer to dispatch GPU work to generate cubemap
- `texture`: The source image equirectangular texture, also known as “latitude longitude” texture.
- `quality`: The sampling quality the method applies as it generates the cube texture.
- `destination`: The destination cube texture. Use [makeDescriptor(fromEquirectangular:)](makedescriptor%28fromequirectangular_%29.md) to get a recommended descriptor for creating the destination texture.

<a id="discussion"></a>

## Discussion

> **Throws**

> If `texture` is not a 2D Metal texture, if `destination` is not a cube texture, or if `destination`’s pixel format does not support shader writes on this device.

## See Also

### Generating a skybox

- [makeDescriptor(fromEquirectangular:)](makedescriptor%28fromequirectangular_%29.md): Returns a recommended skybox cube texture descriptor (for [generateSkybox(using:fromEquirectangular:quality:into:)](generateskybox%28using_fromequirectangular_quality_into_%29.md)).
