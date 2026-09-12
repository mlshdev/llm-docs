> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlscatteringfunction/ambientocclusion](https://developer.apple.com/documentation/modelio/mdlscatteringfunction/ambientocclusion)

# ambientOcclusion (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The attenuation of ambient light due to local geometry variations on a surface.

## Declaration

```swift
var ambientOcclusion: MDLMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion (AO) describes the accessibility of a point on a surface to the surrounding radiant environment and is typically used to attenuate ambient lighting. A renderer should not use AO data should to affect direct illumination.

The default AO value is zero. Typically, you assign a texture (such as that created with the [generateAmbientOcclusionTexture(withQuality:attenuationFactor:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:)](../mdlmesh/generateambientocclusiontexture%28withquality_attenuationfactor_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md) method of a mesh) to this material property to add shading based on the shape of the mesh.

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](emission.md): The color emitted as radiance from a material’s surface.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [interfaceIndexOfRefraction](interfaceindexofrefraction.md): The index of refraction for a material itself.
- [normal](normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.

# ambientOcclusion (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The attenuation of ambient light due to local geometry variations on a surface.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) MDLMaterialProperty * ambientOcclusion;
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion (AO) describes the accessibility of a point on a surface to the surrounding radiant environment and is typically used to attenuate ambient lighting. A renderer should not use AO data should to affect direct illumination.

The default AO value is zero. Typically, you assign a texture (such as that created with the [generateAmbientOcclusionTextureWithQuality:attenuationFactor:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:](../mdlmesh/generateambientocclusiontexture%28withquality_attenuationfactor_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md) method of a mesh) to this material property to add shading based on the shape of the mesh.

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](emission.md): The color emitted as radiance from a material’s surface.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [interfaceIndexOfRefraction](interfaceindexofrefraction.md): The index of refraction for a material itself.
- [normal](normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.
