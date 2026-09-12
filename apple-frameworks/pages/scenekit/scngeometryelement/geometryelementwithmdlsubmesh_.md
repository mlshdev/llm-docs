> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/geometryelementwithmdlsubmesh:](https://developer.apple.com/documentation/scenekit/scngeometryelement/geometryelementwithmdlsubmesh:)

# geometryElementWithMDLSubmesh:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a geometry element from the specified Model I/O submesh object.

## Declaration

```objectivec
+ (instancetype) geometryElementWithMDLSubmesh:(MDLSubmesh *) mdlSubMesh;
```

## Parameters

- `mdlSubMesh`: A Model I/O submesh object.

<a id="return-value"></a>

## Return Value

A new geometry element.

<a id="Discussion"></a>

## Discussion

The Model I/O framework provides universal support for import, export, description, and processing of several 3D asset file formats and related resources. (For details, see [Model I/O](../../modelio.md).) The [MDLSubmesh](../../modelio/mdlsubmesh.md) class is a generic description of an index buffer to be used in rendering a 3D object, along with an assigned material.

In SceneKit, materials are assigned to a geometry rather than to its elements, so importing a submesh as a geometry element does not import its material assignment. To import a Model I/O mesh along with its materials, use the [SCNGeometry](../scngeometry.md) [geometryWithMDLMesh:](../scngeometry/geometrywithmdlmesh_.md) method.

## See Also

### Creating a Geometry Element

- [geometryElementWithData:primitiveType:primitiveCount:bytesPerIndex:](init%28data_primitivetype_primitivecount_bytesperindex_%29.md): Creates a geometry element from the specified data and options.
