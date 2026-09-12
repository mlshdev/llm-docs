> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera](https://developer.apple.com/documentation/modelio/mdlcamera)

# MDLCamera (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A point of view for rendering a 3D scene, along with a set of parameters describing an intended appearance for rendering.

## Declaration

```swift
class MDLCamera
```

<a id="overview"></a>

## Overview

Camera parameters include basic information—such as the [projectionMatrix](mdlcamera/projectionmatrix.md) and [fieldOfView](mdlcamera/fieldofview.md) properties—for use with any renderer, as well as attributes that model real-world cameras—such as the [fStop](mdlcamera/fstop.md) and [exposure](mdlcamera/exposure.md) properties—for use in a renderer based on realistic optical physics.

## Topics

### Managing Camera Position and Orientation

- [frameBoundingBox(\_:setNearAndFar:)](mdlcamera/frameboundingbox%28__setnearandfar_%29.md): Moves the camera such that the specified bounding box lies entirely within the camera’s field of view.
- [look(at:)](mdlcamera/look%28at_%29.md): Orients the camera to face toward the specified point.
- [look(at:from:)](mdlcamera/look%28at_from_%29.md): Sets the camera’s position and orients the camera to face toward the specified point.

### Managing Camera Perspective

- [projectionMatrix](mdlcamera/projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](mdlcamera/projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](mdlcameraprojection.md): Options for camera projection styles, used by the [projection](mdlcamera/projection.md) property.
- [nearVisibilityDistance](mdlcamera/nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](mdlcamera/farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](mdlcamera/fieldofview.md): The camera’s field of view, in degrees.
- [ray(to:forViewPort:)](mdlcamera/ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](mdlcamera/worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.

### Modeling a Physical Lens

- [barrelDistortion](mdlcamera/barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [fisheyeDistortion](mdlcamera/fisheyedistortion.md): The second coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](mdlcamera/opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [chromaticAberration](mdlcamera/chromaticaberration.md): The amount of radial color shift around the edges of an image rendered using the camera.
- [focalLength](mdlcamera/focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [fStop](mdlcamera/fstop.md): The relative aperture ratio of the camera’s simulated lens.
- [apertureBladeCount](mdlcamera/aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernel(withSize:)](mdlcamera/bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](mdlcamera/maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](mdlcamera/focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](mdlcamera/shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](mdlcamera/sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorAspect](mdlcamera/sensoraspect.md): The ratio of width to height for the camera’s simulated imaging surface.
- [sensorEnlargement](mdlcamera/sensorenlargement.md): The horizontal and vertical scale factors that determine the active region of the sensor.
- [sensorShift](mdlcamera/sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [flash](mdlcamera/flash.md): Red, green, and blue factors to be used in brightening darker areas of the camera’s image.
- [exposure](mdlcamera/exposure.md): Red, green, and blue factors that scale each color channel in the camera’s image.
- [exposureCompression](mdlcamera/exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

## Relationships

### Inherits From

- [MDLObject](mdlobject.md)

### Inherited By

- [MDLStereoscopicCamera](mdlstereoscopiccamera.md)

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

- [MDLStereoscopicCamera](mdlstereoscopiccamera.md): A point of view for rendering a stereoscopic display of a 3D scene.

# MDLCamera (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A point of view for rendering a 3D scene, along with a set of parameters describing an intended appearance for rendering.

## Declaration

```objectivec
@interface MDLCamera : MDLObject
```

<a id="overview"></a>

## Overview

Camera parameters include basic information—such as the [projectionMatrix](mdlcamera/projectionmatrix.md) and [fieldOfView](mdlcamera/fieldofview.md) properties—for use with any renderer, as well as attributes that model real-world cameras—such as the [fStop](mdlcamera/fstop.md) and [exposure](mdlcamera/exposure.md) properties—for use in a renderer based on realistic optical physics.

## Topics

### Managing Camera Position and Orientation

- [frameBoundingBox:setNearAndFar:](mdlcamera/frameboundingbox%28__setnearandfar_%29.md): Moves the camera such that the specified bounding box lies entirely within the camera’s field of view.
- [lookAt:](mdlcamera/look%28at_%29.md): Orients the camera to face toward the specified point.
- [lookAt:from:](mdlcamera/look%28at_from_%29.md): Sets the camera’s position and orients the camera to face toward the specified point.

### Managing Camera Perspective

- [projectionMatrix](mdlcamera/projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](mdlcamera/projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](mdlcameraprojection.md): Options for camera projection styles, used by the [projection](mdlcamera/projection.md) property.
- [nearVisibilityDistance](mdlcamera/nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](mdlcamera/farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](mdlcamera/fieldofview.md): The camera’s field of view, in degrees.
- [rayTo:forViewPort:](mdlcamera/ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](mdlcamera/worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.

### Modeling a Physical Lens

- [barrelDistortion](mdlcamera/barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [fisheyeDistortion](mdlcamera/fisheyedistortion.md): The second coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](mdlcamera/opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [chromaticAberration](mdlcamera/chromaticaberration.md): The amount of radial color shift around the edges of an image rendered using the camera.
- [focalLength](mdlcamera/focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [fStop](mdlcamera/fstop.md): The relative aperture ratio of the camera’s simulated lens.
- [apertureBladeCount](mdlcamera/aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernelWithSize:](mdlcamera/bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](mdlcamera/maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](mdlcamera/focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](mdlcamera/shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](mdlcamera/sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorAspect](mdlcamera/sensoraspect.md): The ratio of width to height for the camera’s simulated imaging surface.
- [sensorEnlargement](mdlcamera/sensorenlargement.md): The horizontal and vertical scale factors that determine the active region of the sensor.
- [sensorShift](mdlcamera/sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [flash](mdlcamera/flash.md): Red, green, and blue factors to be used in brightening darker areas of the camera’s image.
- [exposure](mdlcamera/exposure.md): Red, green, and blue factors that scale each color channel in the camera’s image.
- [exposureCompression](mdlcamera/exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

### Type Methods

- [cameraWithSCNCamera:](mdlcamera/camerawithscncamera_.md)

## Relationships

### Inherits From

- [MDLObject](mdlobject.md)

### Inherited By

- [MDLStereoscopicCamera](mdlstereoscopiccamera.md)

## See Also

### Cameras

- [MDLStereoscopicCamera](mdlstereoscopiccamera.md): A point of view for rendering a stereoscopic display of a 3D scene.
