> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory](https://developer.apple.com/documentation/dockkit/dockaccessory)

# DockAccessory

**Framework:** DockKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Obtain accessory information and control tracking behavior.

## Declaration

```swift
final class DockAccessory
```

<a id="overview"></a>

## Overview

`DockAccessory` provides information about the dock accessory including its model name and firmware version. It also controls the dock accessory when you disable system tracking. Use `DockAccesory` to  perform animations, or explicitly control the position of the dock accessory in three-dimensional space by supplying coordinates in units of radians.  The collection of the X, Y, and Z values corresponding to pitch, yaw, and roll is the *angular position* of the dock accessory.

If there are multiple subjects in a video frame, direct the dock accessory to focus on a particular area of the frame using [setFramingMode(\_:)](dockaccessory/setframingmode%28__%29.md).

> **Important**

> DockKit throws a [DockKitError.frameRateTooHigh](dockkiterror/frameratetoohigh.md) exception if you animate or set the orientation of the dock accessory too quickly, so keep call rates at 2 times per second or less.

## Topics

### Selecting and tracking

- [selectSubject(at:)](dockaccessory/selectsubject%28at_%29.md): Selects a subject to track at the supplied coordinates.
- [track(\_:cameraInformation:)](dockaccessory/track%28__camerainformation_%29-4yl9b.md): Automatically generate and send tracking vectors to the device.
- [track(\_:cameraInformation:)](dockaccessory/track%28__camerainformation_%29-44mwn.md): Automatically generate and send tracking vectors to the device.
- [DockAccessory.Observation](dockaccessory/observation.md): An observation of the contents of a single video frame.
- [DockAccessory.CameraInformation](dockaccessory/camerainformation.md): A collection of tracking information about the camera currently in use.
- [DockAccessory.CameraOrientation](dockaccessory/cameraorientation.md): The set of camera orientations used to extract coordinates.

### Performing animation

- [animate(motion:)](dockaccessory/animate%28motion_%29.md): Starts an animation sequence.
- [setRegionOfInterest(\_:)](dockaccessory/setregionofinterest%28__%29.md): Sets the area in the video frame in which the dock accessory tracks a subject.
- [regionOfInterest](dockaccessory/regionofinterest.md): The area in the video frame in which the dock accessory tracks a subject.
- [DockAccessory.Animation](dockaccessory/animation.md): Character animations that describe how to move the dock accessory.

### Setting position and limits

- [setLimits(\_:)](dockaccessory/setlimits%28__%29.md): Sets limits for the axes of rotation.
- [setOrientation(\_:duration:relative:)](dockaccessory/setorientation%28__duration_relative_%29-2epe2.md): Deprecated. Sets the position of each axis of orientation to radians for pitch, yaw, and roll.
- [setOrientation(\_:duration:relative:)](dockaccessory/setorientation%28__duration_relative_%29-6b0fl.md): Deprecated. Sets the position of each axis of orientation to radians for pitch, yaw, and roll.
- [setAngularVelocity(\_:)](dockaccessory/setangularvelocity%28__%29.md): Sets the angular velocity of each axis of orientation.

### Setting framing mode

- [setFramingMode(\_:)](dockaccessory/setframingmode%28__%29.md): Customize the dock accessory’s tracking behavior.
- [framingMode](dockaccessory/framingmode-swift.property.md): The current framing mode.
- [DockAccessory.FramingMode](dockaccessory/framingmode-swift.enum.md): The mode to control framing of the subject when tracking.

### Getting position and limits

- [motionStates](dockaccessory/motionstates-swift.property.md): Motion information from the dock accessory that includes current orientation and velocity of all axes.
- [limits](dockaccessory/limits-swift.property.md): Current limits for the axes of rotation and maximum angular velocity.
- [DockAccessory.MotionState](dockaccessory/motionstate.md): An event that indicates the state of a dock accessory’s current position and speed.
- [DockAccessory.MotionStates](dockaccessory/motionstates-swift.struct.md): An asynchronous sequence of orientation and velocity updates from the device.
- [DockAccessory.Limits](dockaccessory/limits-swift.struct.md): Soft limits on multiple axes of rotation.

### Getting accessory information

- [firmwareVersion](dockaccessory/firmwareversion.md): The firmware version of the dock accessory.
- [hardwareModel](dockaccessory/hardwaremodel.md): The model of the dock accessory.
- [identifier](dockaccessory/identifier-swift.property.md): The name and unique identifer of the dock accessory.
- [DockAccessory.Identifier](dockaccessory/identifier-swift.struct.md): Information that uniquely identifies the dock accessory.
- [DockAccessory.Category](dockaccessory/category.md): Types of supported dock accesories.
- [DockAccessory.State](dockaccessory/state.md): The state of a dock accessory.
- [DockAccessory.StateChange](dockaccessory/statechange.md): An event that indicates a change in the state of a dock accessory.
- [DockAccessory.StateChanges](dockaccessory/statechanges.md): An asynchronous sequence of dock accessory state changes.

### Inspecting the object

- [hash(into:)](dockaccessory/hash%28into_%29.md): Creates a unique identifier representing the object.
- [debugDescription](dockaccessory/debugdescription.md): The text description of the dock accessory state.

### Structures

- [DockAccessory.AccessoryEvents](dockaccessory/accessoryevents-swift.struct.md): An asynchronous sequence of dock accessory events.
- [DockAccessory.BatteryState](dockaccessory/batterystate.md): A struct that represents an accessory battery state.
- [DockAccessory.BatteryStates](dockaccessory/batterystates-swift.struct.md): An asynchronous sequence of dock accessory battery states.
- [DockAccessory.TrackedObject](dockaccessory/trackedobject.md): The state of a tracked object in the active tracking session.
- [DockAccessory.TrackedPerson](dockaccessory/trackedperson.md): The state of a tracked person in the active tracking session.
- [DockAccessory.TrackingState](dockaccessory/trackingstate.md): A representation of the active tracking session state.
- [DockAccessory.TrackingStates](dockaccessory/trackingstates-swift.struct.md): An asynchronous sequence of tracking session states.

### Instance Properties

- [accessoryEvents](dockaccessory/accessoryevents-swift.property.md): Events from the accessory that signify button presses or common camera controls.
- [batteryStates](dockaccessory/batterystates-swift.property.md): Battery states from the accessory that indicate changes in battery charge or readiness
- [trackingStates](dockaccessory/trackingstates-swift.property.md): Provides an access to the asynchronous sequence of tracking session states

### Instance Methods

- [selectSubjects(\_:)](dockaccessory/selectsubjects%28__%29.md): Selects subjects to track with specific identifiers
- [setOrientation(\_:duration:relative:)](dockaccessory/setorientation%28__duration_relative_%29-6h2ah.md): Sets the position of each axis of orientation to radians for pitch, yaw, and roll.
- [setOrientation(\_:duration:relative:)](dockaccessory/setorientation%28__duration_relative_%29-84z7i.md): Sets the position of each axis of orientation to radians for pitch, yaw, and roll.
- [track(\_:cameraInformation:image:)](dockaccessory/track%28__camerainformation_image_%29-3uuza.md): Automatically generate and send tracking vectors to the device.
- [track(\_:cameraInformation:image:)](dockaccessory/track%28__camerainformation_image_%29-82m61.md): Automatically generate and send tracking vectors to the device.

### Enumerations

- [DockAccessory.AccessoryEvent](dockaccessory/accessoryevent.md): An enumeration that represents an accessory event.
- [DockAccessory.BatteryChargeState](dockaccessory/batterychargestate.md): The charging state of an accessory battery
- [DockAccessory.TrackedSubjectType](dockaccessory/trackedsubjecttype.md): The subjects that the dock can track.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling the dock accessory

- [Controlling a DockKit accessory using your camera app](controlling-a-dockkit-accessory-using-your-camera-app.md): Follow subjects in real time using an iPhone that you mount on a DockKit accessory.
- [DockAccessoryManager](dockaccessorymanager.md): Observe the state of dock accessories and enable or disable system tracking.
- [DockKitError](dockkiterror.md): A list of errors that DockKit sends.
