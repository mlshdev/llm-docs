> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/geometrywithmdlmesh:](https://developer.apple.com/documentation/scenekit/scngeometry/geometrywithmdlmesh:)

# geometryWithMDLMesh:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a geometry from the specified Model I/O mesh object.

## Declaration

```objectivec
+ (instancetype) geometryWithMDLMesh:(MDLMesh *) mdlMesh;
```

## Parameters

- `mdlMesh`: A Model I/O mesh object.

<a id="return-value"></a>

## Return Value

A new geometry object.

<a id="Discussion"></a>

## Discussion

The Model I/O framework provides universal support for import, export, description, and processing of several 3D asset file formats and related resources. (For details, see [Model I/O](../../modelio.md).) The [MDLMesh](../../modelio/mdlmesh.md) class is a generic description of a 3D object, with vertex buffers corresponding to SceneKit geometry sources, and submeshes corresponding to SceneKit geometry elements. Because Model I/O associates materials with a mesh through its submeshes, importing a [MDLMesh](../../modelio/mdlmesh.md) object imports the materials assigned to its submeshes to the corresponding locations in the SceneKit geometry’s [materials](materials.md) array.

## See Also

### Creating a Geometry Object

- [geometryWithSources:elements:](init%28sources_elements_%29.md): Creates a new geometry built from the specified geometry sources and elements.
- [geometry](geometry.md): Deprecated. Creates a new geometry object with no content (or default content).
