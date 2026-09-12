> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession](https://developer.apple.com/documentation/arkit/arsession)

# ARSession (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.

## Declaration

```swift
class ARSession
```

## Mentioned In

- [Displaying an AR Experience with Metal](displaying-an-ar-experience-with-metal.md)
- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md)

<a id="overview"></a>

## Overview

An `ARSession` object coordinates the major processes that ARKit performs on your behalf to create an augmented reality experience. These processes include reading data from the device’s motion sensing hardware, controlling the device’s built-in camera, and performing image analysis on captured camera images. The session synthesizes all of these results to establish a correspondence between the real-world space the device inhabits and a virtual space where you model AR content.

<a id="Create-a-Session"></a>

### Create a Session

Every AR experience requires an `ARSession`. If you implement a custom renderer, you instantiate the session yourself.

```swift
let session = ARSession()
session.delegate = self
```

If you use one of the standard renderers (like [ARView](../realitykit/arview.md), [ARSCNView](arscnview.md), or [ARSKView](arskview.md)), the renderer creates a session object for you. When you want to interact with your app’s session, you access it on your app’s renderer.

```swift
let session = myView.session
```

<a id="Run-a-Session"></a>

### Run a Session

Running a session requires a configuration. Subclasses of [ARConfiguration](arconfiguration.md) determine how ARKit tracks a device’s position and motion relative to the real world, and thus it determines the kinds of AR experiences you create. For example, [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md) enables you to augment the user’s view of the world around them though the device’s back camera.

## Topics

### Configuring and running a session

- [run(\_:options:)](arsession/run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [identifier](arsession/identifier.md): A unique identifier of the running session.
- [ARSession.RunOptions](arsession/runoptions.md): Options for transitioning an AR session’s current state when you change its configuration.
- [configuration](arsession/configuration.md): An object that defines motion and scene tracking behaviors for the session.
- [pause()](arsession/pause%28%29.md): Pauses processing in the session.

### Responding to events

- [delegate](arsession/delegate.md): An object you provide to receive captured video images and tracking information, or to respond to changes in session status.
- [delegateQueue](arsession/delegatequeue.md): The dispatch queue through which the session calls your delegate methods.
- [ARSessionDelegate](arsessiondelegate.md): Deprecated. Methods you can implement to receive captured video frame images and tracking state from an AR session.
- [ARSessionObserver](arsessionobserver.md): Deprecated. Methods you can implement to respond to changes in the state of an AR session.

### Managing anchors

- [add(anchor:)](arsession/add%28anchor_%29.md): Adds the specified anchor to be tracked by the session.
- [remove(anchor:)](arsession/remove%28anchor_%29.md): Removes the specified anchor from tracking by the session.

### Saving or sharing state

- [getCurrentWorldMap(completionHandler:)](arsession/getcurrentworldmap%28completionhandler_%29.md): Returns an object encapsulating the world-tracking session’s space-mapping state and set of anchors.
- [Recording and Replaying AR Session Data](recording-and-replaying-ar-session-data.md): Record an AR session in Reality Composer and replay it in your ARKit app.

### Scanning 3D objects

- [createReferenceObject(transform:center:extent:completionHandler:)](arsession/createreferenceobject%28transform_center_extent_completionhandler_%29.md): Deprecated. Creates a reference object (for 3D object detection) from the specified region of the session’s world space.

### Updating the world origin

- [setWorldOrigin(relativeTransform:)](arsession/setworldorigin%28relativetransform_%29.md): Changes the basis for the AR world coordinate space using the specified transform.

### Finding real-world surfaces

Cast a ray from a point on the screen to find intersections with real-world surfaces.

- [raycast(\_:)](arsession/raycast%28__%29.md): Checks once for intersections between a ray and real-world surfaces.
- [trackedRaycast(\_:updateHandler:)](arsession/trackedraycast%28__updatehandler_%29.md): Repeats a ray-cast query over time to notify you of updated surfaces in the physical environment.

### Converting local coordinates to geographic coordinates

- [getGeoLocation(forPoint:completionHandler:)](arsession/getgeolocation%28forpoint_completionhandler_%29.md): Converts a position in the framework’s local coordinate system to latitude, longitude and altitude.

### Accessing the camera frame

- [currentFrame](arsession/currentframe.md): The most recent still frame captured by the active camera feed, including ARKit’s interpretation of it.
- [ARFrame](arframe.md): A video image captured as part of a session with position-tracking information.
- [captureHighResolutionFrame(completion:)](arsession/capturehighresolutionframe%28completion_%29.md): Requests a frame outside of the normal frequency that contains a high-resolution captured image.

### Managing collaboration

- [update(with:)](arsession/update%28with_%29.md): Updates your session with information about the physical environment that is collected by another user.
- [ARSession.CollaborationData](arsession/collaborationdata.md): An object that holds information that a user has collected about the physical environment.

### Providing a session

- [ARSessionProviding](arsessionproviding.md): Deprecated. An object that provides a session.

### Instance Properties

- [viewLayer](arsession/viewlayer.md): The layer that displays the `ARFrame`, required before `viewRotationAngle` becomes available.
- [viewRotationAngle](arsession/viewrotationangle-8847g.md): The angle, in degrees, to rotate a view by so the `ARFrame` it displays stays level with the horizon as the device rotates.

### Instance Methods

- [captureHighResolutionFrame(using:completion:)](arsession/capturehighresolutionframe%28using_completion_%29.md): Requests a single, high resolution frame to be captured.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### iOS

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md): Check whether your app can use ARKit and respect user privacy at runtime.
- [ARAnchor](aranchor.md): An object that specifies the position and orientation of an item in the physical environment.
- [ARKit in iOS](arkit-in-ios.md): Integrate iOS device camera and motion features to produce augmented reality experiences in your app or game.

