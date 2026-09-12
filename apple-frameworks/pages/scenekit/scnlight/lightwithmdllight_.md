> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/lightwithmdllight:](https://developer.apple.com/documentation/scenekit/scnlight/lightwithmdllight:)

# lightWithMDLLight:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a light from the specified Model I/O light object.

## Declaration

```objectivec
+ (instancetype) lightWithMDLLight:(MDLLight *) mdlLight;
```

## Parameters

- `mdlLight`: A Model I/O light object.

<a id="return-value"></a>

## Return Value

A new light object.

<a id="Discussion"></a>

## Discussion

The Model I/O framework provides universal support for import, export, description, and processing of several 3D asset file formats and related resources. (For details, see [Model I/O](../../modelio.md).) The [MDLLight](../../modelio/mdllight.md) class is a generic description of a light source in a scene, supporting a superset of the attributes described by the [SCNLight](../scnlight.md) class.

## See Also

### Creating a Light

- [light](light.md): Deprecated. Creates a new light object.
