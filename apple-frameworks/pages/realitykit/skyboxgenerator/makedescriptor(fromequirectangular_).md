> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skyboxgenerator/makedescriptor(fromequirectangular:)](https://developer.apple.com/documentation/realitykit/skyboxgenerator/makedescriptor(fromequirectangular:))

# makeDescriptor(fromEquirectangular:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a recommended skybox cube texture descriptor (for [generateSkybox(using:fromEquirectangular:quality:into:)](generateskybox%28using_fromequirectangular_quality_into_%29.md)).

## Declaration

```swift
func makeDescriptor(fromEquirectangular texture: any MTLTexture) throws -> MTLTextureDescriptor
```

<a id="discussion"></a>

## Discussion

The dimensions of the cubemap are chosen so that the resolution of the input texture is approximately preserved. This method allocates mipmap by default, as mipmaps are needed by [generateDiffuse(using:fromSkyboxCube:quality:into:)](../imagebasedlighttexturegenerator/generatediffuse%28using_fromskyboxcube_quality_into_%29.md) and [generateSpecular(using:fromSkyboxCube:quality:into:)](../imagebasedlighttexturegenerator/generatespecular%28using_fromskyboxcube_quality_into_%29.md).

> **Throws**

> If `texture` is not a 2D Metal texture.

## See Also

### Generating a skybox

- [generateSkybox(using:fromEquirectangular:quality:into:)](generateskybox%28using_fromequirectangular_quality_into_%29.md): Adds commands for generating a cube from an equirectangular image, including generating mipmaps.
