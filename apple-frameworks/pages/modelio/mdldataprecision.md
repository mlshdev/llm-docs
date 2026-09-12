> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdldataprecision](https://developer.apple.com/documentation/modelio/mdldataprecision)

# MDLDataPrecision (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
enum MDLDataPrecision
```

## Topics

### Enumeration Cases

- [MDLDataPrecision.double](mdldataprecision/double.md)
- [MDLDataPrecision.float](mdldataprecision/float.md)
- [MDLDataPrecision.undefined](mdldataprecision/undefined.md)

### Initializers

- [init(rawValue:)](mdldataprecision/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [MDLCameraProjection](mdlcameraprojection.md): Options for camera projection styles, used by the [projection](mdlcamera/projection.md) property.
- [MDLGeometryType](mdlgeometrytype.md): Types of geometric primitives for rendering a submesh, used by the [geometryType](mdlsubmesh/geometrytype.md) property.
- [MDLIndexBitDepth](mdlindexbitdepth.md): Options for the size of integer data in a submesh’s index buffer, used by the [indexType](mdlsubmesh/indextype.md) property.
- [MDLLightType](mdllighttype.md): Options for the shape and style of illumination provided by a light, used by the [lightType](mdllight/lighttype.md) property.
- [MDLMaterialFace](mdlmaterialface.md)
- [MDLMaterialMipMapFilterMode](mdlmaterialmipmapfiltermode.md): Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.
- [MDLMaterialPropertyType](mdlmaterialpropertytype.md): Options for the data type of a material property, used by the [type](mdlmaterialproperty/type.md) property.
- [MDLMaterialSemantic](mdlmaterialsemantic.md): Options for the semantic use of a material property’s value in rendering a particular surface appearance; used by the [semantic](mdlmaterialproperty/semantic.md) property.
- [MDLMaterialTextureFilterMode](mdlmaterialtexturefiltermode.md): Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.
- [MDLMaterialTextureWrapMode](mdlmaterialtexturewrapmode.md): Modes for sampling textures at coordinates outside the texture bounds, used by the [sWrapMode](mdltexturefilter/swrapmode.md), [tWrapMode](mdltexturefilter/twrapmode.md), and [rWrapMode](mdltexturefilter/rwrapmode.md) properties.
- [MDLMeshBufferType](mdlmeshbuffertype.md): Options for the content of a mesh buffer, used by the [type](mdlmeshbuffer/type.md) property and by [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) methods for creating buffers.
- [MDLProbePlacement](mdlprobeplacement.md): Options affecting automatic placement of light probes in a scene, used with the [placeLightProbes(withDensity:heuristic:using:)](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method.
- [MDLTextureChannelEncoding](mdltexturechannelencoding.md): Options for the data size and type of texel channel values, used by the [channelEncoding](mdltexture/channelencoding.md) property.
- [MDLVertexFormat](mdlvertexformat.md): Descriptions of the data size and layout for a vertex attribute, used by the [format](mdlvertexattribute/format.md) property.
- [MDLAnimatedValueInterpolation](mdlanimatedvalueinterpolation.md)

# MDLDataPrecision (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
enum MDLDataPrecision : NSUInteger;
```

## Topics

### Enumeration Cases

- [MDLDataPrecisionDouble](mdldataprecision/double.md)
- [MDLDataPrecisionFloat](mdldataprecision/float.md)
- [MDLDataPrecisionUndefined](mdldataprecision/undefined.md)

## See Also

### Enumerations

- [MDLCameraProjection](mdlcameraprojection.md): Options for camera projection styles, used by the [projection](mdlcamera/projection.md) property.
- [MDLGeometryType](mdlgeometrytype.md): Types of geometric primitives for rendering a submesh, used by the [geometryType](mdlsubmesh/geometrytype.md) property.
- [MDLIndexBitDepth](mdlindexbitdepth.md): Options for the size of integer data in a submesh’s index buffer, used by the [indexType](mdlsubmesh/indextype.md) property.
- [MDLLightType](mdllighttype.md): Options for the shape and style of illumination provided by a light, used by the [lightType](mdllight/lighttype.md) property.
- [MDLMaterialFace](mdlmaterialface.md)
- [MDLMaterialMipMapFilterMode](mdlmaterialmipmapfiltermode.md): Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.
- [MDLMaterialPropertyType](mdlmaterialpropertytype.md): Options for the data type of a material property, used by the [type](mdlmaterialproperty/type.md) property.
- [MDLMaterialSemantic](mdlmaterialsemantic.md): Options for the semantic use of a material property’s value in rendering a particular surface appearance; used by the [semantic](mdlmaterialproperty/semantic.md) property.
- [MDLMaterialTextureFilterMode](mdlmaterialtexturefiltermode.md): Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.
- [MDLMaterialTextureWrapMode](mdlmaterialtexturewrapmode.md): Modes for sampling textures at coordinates outside the texture bounds, used by the [sWrapMode](mdltexturefilter/swrapmode.md), [tWrapMode](mdltexturefilter/twrapmode.md), and [rWrapMode](mdltexturefilter/rwrapmode.md) properties.
- [MDLMeshBufferType](mdlmeshbuffertype.md): Options for the content of a mesh buffer, used by the [type](mdlmeshbuffer/type.md) property and by [MDLMeshBufferAllocator](mdlmeshbufferallocator.md) methods for creating buffers.
- [MDLProbePlacement](mdlprobeplacement.md): Options affecting automatic placement of light probes in a scene, used with the [placeLightProbesWithDensity:heuristic:usingIrradianceDataSource:](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method.
- [MDLTextureChannelEncoding](mdltexturechannelencoding.md): Options for the data size and type of texel channel values, used by the [channelEncoding](mdltexture/channelencoding.md) property.
- [MDLVertexFormat](mdlvertexformat.md): Descriptions of the data size and layout for a vertex attribute, used by the [format](mdlvertexattribute/format.md) property.
- [MDLAnimatedValueInterpolation](mdlanimatedvalueinterpolation.md)
