> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphonemotionmanager](https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanager)

# CMHeadphoneMotionManager (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

An object that starts and manages headphone motion services.

## Declaration

```swift
class CMHeadphoneMotionManager
```

## Mentioned In

- [Getting processed device-motion data](getting-processed-device-motion-data.md)

<a id="overview"></a>

## Overview

This class delivers headphone motion updates to your app. Use an instance of the manager to determine if the device supports motion, and to start and stop updates. Adopt the [CMHeadphoneMotionManagerDelegate](cmheadphonemotionmanagerdelegate.md) protocol to receive and respond to motion updates. Before using this class, check [isDeviceMotionAvailable](cmheadphonemotionmanager/isdevicemotionavailable.md) to make sure the feature is available.

> **Important**

>  In iOS and macOS, include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file. If this key is absent, the system crashes your app when you start device-motion updates.

<a id="Identify-the-coordinate-axes"></a>

### Identify the coordinate axes

To interpret attitude data, you need to know the orientation of the device’s coordinate axes. The following illustration shows the positive x-axis, positive y-axis, and positive z-axis for motion-capable Apple headphones.

![An illustration showing AirPods Max and AirPods Pro with labels representing the positive x-axis, positive y-axis, and positive z-axis on each device.](https://developer.apple.com/images/com.apple.coremotion/media-4302074@2x.png)

## Topics

### Checking Availability

- [isDeviceMotionAvailable](cmheadphonemotionmanager/isdevicemotionavailable.md): A Boolean value that indicates whether the current device supports the headphone motion manager.
- [isDeviceMotionActive](cmheadphonemotionmanager/isdevicemotionactive.md): A Boolean value that indicates whether the headphone motion manager is active.
- [isConnectionStatusActive](cmheadphonemotionmanager/isconnectionstatusactive.md)
- [authorizationStatus()](cmheadphonemotionmanager/authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone motion.

### Starting and Stopping Updates

- [startDeviceMotionUpdates()](cmheadphonemotionmanager/startdevicemotionupdates%28%29.md): Starts device-motion updates.
- [startDeviceMotionUpdates(to:withHandler:)](cmheadphonemotionmanager/startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates with a handler.
- [startConnectionStatusUpdates()](cmheadphonemotionmanager/startconnectionstatusupdates%28%29.md)
- [stopDeviceMotionUpdates()](cmheadphonemotionmanager/stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [stopConnectionStatusUpdates()](cmheadphonemotionmanager/stopconnectionstatusupdates%28%29.md)

### Getting the Delegate

- [delegate](cmheadphonemotionmanager/delegate.md): The object that receives headphone motion manager events.
- [CMHeadphoneMotionManagerDelegate](cmheadphonemotionmanagerdelegate.md): A set of methods that defines an interface for connecting and disconnecting headphones.

### Getting Device-Motion Information

- [deviceMotion](cmheadphonemotionmanager/devicemotion.md): The latest device-motion data.

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

### Device motion

- [Getting processed device-motion data](getting-processed-device-motion-data.md): Retrieve motion data that the system processed to remove environmental bias, such as the effects of gravity.
- [CMDeviceMotion](cmdevicemotion.md): Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.
- [CMAttitude](cmattitude.md): The device’s orientation relative to a known frame of reference at a point in time.
- [CMAttitudeReferenceFrame](cmattitudereferenceframe.md): Constants that indicate the frame of reference for attitude-related motion data.

# CMHeadphoneMotionManager (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

An object that starts and manages headphone motion services.

## Declaration

```objectivec
@interface CMHeadphoneMotionManager : NSObject
```

## Mentioned In

- [Getting processed device-motion data](getting-processed-device-motion-data.md)

<a id="overview"></a>

## Overview

This class delivers headphone motion updates to your app. Use an instance of the manager to determine if the device supports motion, and to start and stop updates. Adopt the [CMHeadphoneMotionManagerDelegate](cmheadphonemotionmanagerdelegate.md) protocol to receive and respond to motion updates. Before using this class, check [deviceMotionAvailable](cmheadphonemotionmanager/isdevicemotionavailable.md) to make sure the feature is available.

> **Important**

>  In iOS and macOS, include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file. If this key is absent, the system crashes your app when you start device-motion updates.

<a id="Identify-the-coordinate-axes"></a>

### Identify the coordinate axes

To interpret attitude data, you need to know the orientation of the device’s coordinate axes. The following illustration shows the positive x-axis, positive y-axis, and positive z-axis for motion-capable Apple headphones.

![An illustration showing AirPods Max and AirPods Pro with labels representing the positive x-axis, positive y-axis, and positive z-axis on each device.](https://developer.apple.com/images/com.apple.coremotion/media-4302074@2x.png)

## Topics

### Checking Availability

- [deviceMotionAvailable](cmheadphonemotionmanager/isdevicemotionavailable.md): A Boolean value that indicates whether the current device supports the headphone motion manager.
- [deviceMotionActive](cmheadphonemotionmanager/isdevicemotionactive.md): A Boolean value that indicates whether the headphone motion manager is active.
- [connectionStatusActive](cmheadphonemotionmanager/isconnectionstatusactive.md)
- [authorizationStatus](cmheadphonemotionmanager/authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone motion.

### Starting and Stopping Updates

- [startDeviceMotionUpdates](cmheadphonemotionmanager/startdevicemotionupdates%28%29.md): Starts device-motion updates.
- [startDeviceMotionUpdatesToQueue:withHandler:](cmheadphonemotionmanager/startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates with a handler.
- [startConnectionStatusUpdates](cmheadphonemotionmanager/startconnectionstatusupdates%28%29.md)
- [stopDeviceMotionUpdates](cmheadphonemotionmanager/stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [stopConnectionStatusUpdates](cmheadphonemotionmanager/stopconnectionstatusupdates%28%29.md)

### Getting the Delegate

- [delegate](cmheadphonemotionmanager/delegate.md): The object that receives headphone motion manager events.
- [CMHeadphoneMotionManagerDelegate](cmheadphonemotionmanagerdelegate.md): A set of methods that defines an interface for connecting and disconnecting headphones.

### Getting Device-Motion Information

- [deviceMotion](cmheadphonemotionmanager/devicemotion.md): The latest device-motion data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Device motion

- [Getting processed device-motion data](getting-processed-device-motion-data.md): Retrieve motion data that the system processed to remove environmental bias, such as the effects of gravity.
- [CMDeviceMotion](cmdevicemotion.md): Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.
- [CMAttitude](cmattitude.md): The device’s orientation relative to a known frame of reference at a point in time.
- [CMAttitudeReferenceFrame](cmattitudereferenceframe.md): Constants that indicate the frame of reference for attitude-related motion data.
