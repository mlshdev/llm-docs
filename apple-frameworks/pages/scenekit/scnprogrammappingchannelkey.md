> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogrammappingchannelkey](https://developer.apple.com/documentation/scenekit/scnprogrammappingchannelkey)

# SCNProgramMappingChannelKey (Swift)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The mapping channel to be used for a texture coordinate semantic.

## Declaration

```swift
let SCNProgramMappingChannelKey: String
```

<a id="Discussion"></a>

## Discussion

This key can be used with the `options` dictionary for the [setSemantic(\_:forSymbol:options:)](scnprogram/setsemantic%28__forsymbol_options_%29.md) method, and applies only to the [texcoord](scngeometrysource/semantic-swift.struct/texcoord.md) semantic. Its value is an [NSNumber](../foundation/nsnumber.md) object containing an unsigned integer value.

A geometry can provide, and a shader program can use, more than one source of texture coordinates for each vertex. Use this key to specify which geometry source should provide data for each texture sampler vertex attribute declared in a shader program. The mapping channel for a geometry source corresponds to its index in the array returned by calling the [sources(for:)](scngeometry/sources%28for_%29.md) method.

## See Also

### Mapping GLSL Symbols to SceneKit Semantics

- [setSemantic(\_:forSymbol:options:)](scnprogram/setsemantic%28__forsymbol_options_%29.md): Associates a SceneKit semantic identifier with the specified GLSL vertex attribute or uniform variable.
- [semantic(forSymbol:)](scnprogram/semantic%28forsymbol_%29.md): Returns the SceneKit semantic identifiers associated with the specified GLSL vertex attribute or uniform variable.
- [SCNModelTransform](scnmodeltransform.md): A 4 x 4 matrix for transforming coordinates from model space to scene (or world) space.
- [SCNModelViewProjectionTransform](scnmodelviewprojectiontransform.md): A 4 x 4 matrix containing the concatenation of the Model, View, and Projection transformations.
- [SCNModelViewTransform](scnmodelviewtransform.md): A 4 x 4 matrix containing the concatenation of the Model and View transformations.
- [SCNNormalTransform](scnnormaltransform.md): A 4 x 4 matrix for transforming surface normal vectors from model space to view (or eye) space.
- [SCNProjectionTransform](scnprojectiontransform.md): A 4 x 4 matrix for transforming coordinates from view (or eye) space to clip space.
- [SCNViewTransform](scnviewtransform.md): A 4 x 4 matrix for transforming coordinates from scene (or world) space to view (or eye) space.

# SCNProgramMappingChannelKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The mapping channel to be used for a texture coordinate semantic.

## Declaration

```objectivec
extern NSString * const SCNProgramMappingChannelKey;
```

<a id="Discussion"></a>

## Discussion

This key can be used with the `options` dictionary for the [setSemantic:forSymbol:options:](scnprogram/setsemantic%28__forsymbol_options_%29.md) method, and applies only to the [SCNGeometrySourceSemanticTexcoord](scngeometrysource/semantic-swift.struct/texcoord.md) semantic. Its value is an [NSNumber](../foundation/nsnumber.md) object containing an unsigned integer value.

A geometry can provide, and a shader program can use, more than one source of texture coordinates for each vertex. Use this key to specify which geometry source should provide data for each texture sampler vertex attribute declared in a shader program. The mapping channel for a geometry source corresponds to its index in the array returned by calling the [geometrySourcesForSemantic:](scngeometry/sources%28for_%29.md) method.

## See Also

### Mapping GLSL Symbols to SceneKit Semantics

- [setSemantic:forSymbol:options:](scnprogram/setsemantic%28__forsymbol_options_%29.md): Associates a SceneKit semantic identifier with the specified GLSL vertex attribute or uniform variable.
- [semanticForSymbol:](scnprogram/semantic%28forsymbol_%29.md): Returns the SceneKit semantic identifiers associated with the specified GLSL vertex attribute or uniform variable.
- [SCNModelTransform](scnmodeltransform.md): A 4 x 4 matrix for transforming coordinates from model space to scene (or world) space.
- [SCNModelViewProjectionTransform](scnmodelviewprojectiontransform.md): A 4 x 4 matrix containing the concatenation of the Model, View, and Projection transformations.
- [SCNModelViewTransform](scnmodelviewtransform.md): A 4 x 4 matrix containing the concatenation of the Model and View transformations.
- [SCNNormalTransform](scnnormaltransform.md): A 4 x 4 matrix for transforming surface normal vectors from model space to view (or eye) space.
- [SCNProjectionTransform](scnprojectiontransform.md): A 4 x 4 matrix for transforming coordinates from view (or eye) space to clip space.
- [SCNViewTransform](scnviewtransform.md): A 4 x 4 matrix for transforming coordinates from scene (or world) space to view (or eye) space.
