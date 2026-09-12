> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraregionanchor](https://developer.apple.com/documentation/arkit/cameraregionanchor)

# CameraRegionAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Represents a region in space for capturing a camera stream.

## Declaration

```swift
struct CameraRegionAnchor
```

<a id="overview"></a>

## Overview

`CameraRegionAnchor` requires the [Camera Region access](../bundleresources/entitlements/com.apple.developer.arkit.camera-region.allow.md) entitlement.

## Topics

### Operators

- [==(\_:\_:)](cameraregionanchor/==%28____%29.md): Returns a Boolean value indicating whether two camera region anchors are equal.

### Initializers

- [init(originFromAnchorTransform:width:height:cameraEnhancement:)](cameraregionanchor/init%28originfromanchortransform_width_height_cameraenhancement_%29.md): Initialize a camera region anchor.

### Instance Properties

- [cameraEnhancement](cameraregionanchor/cameraenhancement-swift.property.md): The enhancement applied to this anchor’s pixel buffer.
- [description](cameraregionanchor/description.md): A textual representation of this anchor.
- [height](cameraregionanchor/height.md): The height of the region, in meters. This is \[-height/2, height/2\] from the center.
- [id](cameraregionanchor/id.md): The unique identifier of this anchor.
- [originFromAnchorTransform](cameraregionanchor/originfromanchortransform.md): The transform from the anchor to the origin coordinate system.
- [pixelBuffer](cameraregionanchor/pixelbuffer.md): The pixel buffer. Can be nil, e.g. for anchors which have not yet been added to the provider.
- [width](cameraregionanchor/width.md): The width of the region, in meters. This is \[-width/2, width/2\] from the center.

### Enumerations

- [CameraRegionAnchor.CameraEnhancement](cameraregionanchor/cameraenhancement-swift.enum.md): Enhancements to be used with each anchor.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](cameraregionanchor/arkitcoordinatespaceproviding-implementations.md)

## Relationships

### Conforms To

- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md)
- [Anchor](anchor.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Camera region

- [CameraRegionProvider](cameraregionprovider.md): A camera region provider.
