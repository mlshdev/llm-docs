> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnboundingvolume](https://developer.apple.com/documentation/scenekit/scnboundingvolume)

# SCNBoundingVolume (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Methods common to the [SCNNode](scnnode.md) and [SCNGeometry](scngeometry.md) classes for measuring location and size.

## Declaration

```swift
protocol SCNBoundingVolume : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol defines features adopted by both the [SCNNode](scnnode.md) and [SCNGeometry](scngeometry.md) classes.

A bounding box is the smallest volume, in the shape of a rectangle aligned to the axes of the local coordinate space, that entirely contains an object. Scene Kit defines a bounding box using two points: a minimum and maximum corner. Similarly, a bounding sphere is the smallest sphere containing an object.

By default, Scene Kit automatically determines the minimal bounding volumes for geometries based on their vertex positions in model space. The bounding volume of a node with an attached geometry is the bounding volume of the geometry, expressed in the node’s local space. The bounding volume of a node containing child nodes is the minimal volume that encloses the bounding volumes of the node’s children.

Scene Kit uses the bounding volume of an object when determining how to render a scene. For example, an [SCNCamera](scncamera.md) object uses the bounding boxes of visible elements in a scene to determine the its depth limits. You can override a bounding volume to change this behavior. For example, if a building model has a long, narrow antenna, the default bounding box includes that feature, so the default camera view for that model will be off-center with respect to the building itself. If you set a new bounding box that includes only the main part of the building, the default camera view will center on the building and ignore the antenna.

<a id="Getting-and-Setting-Bounding-Volumes"></a>

### Getting and Setting Bounding Volumes

Read the [boundingBox](scnboundingvolume/boundingbox.md) or [boundingSphere](scnboundingvolume/boundingsphere.md) property, [getBoundingBoxMin:max:](scnboundingvolume/getboundingboxmin_max_.md) or [getBoundingSphereCenter:radius:](scnboundingvolume/getboundingspherecenter_radius_.md) methods in Objective-C, to retrieve information about an object’s bounding box or sphere. To override the automatically determined bounding volume of an object, set a new value for the [boundingBox](scnboundingvolume/boundingbox.md) property, the [setBoundingBoxMin:max:](scnboundingvolume/setboundingboxmin_max_.md) method in Objective-C.

## Topics

### Measuring an Object’s Bounding Volume

- [boundingBox](scnboundingvolume/boundingbox.md): Deprecated. The minimum and maximum corner points of the object’s bounding box.
- [boundingSphere](scnboundingvolume/boundingsphere.md): Deprecated. The center point and radius of the object’s bounding sphere.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNBox](scnbox.md)
- [SCNCapsule](scncapsule.md)
- [SCNCone](scncone.md)
- [SCNCylinder](scncylinder.md)
- [SCNFloor](scnfloor.md)
- [SCNGeometry](scngeometry.md)
- [SCNNode](scnnode.md)
- [SCNPlane](scnplane.md)
- [SCNPyramid](scnpyramid.md)
- [SCNReferenceNode](scnreferencenode.md)
- [SCNShape](scnshape.md)
- [SCNSphere](scnsphere.md)
- [SCNText](scntext.md)
- [SCNTorus](scntorus.md)
- [SCNTube](scntube.md)

## See Also

### Managing Geometry Attributes

- [name](scngeometry/name.md): A name associated with the geometry object.

# SCNBoundingVolume (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods common to the [SCNNode](scnnode.md) and [SCNGeometry](scngeometry.md) classes for measuring location and size.

## Declaration

```objectivec
@protocol SCNBoundingVolume <NSObject>
```

<a id="overview"></a>

## Overview

This protocol defines features adopted by both the [SCNNode](scnnode.md) and [SCNGeometry](scngeometry.md) classes.

A bounding box is the smallest volume, in the shape of a rectangle aligned to the axes of the local coordinate space, that entirely contains an object. Scene Kit defines a bounding box using two points: a minimum and maximum corner. Similarly, a bounding sphere is the smallest sphere containing an object.

By default, Scene Kit automatically determines the minimal bounding volumes for geometries based on their vertex positions in model space. The bounding volume of a node with an attached geometry is the bounding volume of the geometry, expressed in the node’s local space. The bounding volume of a node containing child nodes is the minimal volume that encloses the bounding volumes of the node’s children.

Scene Kit uses the bounding volume of an object when determining how to render a scene. For example, an [SCNCamera](scncamera.md) object uses the bounding boxes of visible elements in a scene to determine the its depth limits. You can override a bounding volume to change this behavior. For example, if a building model has a long, narrow antenna, the default bounding box includes that feature, so the default camera view for that model will be off-center with respect to the building itself. If you set a new bounding box that includes only the main part of the building, the default camera view will center on the building and ignore the antenna.

<a id="Getting-and-Setting-Bounding-Volumes"></a>

### Getting and Setting Bounding Volumes

Read the [boundingBox](scnboundingvolume/boundingbox.md) or [boundingSphere](scnboundingvolume/boundingsphere.md) property, [getBoundingBoxMin:max:](scnboundingvolume/getboundingboxmin_max_.md) or [getBoundingSphereCenter:radius:](scnboundingvolume/getboundingspherecenter_radius_.md) methods in Objective-C, to retrieve information about an object’s bounding box or sphere. To override the automatically determined bounding volume of an object, set a new value for the [boundingBox](scnboundingvolume/boundingbox.md) property, the [setBoundingBoxMin:max:](scnboundingvolume/setboundingboxmin_max_.md) method in Objective-C.

## Topics

### Measuring an Object’s Bounding Volume

- [getBoundingBoxMin:max:](scnboundingvolume/getboundingboxmin_max_.md): Deprecated. Gets the minimum and maximum corner points of the object’s bounding box.
- [getBoundingSphereCenter:radius:](scnboundingvolume/getboundingspherecenter_radius_.md): Deprecated. Gets the center point and radius of the object’s bounding sphere.

### Overriding an Object’s Default Bounding Volume

- [setBoundingBoxMin:max:](scnboundingvolume/setboundingboxmin_max_.md): Deprecated. Sets a custom bounding box for the object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNGeometry](scngeometry.md)
- [SCNNode](scnnode.md)

## See Also

### Managing Geometry Attributes

- [name](scngeometry/name.md): A name associated with the geometry object.
