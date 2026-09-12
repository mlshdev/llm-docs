> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/generatelightmapvertexcolorswithlights(toconsider:objectstoconsider:vertexattributenamed:)](https://developer.apple.com/documentation/modelio/mdlmesh/generatelightmapvertexcolorswithlights(toconsider:objectstoconsider:vertexattributenamed:))

# generateLightMapVertexColorsWithLights(toConsider:objectsToConsider:vertexAttributeNamed:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Calculates static lighting information for the mesh and saves it in the mesh as a vertex color attribute.

## Declaration

```swift
func generateLightMapVertexColorsWithLights(toConsider lightsToConsider: [MDLLight], objectsToConsider: [MDLObject], vertexAttributeNamed vertexAttributeName: String) -> Bool
```

## Parameters

- `lightsToConsider`: An array of lights that should affect the mesh.
- `objectsToConsider`: An array of other objects in the scene that should affect static lighting for the mesh.
- `vertexAttributeName`: The name of the vertex attribute for storing generated vertex color data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if light map generation succeeded; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A light map contains, for each point on a surface, information about how light sources in a scene affect the shading of that surface. Because many of the lighting effects in a scene are static—that is, the positions of lights relative to the surfaces they illuminate do not change over time—you can achieve high-fidelity lighting effects with little render-time performance cost by using this method to precalculate (or “bake”) light information into a mesh. You can then use the resulting information in shading to produce a more realistic render.

This method saves light map data as per-vertex colors. Using vertex colors to modulate shading can result in similar results without the texture memory and vertex attribute overhead of a texture map, but the fidelity of this effect depends on the vertex complexity of the mesh. Vertex colors are saved in the vertex attribute specified in the `vertexAttributeName` parameter. If the mesh already contains that attribute, this method overwrites the contents of the corresponding vertex buffer. If the mesh does not contain that attribute, this method creates a new attribute and updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object accordingly.

## See Also

### Generating Light Map Data

- [generateLightMapTexture(withQuality:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:)](generatelightmaptexture%28withquality_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture.
- [generateLightMapTexture(withTextureSize:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:)](generatelightmaptexture%28withtexturesize_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture of the specified size.

# generateLightMapVertexColorsWithLightsToConsider:objectsToConsider:vertexAttributeNamed: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Calculates static lighting information for the mesh and saves it in the mesh as a vertex color attribute.

## Declaration

```objectivec
- (BOOL) generateLightMapVertexColorsWithLightsToConsider:(NSArray<MDLLight *> *) lightsToConsider objectsToConsider:(NSArray<MDLObject *> *) objectsToConsider vertexAttributeNamed:(NSString *) vertexAttributeName;
```

## Parameters

- `lightsToConsider`: An array of lights that should affect the mesh.
- `objectsToConsider`: An array of other objects in the scene that should affect static lighting for the mesh.
- `vertexAttributeName`: The name of the vertex attribute for storing generated vertex color data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if light map generation succeeded; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A light map contains, for each point on a surface, information about how light sources in a scene affect the shading of that surface. Because many of the lighting effects in a scene are static—that is, the positions of lights relative to the surfaces they illuminate do not change over time—you can achieve high-fidelity lighting effects with little render-time performance cost by using this method to precalculate (or “bake”) light information into a mesh. You can then use the resulting information in shading to produce a more realistic render.

This method saves light map data as per-vertex colors. Using vertex colors to modulate shading can result in similar results without the texture memory and vertex attribute overhead of a texture map, but the fidelity of this effect depends on the vertex complexity of the mesh. Vertex colors are saved in the vertex attribute specified in the `vertexAttributeName` parameter. If the mesh already contains that attribute, this method overwrites the contents of the corresponding vertex buffer. If the mesh does not contain that attribute, this method creates a new attribute and updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object accordingly.

## See Also

### Generating Light Map Data

- [generateLightMapTextureWithQuality:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:](generatelightmaptexture%28withquality_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture.
- [generateLightMapTextureWithTextureSize:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:](generatelightmaptexture%28withtexturesize_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture of the specified size.
