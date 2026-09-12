> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/semantic(forsymbol:)](https://developer.apple.com/documentation/scenekit/scnprogram/semantic(forsymbol:))

# semantic(forSymbol:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the SceneKit semantic identifiers associated with the specified GLSL vertex attribute or uniform variable.

## Declaration

```swift
func semantic(forSymbol symbol: String) -> String?
```

## Parameters

- `symbol`: The name declared in the program’s GLSL source code for a vertex attribute or uniform variable semantic.

<a id="return-value"></a>

## Return Value

A SceneKit semantic identifier. See Geometry Semantic Identifiers and Rendering Transform Keys for possible values.

## See Also

### Mapping GLSL Symbols to SceneKit Semantics

- [setSemantic(\_:forSymbol:options:)](setsemantic%28__forsymbol_options_%29.md): Associates a SceneKit semantic identifier with the specified GLSL vertex attribute or uniform variable.
- [SCNProgramMappingChannelKey](../scnprogrammappingchannelkey.md): The mapping channel to be used for a texture coordinate semantic.
- [SCNModelTransform](../scnmodeltransform.md): A 4 x 4 matrix for transforming coordinates from model space to scene (or world) space.
- [SCNModelViewProjectionTransform](../scnmodelviewprojectiontransform.md): A 4 x 4 matrix containing the concatenation of the Model, View, and Projection transformations.
- [SCNModelViewTransform](../scnmodelviewtransform.md): A 4 x 4 matrix containing the concatenation of the Model and View transformations.
- [SCNNormalTransform](../scnnormaltransform.md): A 4 x 4 matrix for transforming surface normal vectors from model space to view (or eye) space.
- [SCNProjectionTransform](../scnprojectiontransform.md): A 4 x 4 matrix for transforming coordinates from view (or eye) space to clip space.
- [SCNViewTransform](../scnviewtransform.md): A 4 x 4 matrix for transforming coordinates from scene (or world) space to view (or eye) space.

# semanticForSymbol: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns the SceneKit semantic identifiers associated with the specified GLSL vertex attribute or uniform variable.

## Declaration

```objectivec
- (NSString *) semanticForSymbol:(NSString *) symbol;
```

## Parameters

- `symbol`: The name declared in the program’s GLSL source code for a vertex attribute or uniform variable semantic.

<a id="return-value"></a>

## Return Value

A SceneKit semantic identifier. See Geometry Semantic Identifiers and Rendering Transform Keys for possible values.

## See Also

### Mapping GLSL Symbols to SceneKit Semantics

- [setSemantic:forSymbol:options:](setsemantic%28__forsymbol_options_%29.md): Associates a SceneKit semantic identifier with the specified GLSL vertex attribute or uniform variable.
- [SCNProgramMappingChannelKey](../scnprogrammappingchannelkey.md): The mapping channel to be used for a texture coordinate semantic.
- [SCNModelTransform](../scnmodeltransform.md): A 4 x 4 matrix for transforming coordinates from model space to scene (or world) space.
- [SCNModelViewProjectionTransform](../scnmodelviewprojectiontransform.md): A 4 x 4 matrix containing the concatenation of the Model, View, and Projection transformations.
- [SCNModelViewTransform](../scnmodelviewtransform.md): A 4 x 4 matrix containing the concatenation of the Model and View transformations.
- [SCNNormalTransform](../scnnormaltransform.md): A 4 x 4 matrix for transforming surface normal vectors from model space to view (or eye) space.
- [SCNProjectionTransform](../scnprojectiontransform.md): A 4 x 4 matrix for transforming coordinates from view (or eye) space to clip space.
- [SCNViewTransform](../scnviewtransform.md): A 4 x 4 matrix for transforming coordinates from scene (or world) space to view (or eye) space.
