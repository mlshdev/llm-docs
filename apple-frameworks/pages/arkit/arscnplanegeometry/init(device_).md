> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnplanegeometry/init(device:)](https://developer.apple.com/documentation/arkit/arscnplanegeometry/init(device:))

# init(device:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Creates a SceneKit plane geometry for rendering with the specified Metal device object.

## Declaration

```swift
convenience init?(device: any MTLDevice)
```

## Parameters

- `device`: The Metal device to use for rendering the geometry.

<a id="return-value"></a>

## Return Value

A new SceneKit plane geometry, or `nil` if the Metal device is unavailable.

<a id="Discussion"></a>

## Discussion

A newly created [ARSCNPlaneGeometry](../arscnplanegeometry.md) instance does not represent any specific plane; use the [update(from:)](update%28from_%29.md) method to make the geometry match the estimated shape of a specific plane anchor.

The geometry contains a single geometry element; as such, assigning more than one material has no visible effect (see the inherited [materials](../../scenekit/scngeometry/materials.md) property).

# planeGeometryWithDevice: (Objective-C)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Creates a SceneKit plane geometry for rendering with the specified Metal device object.

## Declaration

```objectivec
+ (instancetype) planeGeometryWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device to use for rendering the geometry.

<a id="return-value"></a>

## Return Value

A new SceneKit plane geometry, or `nil` if the Metal device is unavailable.

<a id="Discussion"></a>

## Discussion

A newly created [ARSCNPlaneGeometry](../arscnplanegeometry.md) instance does not represent any specific plane; use the [updateFromPlaneGeometry:](update%28from_%29.md) method to make the geometry match the estimated shape of a specific plane anchor.

The geometry contains a single geometry element; as such, assigning more than one material has no visible effect (see the inherited [materials](../../scenekit/scngeometry/materials.md) property).
