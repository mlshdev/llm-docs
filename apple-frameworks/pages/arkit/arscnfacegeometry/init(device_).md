> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnfacegeometry/init(device:)](https://developer.apple.com/documentation/arkit/arscnfacegeometry/init(device:))

# init(device:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Creates a SceneKit face geometry for rendering with the specified Metal device object.

## Declaration

```swift
convenience init?(device: any MTLDevice)
```

## Parameters

- `device`: The Metal device to use for rendering the geometry.

<a id="return-value"></a>

## Return Value

A new SceneKit face geometry, or `nil` if the Metal device is unavailable or ARKit face tracking is not supported on the current device.

<a id="Discussion"></a>

## Discussion

A newly created [ARSCNFaceGeometry](../arscnfacegeometry.md) instance represents a neutral, generic face; use the [update(from:)](update%28from_%29.md) method to deform the geometry to match a specific facial expression or face shape.

The geometry contains a single geometry element; as such, assigning more than one material has no visible effect (see the inherited [materials](../../scenekit/scngeometry/materials.md) property).

Calling this initializer is equivalent to calling the [init(device:fillMesh:)](init%28device_fillmesh_%29.md) initializer and passing [false](https://developer.apple.com/documentation/swift/false) for the `fillMesh` parameter.

## See Also

### Creating a Geometry

- [init(device:fillMesh:)](init%28device_fillmesh_%29.md): Creates a SceneKit face geometry, optionally filling in gaps in the mesh for the eyes and mouth.

# faceGeometryWithDevice: (Objective-C)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Creates a SceneKit face geometry for rendering with the specified Metal device object.

## Declaration

```objectivec
+ (instancetype) faceGeometryWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device to use for rendering the geometry.

<a id="return-value"></a>

## Return Value

A new SceneKit face geometry, or `nil` if the Metal device is unavailable or ARKit face tracking is not supported on the current device.

<a id="Discussion"></a>

## Discussion

A newly created [ARSCNFaceGeometry](../arscnfacegeometry.md) instance represents a neutral, generic face; use the [updateFromFaceGeometry:](update%28from_%29.md) method to deform the geometry to match a specific facial expression or face shape.

The geometry contains a single geometry element; as such, assigning more than one material has no visible effect (see the inherited [materials](../../scenekit/scngeometry/materials.md) property).

Calling this initializer is equivalent to calling the [faceGeometryWithDevice:fillMesh:](init%28device_fillmesh_%29.md) initializer and passing [false](https://developer.apple.com/documentation/swift/false) for the `fillMesh` parameter.

## See Also

### Creating a Geometry

- [faceGeometryWithDevice:fillMesh:](init%28device_fillmesh_%29.md): Creates a SceneKit face geometry, optionally filling in gaps in the mesh for the eyes and mouth.
