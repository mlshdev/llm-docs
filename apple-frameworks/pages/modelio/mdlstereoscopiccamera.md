> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlstereoscopiccamera](https://developer.apple.com/documentation/modelio/mdlstereoscopiccamera)

# MDLStereoscopicCamera (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A point of view for rendering a stereoscopic display of a 3D scene.

## Declaration

```swift
class MDLStereoscopicCamera
```

<a id="overview"></a>

## Overview

This class provides properties related to rendering the scene from two slightly different perspectives to simulate binocular vision. For general and optical properties of a camera, see the superclass [MDLCamera](mdlcamera.md).

## Topics

### Modeling Stereoscopic Imaging

- [interPupillaryDistance](mdlstereoscopiccamera/interpupillarydistance.md): The distance, in millimeters, between the stereoscopic camera’s two viewpoints.
- [overlap](mdlstereoscopiccamera/overlap.md): The amount, as a fraction of image width, by which the images from the camera’s two viewpoints overlap.
- [leftVergence](mdlstereoscopiccamera/leftvergence.md): The angle, in degrees, at which the camera’s left viewpoint faces toward a central focal point.
- [rightVergence](mdlstereoscopiccamera/rightvergence.md): The angle, in degrees, at which the camera’s right viewpoint faces toward a central focal point.

### Generating View and Projection Matrices

- [leftViewMatrix](mdlstereoscopiccamera/leftviewmatrix.md): The transformation matrix that determines the position and orientation of the camera’s left viewpoint relative to a scene.
- [leftProjectionMatrix](mdlstereoscopiccamera/leftprojectionmatrix.md): The transformation matrix that determines the extent of a scene visible to the camera’s left viewpoint.
- [rightViewMatrix](mdlstereoscopiccamera/rightviewmatrix.md): The transformation matrix that determines the position and orientation of the camera’s right viewpoint relative to a scene.
- [rightProjectionMatrix](mdlstereoscopiccamera/rightprojectionmatrix.md): The transformation matrix that determines the extent of a scene visible to the camera’s right viewpoint.

## Relationships

### Inherits From

- [MDLCamera](mdlcamera.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Cameras

- [MDLCamera](mdlcamera.md): A point of view for rendering a 3D scene, along with a set of parameters describing an intended appearance for rendering.

# MDLStereoscopicCamera (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A point of view for rendering a stereoscopic display of a 3D scene.

## Declaration

```objectivec
@interface MDLStereoscopicCamera : MDLCamera
```

<a id="overview"></a>

## Overview

This class provides properties related to rendering the scene from two slightly different perspectives to simulate binocular vision. For general and optical properties of a camera, see the superclass [MDLCamera](mdlcamera.md).

## Topics

### Modeling Stereoscopic Imaging

- [interPupillaryDistance](mdlstereoscopiccamera/interpupillarydistance.md): The distance, in millimeters, between the stereoscopic camera’s two viewpoints.
- [overlap](mdlstereoscopiccamera/overlap.md): The amount, as a fraction of image width, by which the images from the camera’s two viewpoints overlap.
- [leftVergence](mdlstereoscopiccamera/leftvergence.md): The angle, in degrees, at which the camera’s left viewpoint faces toward a central focal point.
- [rightVergence](mdlstereoscopiccamera/rightvergence.md): The angle, in degrees, at which the camera’s right viewpoint faces toward a central focal point.

### Generating View and Projection Matrices

- [leftViewMatrix](mdlstereoscopiccamera/leftviewmatrix.md): The transformation matrix that determines the position and orientation of the camera’s left viewpoint relative to a scene.
- [leftProjectionMatrix](mdlstereoscopiccamera/leftprojectionmatrix.md): The transformation matrix that determines the extent of a scene visible to the camera’s left viewpoint.
- [rightViewMatrix](mdlstereoscopiccamera/rightviewmatrix.md): The transformation matrix that determines the position and orientation of the camera’s right viewpoint relative to a scene.
- [rightProjectionMatrix](mdlstereoscopiccamera/rightprojectionmatrix.md): The transformation matrix that determines the extent of a scene visible to the camera’s right viewpoint.

## Relationships

### Inherits From

- [MDLCamera](mdlcamera.md)

## See Also

### Cameras

- [MDLCamera](mdlcamera.md): A point of view for rendering a 3D scene, along with a set of parameters describing an intended appearance for rendering.
