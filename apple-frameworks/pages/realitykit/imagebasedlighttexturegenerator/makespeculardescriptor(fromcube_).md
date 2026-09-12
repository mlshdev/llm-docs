> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagebasedlighttexturegenerator/makespeculardescriptor(fromcube:)](https://developer.apple.com/documentation/realitykit/imagebasedlighttexturegenerator/makespeculardescriptor(fromcube:))

# makeSpecularDescriptor(fromCube:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a recommended image based light specular cube texture descriptor (for [generateSpecular(using:fromSkyboxCube:quality:into:)](generatespecular%28using_fromskyboxcube_quality_into_%29.md)).

## Declaration

```swift
func makeSpecularDescriptor(fromCube texture: any MTLTexture) throws -> MTLTextureDescriptor
```

<a id="discussion"></a>

## Discussion

> **Throws**

> If `texture` is not a cube texture.

## See Also

### Describing output textures

- [makeDiffuseDescriptor(fromCube:)](makediffusedescriptor%28fromcube_%29.md): Returns a recommended image based light diffuse cube texture descriptor (for [generateDiffuse(using:fromSkyboxCube:quality:into:)](generatediffuse%28using_fromskyboxcube_quality_into_%29.md)).
