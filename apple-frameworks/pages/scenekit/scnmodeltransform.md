> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmodeltransform](https://developer.apple.com/documentation/scenekit/scnmodeltransform)

# SCNModelTransform (Swift)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A 4 x 4 matrix for transforming coordinates from model space to scene (or world) space.

## Declaration

```swift
let SCNModelTransform: String
```

## See Also

### Mapping GLSL Symbols to SceneKit Semantics

- [setSemantic(\_:forSymbol:options:)](scnprogram/setsemantic%28__forsymbol_options_%29.md): Associates a SceneKit semantic identifier with the specified GLSL vertex attribute or uniform variable.
- [SCNProgramMappingChannelKey](scnprogrammappingchannelkey.md): The mapping channel to be used for a texture coordinate semantic.
- [semantic(forSymbol:)](scnprogram/semantic%28forsymbol_%29.md): Returns the SceneKit semantic identifiers associated with the specified GLSL vertex attribute or uniform variable.
- [SCNModelViewProjectionTransform](scnmodelviewprojectiontransform.md): A 4 x 4 matrix containing the concatenation of the Model, View, and Projection transformations.
- [SCNModelViewTransform](scnmodelviewtransform.md): A 4 x 4 matrix containing the concatenation of the Model and View transformations.
- [SCNNormalTransform](scnnormaltransform.md): A 4 x 4 matrix for transforming surface normal vectors from model space to view (or eye) space.
- [SCNProjectionTransform](scnprojectiontransform.md): A 4 x 4 matrix for transforming coordinates from view (or eye) space to clip space.
- [SCNViewTransform](scnviewtransform.md): A 4 x 4 matrix for transforming coordinates from scene (or world) space to view (or eye) space.

# SCNModelTransform (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 4 x 4 matrix for transforming coordinates from model space to scene (or world) space.

## Declaration

```objectivec
extern NSString * const SCNModelTransform;
```

## See Also

### Mapping GLSL Symbols to SceneKit Semantics

- [setSemantic:forSymbol:options:](scnprogram/setsemantic%28__forsymbol_options_%29.md): Associates a SceneKit semantic identifier with the specified GLSL vertex attribute or uniform variable.
- [SCNProgramMappingChannelKey](scnprogrammappingchannelkey.md): The mapping channel to be used for a texture coordinate semantic.
- [semanticForSymbol:](scnprogram/semantic%28forsymbol_%29.md): Returns the SceneKit semantic identifiers associated with the specified GLSL vertex attribute or uniform variable.
- [SCNModelViewProjectionTransform](scnmodelviewprojectiontransform.md): A 4 x 4 matrix containing the concatenation of the Model, View, and Projection transformations.
- [SCNModelViewTransform](scnmodelviewtransform.md): A 4 x 4 matrix containing the concatenation of the Model and View transformations.
- [SCNNormalTransform](scnnormaltransform.md): A 4 x 4 matrix for transforming surface normal vectors from model space to view (or eye) space.
- [SCNProjectionTransform](scnprojectiontransform.md): A 4 x 4 matrix for transforming coordinates from view (or eye) space to clip space.
- [SCNViewTransform](scnviewtransform.md): A 4 x 4 matrix for transforming coordinates from scene (or world) space to view (or eye) space.
