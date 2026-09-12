> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/generatelightmaptexture(withtexturesize:lightstoconsider:objectstoconsider:vertexattributenamed:materialpropertynamed:)](https://developer.apple.com/documentation/modelio/mdlmesh/generatelightmaptexture(withtexturesize:lightstoconsider:objectstoconsider:vertexattributenamed:materialpropertynamed:))

# generateLightMapTexture(withTextureSize:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Calculates static lighting information for the mesh and saves it in the mesh as a material property texture of the specified size.

## Declaration

```swift
func generateLightMapTexture(withTextureSize textureSize: vector_int2, lightsToConsider: [MDLLight], objectsToConsider: [MDLObject], vertexAttributeNamed vertexAttributeName: String, materialPropertyNamed materialPropertyName: String) -> Bool
```

## Parameters

- `textureSize`: The size of texture image to generate.
- `lightsToConsider`: An array of lights that should affect the mesh.
- `objectsToConsider`: An array of other objects in the scene that should affect static lighting for the mesh.
- `vertexAttributeName`: The name of the vertex attribute for storing generated texture coordinate data.
- `materialPropertyName`: The name of the material for storing the generated texture image.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if light map generation succeeded; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A light map contains, for each point on a surface, information about how light sources in a scene affect the shading of that surface. Because many of the lighting effects in a scene are static—that is, the positions of lights relative to the surfaces they illuminate do not change over time—you can achieve high-fidelity lighting effects with little render-time performance cost by using this method to precalculate (or “bake”) light information into a mesh. You can then use the resulting information in shading to produce a more realistic render.

This method saves light map data as a texture image and associates that image with the mesh through the material property specified in the `materialPropertyName` parameter. To map the texture onto the mesh’s surface, this method also generates texture coordinates and writes them in the vertex attribute specified in the `vertexAttributeName` parameter. If the mesh already contains that attribute, this method overwrites the contents of the corresponding vertex buffer. If the mesh does not contain that attribute, this method creates a new attribute and updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object accordingly.

The `bakeQuality` parameter controls the fidelity and performance of the lighting calculation process and its output based on texture size. To control quality without specifying texture size, use the [generateLightMapTexture(withQuality:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:)](generatelightmaptexture%28withquality_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md) method.

## See Also

### Generating Light Map Data

- [generateLightMapTexture(withQuality:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:)](generatelightmaptexture%28withquality_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture.
- [generateLightMapVertexColorsWithLights(toConsider:objectsToConsider:vertexAttributeNamed:)](generatelightmapvertexcolorswithlights%28toconsider_objectstoconsider_vertexattributenamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a vertex color attribute.

# generateLightMapTextureWithTextureSize:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Calculates static lighting information for the mesh and saves it in the mesh as a material property texture of the specified size.

## Declaration

```objectivec
- (BOOL) generateLightMapTextureWithTextureSize:(vector_int2) textureSize lightsToConsider:(NSArray<MDLLight *> *) lightsToConsider objectsToConsider:(NSArray<MDLObject *> *) objectsToConsider vertexAttributeNamed:(NSString *) vertexAttributeName materialPropertyNamed:(NSString *) materialPropertyName;
```

## Parameters

- `textureSize`: The size of texture image to generate.
- `lightsToConsider`: An array of lights that should affect the mesh.
- `objectsToConsider`: An array of other objects in the scene that should affect static lighting for the mesh.
- `vertexAttributeName`: The name of the vertex attribute for storing generated texture coordinate data.
- `materialPropertyName`: The name of the material for storing the generated texture image.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if light map generation succeeded; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A light map contains, for each point on a surface, information about how light sources in a scene affect the shading of that surface. Because many of the lighting effects in a scene are static—that is, the positions of lights relative to the surfaces they illuminate do not change over time—you can achieve high-fidelity lighting effects with little render-time performance cost by using this method to precalculate (or “bake”) light information into a mesh. You can then use the resulting information in shading to produce a more realistic render.

This method saves light map data as a texture image and associates that image with the mesh through the material property specified in the `materialPropertyName` parameter. To map the texture onto the mesh’s surface, this method also generates texture coordinates and writes them in the vertex attribute specified in the `vertexAttributeName` parameter. If the mesh already contains that attribute, this method overwrites the contents of the corresponding vertex buffer. If the mesh does not contain that attribute, this method creates a new attribute and updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object accordingly.

The `bakeQuality` parameter controls the fidelity and performance of the lighting calculation process and its output based on texture size. To control quality without specifying texture size, use the [generateLightMapTextureWithQuality:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:](generatelightmaptexture%28withquality_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md) method.

## See Also

### Generating Light Map Data

- [generateLightMapTextureWithQuality:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:](generatelightmaptexture%28withquality_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture.
- [generateLightMapVertexColorsWithLightsToConsider:objectsToConsider:vertexAttributeNamed:](generatelightmapvertexcolorswithlights%28toconsider_objectstoconsider_vertexattributenamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a vertex color attribute.
