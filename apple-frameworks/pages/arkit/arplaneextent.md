> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneextent](https://developer.apple.com/documentation/arkit/arplaneextent)

# ARPlaneExtent (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+

The size and y-axis rotation of a detected plane.

## Declaration

```swift
class ARPlaneExtent
```

<a id="overview"></a>

## Overview

A plane anchor ([ARPlaneAnchor](arplaneanchor.md)) describes its size and orientation on the y-axis using the [planeExtent](arplaneanchor/planeextent.md) property of this type.

At runtime, ARKit continually updates the anchor’s width and height as the framework refines its knowledge of the plane’s shape in the environment.

Similarly, as the session runs, the framework may update the plane’s y-rotation to better fit its rectangular area in the environment. In iOS 15 and earlier, the framework rotates the plane anchor according to that angle. In iOS 16, the framework doesn’t rotate the anchor automatically and its transform matrix remains unchanged. Instead, the framework exposes the angle [rotationOnYAxis](arplaneextent/rotationonyaxis.md) that you apply to any plane extent geometry in your app.

> **Important**

>  Apps that run on iOS 16 with a deployment target less than iOS 16 preserve the prior y-axis rotation behavior.

<a id="Size-and-Rotate-an-Entity-to-a-Planes-Extent"></a>

### Size and Rotate an Entity to a Plane’s Extent

The following code defines a RealityKit entity sized to the plane extent’s width and height. The helper function also applies the extent’s suggested y-axis rotation by setting its transform `yaw` value to [rotationOnYAxis](arplaneextent/rotationonyaxis.md).

```swift
func createPlane(for planeAnchor: ARPlaneAnchor, material: Material) -> ModelEntity {

    // Get the plane's extent.
    let extent = planeAnchor.planeExtent

    // Create a model entity sized to the plane's extent.
    let planeEntity = ModelEntity(mesh: .generatePlane (width: extent.width, depth: extent.height),
        materials: [material])

    // Orient the entity according to the extent's y-axis rotation.
    planeEntity.transform = Transform(pitch: 0, yaw: extent.rotationOnYAxis, roll: 0)

    // Center the entity on the plane.
    planeEntity.transform.translation = planeAnchor.center

    return planeEntity
}
```

## Topics

### Inspecting Plane Size

- [width](arplaneextent/width.md): The estimated width of the plane.
- [height](arplaneextent/height.md): The estimated height of the plane.

### Inspecting Plane Y-Rotation

- [rotationOnYAxis](arplaneextent/rotationonyaxis.md): A radian value that indicates a plane’s y-axis orientation.

### Initializers

- [init(coder:)](arplaneextent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dimensions

- [center](arplaneanchor/center.md): The center point of the plane relative to its anchor position.
- [planeExtent](arplaneanchor/planeextent.md): The estimated width, length, and y-axis rotation of the detected plane.
- [extent](arplaneanchor/extent.md): Deprecated. The estimated width and length of the detected plane.

# ARPlaneExtent (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+

The size and y-axis rotation of a detected plane.

## Declaration

```objectivec
@interface ARPlaneExtent : NSObject
```

<a id="overview"></a>

## Overview

A plane anchor ([ARPlaneAnchor](arplaneanchor.md)) describes its size and orientation on the y-axis using the [planeExtent](arplaneanchor/planeextent.md) property of this type.

At runtime, ARKit continually updates the anchor’s width and height as the framework refines its knowledge of the plane’s shape in the environment.

Similarly, as the session runs, the framework may update the plane’s y-rotation to better fit its rectangular area in the environment. In iOS 15 and earlier, the framework rotates the plane anchor according to that angle. In iOS 16, the framework doesn’t rotate the anchor automatically and its transform matrix remains unchanged. Instead, the framework exposes the angle [rotationOnYAxis](arplaneextent/rotationonyaxis.md) that you apply to any plane extent geometry in your app.

> **Important**

>  Apps that run on iOS 16 with a deployment target less than iOS 16 preserve the prior y-axis rotation behavior.

<a id="Size-and-Rotate-an-Entity-to-a-Planes-Extent"></a>

### Size and Rotate an Entity to a Plane’s Extent

The following code defines a RealityKit entity sized to the plane extent’s width and height. The helper function also applies the extent’s suggested y-axis rotation by setting its transform `yaw` value to [rotationOnYAxis](arplaneextent/rotationonyaxis.md).

```swift
func createPlane(for planeAnchor: ARPlaneAnchor, material: Material) -> ModelEntity {

    // Get the plane's extent.
    let extent = planeAnchor.planeExtent

    // Create a model entity sized to the plane's extent.
    let planeEntity = ModelEntity(mesh: .generatePlane (width: extent.width, depth: extent.height),
        materials: [material])

    // Orient the entity according to the extent's y-axis rotation.
    planeEntity.transform = Transform(pitch: 0, yaw: extent.rotationOnYAxis, roll: 0)

    // Center the entity on the plane.
    planeEntity.transform.translation = planeAnchor.center

    return planeEntity
}
```

## Topics

### Inspecting Plane Size

- [width](arplaneextent/width.md): The estimated width of the plane.
- [height](arplaneextent/height.md): The estimated height of the plane.

### Inspecting Plane Y-Rotation

- [rotationOnYAxis](arplaneextent/rotationonyaxis.md): A radian value that indicates a plane’s y-axis orientation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Dimensions

- [center](arplaneanchor/center.md): The center point of the plane relative to its anchor position.
- [planeExtent](arplaneanchor/planeextent.md): The estimated width, length, and y-axis rotation of the detected plane.
- [extent](arplaneanchor/extent.md): Deprecated. The estimated width and length of the detected plane.
