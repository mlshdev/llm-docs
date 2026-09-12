> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/materialwithmdlmaterial:](https://developer.apple.com/documentation/scenekit/scnmaterial/materialwithmdlmaterial:)

# materialWithMDLMaterial:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a material from the specified Model I/O material object.

## Declaration

```objectivec
+ (instancetype) materialWithMDLMaterial:(MDLMaterial *) mdlMaterial;
```

## Parameters

- `mdlMaterial`: A Model I/O material object.

<a id="return-value"></a>

## Return Value

A new material.

<a id="Discussion"></a>

## Discussion

The Model I/O framework provides universal support for import, export, description, and processing of several 3D asset file formats and related resources. (For details, see [Model I/O](../../modelio.md).) The [MDLMaterial](../../modelio/mdlmaterial.md) class is a generic description of surface rendering to be used in rendering 3D object, supporting a superset of the attributes described by the [SCNMaterial](../scnmaterial.md) class.

## See Also

### Creating a Material

- [material](material.md): Deprecated. Creates a new material object.
- [name](name.md): A name associated with the material.
