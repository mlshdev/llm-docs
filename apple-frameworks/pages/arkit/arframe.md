> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe](https://developer.apple.com/documentation/arkit/arframe)

# ARFrame (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A video image captured as part of a session with position-tracking information.

## Declaration

```swift
class ARFrame
```

## Mentioned In

- [Displaying an AR Experience with Metal](displaying-an-ar-experience-with-metal.md)

<a id="overview"></a>

## Overview

A running session continuously captures video frames from the device’s camera while ARKit analyzes the captures to determine the user’s position in the world. ARKit can provide this information to you in the form of an [ARFrame](arframe.md) in two ways:

- Occasionally, by accessing an [ARSession](arsession.md) object’s [currentFrame](arsession/currentframe.md)
- Constantly, as a stream of frames through the [session(\_:didUpdate:)](arsessiondelegate/session%28__didupdate_%29-9v2kw.md) callback

To automatically receive all frames as ARKit captures them, make one of your objects the [delegate](arsession/delegate.md) of your app’s [ARSession](arsession.md).

Each frame can contain additional data, for example, EXIF ([exifData](arframe/exifdata.md)), or data based on any particular [frameSemantics](arconfiguration/framesemantics-swift.property.md) that you enable.

## Topics

### Accessing camera data

- [camera](arframe/camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](arframe/capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](arframe/timestamp.md): The time at which the frame was captured.
- [cameraGrainIntensity](arframe/cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [cameraGrainTexture](arframe/cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.
- [exifData](arframe/exifdata.md): Auxiliary data for the captured image.

### Accessing scene data

- [lightEstimate](arframe/lightestimate.md): An estimate of lighting conditions based on the camera image.
- [rawFeaturePoints](arframe/rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](arframe/captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](arframe/captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [sceneDepth](arframe/scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.
- [smoothedSceneDepth](arframe/smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.

### Tracking and interacting with the real world

- [anchors](arframe/anchors.md): The list of anchors representing positions tracked or objects detected in the scene.
- [raycastQuery(from:allowing:alignment:)](arframe/raycastquery%28from_allowing_alignment_%29.md): Get a ray-cast query for a screen point.
- [hitTest(\_:types:)](arframe/hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image.

### Checking world-mapping status

- [worldMappingStatus](arframe/worldmappingstatus-swift.property.md): The feasibility of generating or relocalizing a world map for this frame.
- [ARFrame.WorldMappingStatus](arframe/worldmappingstatus-swift.enum.md): A value describing the world mapping status for the area visible in a given frame.

### Checking for people

- [detectedBody](arframe/detectedbody.md): The screen position information of a body that ARKit recognizes in the camera image.
- [ARBody2D](arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [segmentationBuffer](arframe/segmentationbuffer.md): A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.
- [estimatedDepthData](arframe/estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.
- [ARFrame.SegmentationClass](arframe/segmentationclass.md): A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.

### Assessing geo-tracking condition

- [geoTrackingStatus](arframe/geotrackingstatus.md): The session’s condition with respect to geographic tracking at the time the session captured the frame.
- [ARGeoTrackingStatus](argeotrackingstatus.md): The state, accuracy, and reason that are possible for geo-tracking’s current condition.

### Instance Properties

- [metadataObjects](arframe/metadataobjects.md): Metadata objects associated with the current frame.

### Instance Methods

- [displayTransform(viewRotationAngle:viewportSize:)](arframe/displaytransform%28viewrotationangle_viewportsize_%29.md): Returns a display transform for the provided viewport size and view angle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the camera frame

- [currentFrame](arsession/currentframe.md): The most recent still frame captured by the active camera feed, including ARKit’s interpretation of it.
- [captureHighResolutionFrame(completion:)](arsession/capturehighresolutionframe%28completion_%29.md): Requests a frame outside of the normal frequency that contains a high-resolution captured image.

# ARFrame (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A video image captured as part of a session with position-tracking information.

## Declaration

```objectivec
@interface ARFrame : NSObject
```

## Mentioned In

- [Displaying an AR Experience with Metal](displaying-an-ar-experience-with-metal.md)

<a id="overview"></a>

## Overview

A running session continuously captures video frames from the device’s camera while ARKit analyzes the captures to determine the user’s position in the world. ARKit can provide this information to you in the form of an [ARFrame](arframe.md) in two ways:

- Occasionally, by accessing an [ARSession](arsession.md) object’s [currentFrame](arsession/currentframe.md)
- Constantly, as a stream of frames through the [session:didUpdateFrame:](arsessiondelegate/session%28__didupdate_%29-9v2kw.md) callback

To automatically receive all frames as ARKit captures them, make one of your objects the [delegate](arsession/delegate.md) of your app’s [ARSession](arsession.md).

Each frame can contain additional data, for example, EXIF ([exifData](arframe/exifdata.md)), or data based on any particular [frameSemantics](arconfiguration/framesemantics-swift.property.md) that you enable.

## Topics

### Accessing camera data

- [camera](arframe/camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](arframe/capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](arframe/timestamp.md): The time at which the frame was captured.
- [cameraGrainIntensity](arframe/cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [cameraGrainTexture](arframe/cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.
- [exifData](arframe/exifdata.md): Auxiliary data for the captured image.

### Accessing scene data

- [lightEstimate](arframe/lightestimate.md): An estimate of lighting conditions based on the camera image.
- [rawFeaturePoints](arframe/rawfeaturepoints.md): The current intermediate results of the scene analysis ARKit uses to perform world tracking.
- [capturedDepthData](arframe/captureddepthdata.md): Depth data captured in front-camera experiences.
- [capturedDepthDataTimestamp](arframe/captureddepthdatatimestamp.md): The time at which depth data for the frame (if any) was captured.
- [sceneDepth](arframe/scenedepth.md): Data on the distance between a device’s rear camera and real-world objects in an AR experience.
- [smoothedSceneDepth](arframe/smoothedscenedepth.md): An average of distance measurements between a device’s rear camera and real-world objects that creates smoother visuals in an AR experience.

### Tracking and interacting with the real world

- [anchors](arframe/anchors.md): The list of anchors representing positions tracked or objects detected in the scene.
- [raycastQueryFromPoint:allowingTarget:alignment:](arframe/raycastquery%28from_allowing_alignment_%29.md): Get a ray-cast query for a screen point.
- [hitTest:types:](arframe/hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image.

### Checking world-mapping status

- [worldMappingStatus](arframe/worldmappingstatus-swift.property.md): The feasibility of generating or relocalizing a world map for this frame.
- [ARWorldMappingStatus](arframe/worldmappingstatus-swift.enum.md): A value describing the world mapping status for the area visible in a given frame.

### Checking for people

- [detectedBody](arframe/detectedbody.md): The screen position information of a body that ARKit recognizes in the camera image.
- [ARBody2D](arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [segmentationBuffer](arframe/segmentationbuffer.md): A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.
- [estimatedDepthData](arframe/estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.
- [ARSegmentationClass](arframe/segmentationclass.md): A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.

### Assessing geo-tracking condition

- [geoTrackingStatus](arframe/geotrackingstatus.md): The session’s condition with respect to geographic tracking at the time the session captured the frame.
- [ARGeoTrackingStatus](argeotrackingstatus.md): The state, accuracy, and reason that are possible for geo-tracking’s current condition.

### Instance Properties

- [metadataObjects](arframe/metadataobjects.md): Metadata objects associated with the current frame.

### Instance Methods

- [displayTransformForViewRotationAngle:viewportSize:](arframe/displaytransform%28viewrotationangle_viewportsize_%29.md): Returns a display transform for the provided viewport size and view angle.
- [displayTransformForOrientation:viewportSize:](arframe/displaytransformfororientation_viewportsize_.md): Deprecated. Returns a display transform for the provided viewport size and orientation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing the camera frame

- [currentFrame](arsession/currentframe.md): The most recent still frame captured by the active camera feed, including ARKit’s interpretation of it.
- [captureHighResolutionFrameWithCompletion:](arsession/capturehighresolutionframe%28completion_%29.md): Requests a frame outside of the normal frequency that contains a high-resolution captured image.