# ARSession (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.

## Declaration

```objectivec
@interface ARSession : NSObject
```

## Mentioned In

- [Displaying an AR Experience with Metal](displaying-an-ar-experience-with-metal.md)
- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md)

<a id="overview"></a>

## Overview

An `ARSession` object coordinates the major processes that ARKit performs on your behalf to create an augmented reality experience. These processes include reading data from the device’s motion sensing hardware, controlling the device’s built-in camera, and performing image analysis on captured camera images. The session synthesizes all of these results to establish a correspondence between the real-world space the device inhabits and a virtual space where you model AR content.

<a id="Create-a-Session"></a>

### Create a Session

Every AR experience requires an `ARSession`. If you implement a custom renderer, you instantiate the session yourself.

```swift
let session = ARSession()
session.delegate = self
```

If you use one of the standard renderers (like [ARView](../realitykit/arview.md), [ARSCNView](arscnview.md), or [ARSKView](arskview.md)), the renderer creates a session object for you. When you want to interact with your app’s session, you access it on your app’s renderer.

```swift
let session = myView.session
```

<a id="Run-a-Session"></a>

### Run a Session

Running a session requires a configuration. Subclasses of [ARConfiguration](arconfiguration.md) determine how ARKit tracks a device’s position and motion relative to the real world, and thus it determines the kinds of AR experiences you create. For example, [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md) enables you to augment the user’s view of the world around them though the device’s back camera.

## Topics

### Configuring and running a session

