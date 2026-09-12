> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/scenewithmdlasset:](https://developer.apple.com/documentation/scenekit/scnscene/scenewithmdlasset:)

# sceneWithMDLAsset:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a scene from the specified Model I/O asset.

## Declaration

```objectivec
+ (instancetype) sceneWithMDLAsset:(MDLAsset *) mdlAsset;
```

## Parameters

- `mdlAsset`: A Model I/O asset object.

<a id="return-value"></a>

## Return Value

A new scene object.

<a id="Discussion"></a>

## Discussion

The Model I/O framework provides universal support for import, export, description, and processing of several 3D asset file formats and related resources. (For details, see [Model I/O](../../modelio.md).) The [MDLAsset](../../modelio/mdlasset.md) class is a generic container for 3D objects. Importing a Model I/O asset creates a SceneKit scene containing nodes, geometries, materials, cameras, and lights corresponding to the objects stored in the asset.
