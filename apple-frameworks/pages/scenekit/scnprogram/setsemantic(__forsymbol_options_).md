> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/setsemantic(_:forsymbol:options:)](https://developer.apple.com/documentation/scenekit/scnprogram/setsemantic(_:forsymbol:options:))

# setSemantic(\_:forSymbol:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Associates a SceneKit semantic identifier with the specified GLSL vertex attribute or uniform variable.

## Declaration

```swift
func setSemantic(_ semantic: String?, forSymbol symbol: String, options: [String : Any]? = nil)
```

## Parameters

- `semantic`: A SceneKit semantic identifier. See Geometry Semantic Identifiers and Rendering Transform Keys for possible values.
- `symbol`: The name declared in the program’s GLSL source code for the vertex attribute or uniform variable to be associated with the semantic.
- `options`: A dictionary of options affecting the semantic. See `Program Semantic Options` for applicable keys and values.

<a id="Discussion"></a>

## Discussion

Use this method to provide inputs managed by SceneKit to your GLSL program.

To use vertex attributes provided by [SCNGeometry](../scngeometry.md) objects, use the constants listed in Geometry Semantic Identifiers.

To use the coordinate transformations defined by the scene’s node hierarchy and point-of-view camera, use the constants listed in Rendering Transform Keys.

## See Also

### Mapping GLSL Symbols to SceneKit Semantics

- [SCNProgramMappingChannelKey](../scnprogrammappingchannelkey.md): The mapping channel to be used for a texture coordinate semantic.
- [semantic(forSymbol:)](semantic%28forsymbol_%29.md): Returns the SceneKit semantic identifiers associated with the specified GLSL vertex attribute or uniform variable.
- [SCNModelTransform](../scnmodeltransform.md): A 4 x 4 matrix for transforming coordinates from model space to scene (or world) space.
- [SCNModelViewProjectionTransform](../scnmodelviewprojectiontransform.md): A 4 x 4 matrix containing the concatenation of the Model, View, and Projection transformations.
- [SCNModelViewTransform](../scnmodelviewtransform.md): A 4 x 4 matrix containing the concatenation of the Model and View transformations.
- [SCNNormalTransform](../scnnormaltransform.md): A 4 x 4 matrix for transforming surface normal vectors from model space to view (or eye) space.
- [SCNProjectionTransform](../scnprojectiontransform.md): A 4 x 4 matrix for transforming coordinates from view (or eye) space to clip space.
- [SCNViewTransform](../scnviewtransform.md): A 4 x 4 matrix for transforming coordinates from scene (or world) space to view (or eye) space.

# setSemantic:forSymbol:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Associates a SceneKit semantic identifier with the specified GLSL vertex attribute or uniform variable.

## Declaration

```objectivec
- (void) setSemantic:(NSString *) semantic forSymbol:(NSString *) symbol options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `semantic`: A SceneKit semantic identifier. See Geometry Semantic Identifiers and Rendering Transform Keys for possible values.
- `symbol`: The name declared in the program’s GLSL source code for the vertex attribute or uniform variable to be associated with the semantic.
- `options`: A dictionary of options affecting the semantic. See `Program Semantic Options` for applicable keys and values.

<a id="Discussion"></a>

## Discussion

Use this method to provide inputs managed by SceneKit to your GLSL program.

To use vertex attributes provided by [SCNGeometry](../scngeometry.md) objects, use the constants listed in Geometry Semantic Identifiers.

To use the coordinate transformations defined by the scene’s node hierarchy and point-of-view camera, use the constants listed in Rendering Transform Keys.

## See Also

### Mapping GLSL Symbols to SceneKit Semantics

- [SCNProgramMappingChannelKey](../scnprogrammappingchannelkey.md): The mapping channel to be used for a texture coordinate semantic.
- [semanticForSymbol:](semantic%28forsymbol_%29.md): Returns the SceneKit semantic identifiers associated with the specified GLSL vertex attribute or uniform variable.
- [SCNModelTransform](../scnmodeltransform.md): A 4 x 4 matrix for transforming coordinates from model space to scene (or world) space.
- [SCNModelViewProjectionTransform](../scnmodelviewprojectiontransform.md): A 4 x 4 matrix containing the concatenation of the Model, View, and Projection transformations.
- [SCNModelViewTransform](../scnmodelviewtransform.md): A 4 x 4 matrix containing the concatenation of the Model and View transformations.
- [SCNNormalTransform](../scnnormaltransform.md): A 4 x 4 matrix for transforming surface normal vectors from model space to view (or eye) space.
- [SCNProjectionTransform](../scnprojectiontransform.md): A 4 x 4 matrix for transforming coordinates from view (or eye) space to clip space.
- [SCNViewTransform](../scnviewtransform.md): A 4 x 4 matrix for transforming coordinates from scene (or world) space to view (or eye) space.