- [runWithConfiguration:options:](arsession/run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [runWithConfiguration:](arsession/runwithconfiguration_.md): Starts AR processing for the session with the specified configuration.
- [identifier](arsession/identifier.md): A unique identifier of the running session.
- [ARSessionRunOptions](arsession/runoptions.md): Options for transitioning an AR session’s current state when you change its configuration.
- [configuration](arsession/configuration.md): An object that defines motion and scene tracking behaviors for the session.
- [pause](arsession/pause%28%29.md): Pauses processing in the session.

### Responding to events

- [delegate](arsession/delegate.md): An object you provide to receive captured video images and tracking information, or to respond to changes in session status.
- [delegateQueue](arsession/delegatequeue.md): The dispatch queue through which the session calls your delegate methods.
- [ARSessionDelegate](arsessiondelegate.md): Deprecated. Methods you can implement to receive captured video frame images and tracking state from an AR session.
- [ARSessionObserver](arsessionobserver.md): Deprecated. Methods you can implement to respond to changes in the state of an AR session.

### Managing anchors

- [addAnchor:](arsession/add%28anchor_%29.md): Adds the specified anchor to be tracked by the session.
- [removeAnchor:](arsession/remove%28anchor_%29.md): Removes the specified anchor from tracking by the session.

### Saving or sharing state

- [getCurrentWorldMapWithCompletionHandler:](arsession/getcurrentworldmap%28completionhandler_%29.md): Returns an object encapsulating the world-tracking session’s space-mapping state and set of anchors.
- [Recording and Replaying AR Session Data](recording-and-replaying-ar-session-data.md): Record an AR session in Reality Composer and replay it in your ARKit app.

### Scanning 3D objects

- [createReferenceObjectWithTransform:center:extent:completionHandler:](arsession/createreferenceobject%28transform_center_extent_completionhandler_%29.md): Deprecated. Creates a reference object (for 3D object detection) from the specified region of the session’s world space.

### Updating the world origin

- [setWorldOrigin:](arsession/setworldorigin%28relativetransform_%29.md): Changes the basis for the AR world coordinate space using the specified transform.

### Finding real-world surfaces

Cast a ray from a point on the screen to find intersections with real-world surfaces.

- [raycast:](arsession/raycast%28__%29.md): Checks once for intersections between a ray and real-world surfaces.
- [trackedRaycast:updateHandler:](arsession/trackedraycast%28__updatehandler_%29.md): Repeats a ray-cast query over time to notify you of updated surfaces in the physical environment.

### Converting local coordinates to geographic coordinates

- [getGeoLocationForPoint:completionHandler:](arsession/getgeolocation%28forpoint_completionhandler_%29.md): Converts a position in the framework’s local coordinate system to latitude, longitude and altitude.

### Accessing the camera frame

- [currentFrame](arsession/currentframe.md): The most recent still frame captured by the active camera feed, including ARKit’s interpretation of it.
- [ARFrame](arframe.md): A video image captured as part of a session with position-tracking information.
- [captureHighResolutionFrameWithCompletion:](arsession/capturehighresolutionframe%28completion_%29.md): Requests a frame outside of the normal frequency that contains a high-resolution captured image.

### Managing collaboration

- [updateWithCollaborationData:](arsession/update%28with_%29.md): Updates your session with information about the physical environment that is collected by another user.
- [ARCollaborationData](arsession/collaborationdata.md): An object that holds information that a user has collected about the physical environment.

### Providing a session

- [ARSessionProviding](arsessionproviding.md): Deprecated. An object that provides a session.

### Instance Properties

- [viewLayer](arsession/viewlayer.md): The layer that displays the `ARFrame`, required before `viewRotationAngle` becomes available.
- [viewRotationAngle](arsession/viewrotationangle-dmff.md): The angle, in degrees, to rotate a view by so the `ARFrame` it displays stays level with the horizon as the device rotates.

### Instance Methods

- [captureHighResolutionFrameUsingPhotoSettings:completion:](arsession/capturehighresolutionframe%28using_completion_%29.md): Requests a single, high resolution frame to be captured.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### iOS

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md): Check whether your app can use ARKit and respect user privacy at runtime.
- [ARAnchor](aranchor.md): An object that specifies the position and orientation of an item in the physical environment.
- [ARKit in iOS](arkit-in-ios.md): Integrate iOS device camera and motion features to produce augmented reality experiences in your app or game.
