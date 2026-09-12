> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makeimagebasedlightingfunction()](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makeimagebasedlightingfunction())

# makeImageBasedLightingFunction()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a lighting function using image-based lighting (IBL).

## Declaration

```swift
final func makeImageBasedLightingFunction() -> sending LowLevelMaterialResource.LightingFunction
```

<a id="return-value"></a>

## Return Value

An image-based [LowLevelMaterialResource.LightingFunction](../lowlevelmaterialresource/lightingfunction.md).

<a id="discussion"></a>

## Discussion

The lighting function expects two cubemap textures bound via its corresponding [LowLevelArgumentTable](../lowlevelargumenttable.md): one for diffuse and one for specular. Prepare these using [ImageBasedLightTextureGenerator.generateDiffuse(using:fromSkyboxCube:quality:into:)](https://developer.apple.com/documentation/realitykit/imagebasedlighttexturegenerator/generatediffuse%28using:fromskyboxcube:quality:into:%29) and [ImageBasedLightTextureGenerator.generateSpecular(using:fromSkyboxCube:quality:into:)](https://developer.apple.com/documentation/realitykit/imagebasedlighttexturegenerator/generatespecular%28using:fromskyboxcube:quality:into:%29).

## See Also

### Creating lighting functions

- [makeUnlitLightingFunction()](makeunlitlightingfunction%28%29.md): Returns an unlit lighting function that emits the surface emissive color directly, without any lighting calculations.
