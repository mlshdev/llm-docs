> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager](https://developer.apple.com/documentation/coremotion/cmmotionmanager)

# CMMotionManager (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The object for starting and managing motion services.

## Declaration

```swift
class CMMotionManager
```

## Mentioned In

- [Getting raw accelerometer events](getting-raw-accelerometer-events.md)
- [Getting raw gyroscope events](getting-raw-gyroscope-events.md)
- [Getting processed device-motion data](getting-processed-device-motion-data.md)

<a id="overview"></a>

## Overview

Use a [CMMotionManager](cmmotionmanager.md) object to start the services that report movement detected by the device’s onboard sensors. Use this object to receive four types of motion data:

- **Accelerometer data**, indicating the instantaneous acceleration of the device in three dimensional space.
- **Gyroscope data**, indicating the instantaneous rotation around the device’s three primary axes.
- **Magnetometer data**, indicating the device’s orientation relative to Earth’s magnetic field.
- **Device-motion data**, indicating key motion-related attributes such as the device’s user-initiated acceleration, its attitude, rotation rates, orientation relative to calibrated magnetic fields, and orientation relative to gravity. Core Motion’s sensor fusion algorithms provide this data.

The processed device-motion data gives the device’s attitude, rotation rate, calibrated magnetic fields, the direction of gravity, and the amount of acceleration the user contributes to the device.

> **Important**

>  Create only one [CMMotionManager](cmmotionmanager.md) object for your app. Multiple instances of this class can affect the rate at which the system receives data from the accelerometer and gyroscope.

You can receive live sensor data at a specified update interval, or you can let the sensors collect data and store it for retrieval later. With both of these approaches,  call the appropriate stop method ([stopAccelerometerUpdates()](cmmotionmanager/stopaccelerometerupdates%28%29.md), [stopGyroUpdates()](cmmotionmanager/stopgyroupdates%28%29.md), [stopMagnetometerUpdates()](cmmotionmanager/stopmagnetometerupdates%28%29.md), and [stopDeviceMotionUpdates()](cmmotionmanager/stopdevicemotionupdates%28%29.md)) when you no longer need the data.

<a id="Receive-regular-motion-updates"></a>

### Receive regular motion updates

To receive motion data at specific intervals, the app calls a start method that takes an operation queue (instance of [OperationQueue](../foundation/operationqueue.md)) and a block handler of a specific type for processing those updates.  The motion data is passed into the block handler. The frequency of updates is determined by the value of an interval property.

- **Accelerometer.** Set the [accelerometerUpdateInterval](cmmotionmanager/accelerometerupdateinterval.md) property to specify an update interval. Call  the [startAccelerometerUpdates(to:withHandler:)](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md) method, passing in a block of type [CMAccelerometerHandler](cmaccelerometerhandler.md). Accelerometer data is passed into the block as [CMAccelerometerData](cmaccelerometerdata.md) objects.
- **Gyroscope.** Set the [gyroUpdateInterval](cmmotionmanager/gyroupdateinterval.md) property to specify an update interval. Call  the [startGyroUpdates(to:withHandler:)](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md) method, passing in a block of type [CMGyroHandler](cmgyrohandler.md). Rotation-rate data is passed into the block as [CMGyroData](cmgyrodata.md) objects.
- **Magnetometer.** Set the [magnetometerUpdateInterval](cmmotionmanager/magnetometerupdateinterval.md) property to specify an update interval. Call the [startMagnetometerUpdates(to:withHandler:)](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md) method, passing a block of type [CMMagnetometerHandler](cmmagnetometerhandler.md). Magnetic-field data is passed into the block as [CMMagnetometerData](cmmagnetometerdata.md) objects.
- **Device motion.** Set the [deviceMotionUpdateInterval](cmmotionmanager/devicemotionupdateinterval.md) property to specify an update interval. Call the [startDeviceMotionUpdates(using:)](cmmotionmanager/startdevicemotionupdates%28using_%29.md)or [startDeviceMotionUpdates(using:to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md) or [startDeviceMotionUpdates(to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md) method, passing in a block of type [CMDeviceMotionHandler](cmdevicemotionhandler.md). With the former method, you can specify a reference frame to be used for the attitude estimates. Rotation-rate data is passed into the block as [CMDeviceMotion](cmdevicemotion.md) objects.

<a id="Sample-motion-data-periodically"></a>

### Sample motion data periodically

To sample motion data periodically, start a motion service using a method that takes no parameters and periodically access the properties of the [CMMotionManager](cmmotionmanager.md). This approach is the recommended approach for apps such as games. Handling accelerometer data in a block introduces additional overhead, and most game apps are only interested in the latest sample of motion data when they render a frame.

- **Accelerometer.** Call [startAccelerometerUpdates()](cmmotionmanager/startaccelerometerupdates%28%29.md) to begin updates and periodically access [CMAccelerometerData](cmaccelerometerdata.md) objects by reading the [accelerometerData](cmmotionmanager/accelerometerdata.md) property.
- **Gyroscope.** Call [startGyroUpdates()](cmmotionmanager/startgyroupdates%28%29.md) to begin updates and periodically access [CMGyroData](cmgyrodata.md) objects by reading the [gyroData](cmmotionmanager/gyrodata.md) property.
- **Magnetometer.** Call [startMagnetometerUpdates()](cmmotionmanager/startmagnetometerupdates%28%29.md) to begin updates and periodically access [CMMagnetometerData](cmmagnetometerdata.md) objects by reading the [magnetometerData](cmmotionmanager/magnetometerdata.md) property.
- **Device motion.** Call the [startDeviceMotionUpdates(using:)](cmmotionmanager/startdevicemotionupdates%28using_%29.md) or [startDeviceMotionUpdates()](cmmotionmanager/startdevicemotionupdates%28%29.md) method to begin updates and periodically access [CMDeviceMotion](cmdevicemotion.md) objects by reading the [deviceMotion](cmmotionmanager/devicemotion.md) property. The [startDeviceMotionUpdates(using:)](cmmotionmanager/startdevicemotionupdates%28using_%29.md) method lets you specify a reference frame for the attitude estimates.

<a id="Determine-hardware-availability-and-state"></a>

### Determine hardware availability and state

If a hardware feature (for example, a gyroscope) is not available on a device, calling a start method related to that feature has no effect. You can find out whether a hardware feature is available or active by checking the appropriate property; for example, for gyroscope data, you can check the value of the [isGyroAvailable](cmmotionmanager/isgyroavailable.md) or [isGyroActive](cmmotionmanager/isgyroactive.md) properties.

<a id="Identify-the-coordinate-axes-of-the-device"></a>

### Identify the coordinate axes of the device

To interpret accelerometer, gyroscope, or attitude information, you need to know the orientation of the device’s coordinate axes. The following illustration shows the positive x-axis, positive y-axis, and positive z-axis for motion-capable Apple devices.

![An illustration showing iPhone, iPad, Apple Watch, and Apple Vision Pro with labels representing the positive x-axis, positive y-axis, and positive z-axis on each device.](https://developer.apple.com/images/com.apple.coremotion/media-4302073@2x.png)

## Topics

### Determining the Availability of Services

- [isDeviceMotionAvailable](cmmotionmanager/isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.
- [isAccelerometerAvailable](cmmotionmanager/isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.
- [isGyroAvailable](cmmotionmanager/isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.
- [isMagnetometerAvailable](cmmotionmanager/ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.

### Determining Which Services Are Active

- [isDeviceMotionActive](cmmotionmanager/isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.
- [isAccelerometerActive](cmmotionmanager/isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.
- [isGyroActive](cmmotionmanager/isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.
- [isMagnetometerActive](cmmotionmanager/ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](cmmotionmanager/showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](cmmotionmanager/devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdates(using:to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdates(to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdates(using:)](cmmotionmanager/startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates()](cmmotionmanager/startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates()](cmmotionmanager/stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](cmmotionmanager/devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](cmdevicemotionhandler.md): The type of block callback for handling device-motion data.

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](cmmotionmanager/accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdates(to:withHandler:)](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates()](cmmotionmanager/startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates()](cmmotionmanager/stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](cmmotionmanager/accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.

### Managing Gyroscope Updates

- [gyroUpdateInterval](cmmotionmanager/gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdates(to:withHandler:)](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates()](cmmotionmanager/startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates()](cmmotionmanager/stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](cmmotionmanager/gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](cmgyrohandler.md): The type of block callback for handling gyroscope data.

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](cmmotionmanager/magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdates(to:withHandler:)](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates()](cmmotionmanager/startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates()](cmmotionmanager/stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](cmmotionmanager/magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.

### Accessing Attitude Reference Frames

- [attitudeReferenceFrame](cmmotionmanager/attitudereferenceframe.md): Returns either the reference frame currently being used or the default attitude reference frame.
- [availableAttitudeReferenceFrames()](cmmotionmanager/availableattitudereferenceframes%28%29.md): Returns a bitmask of the available reference frames for reporting the attitude of the current device.

### Understanding Errors

- [CMErrorDomain](cmerrordomain.md): The error domain for Core Motion.
- [CMError](cmerror.md): Defines motion errors.

### Instance Properties

- [deviceMotionBody](cmmotionmanager/devicemotionbody.md)

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

### Essentials

- [Core Motion updates](https://developer.apple.com/documentation/updates/coremotion): Learn about important changes to Core Motion.

# CMMotionManager (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The object for starting and managing motion services.

## Declaration

```objectivec
@interface CMMotionManager : NSObject
```

## Mentioned In

- [Getting raw accelerometer events](getting-raw-accelerometer-events.md)
- [Getting raw gyroscope events](getting-raw-gyroscope-events.md)
- [Getting processed device-motion data](getting-processed-device-motion-data.md)

<a id="overview"></a>

## Overview

Use a [CMMotionManager](cmmotionmanager.md) object to start the services that report movement detected by the device’s onboard sensors. Use this object to receive four types of motion data:

- **Accelerometer data**, indicating the instantaneous acceleration of the device in three dimensional space.
- **Gyroscope data**, indicating the instantaneous rotation around the device’s three primary axes.
- **Magnetometer data**, indicating the device’s orientation relative to Earth’s magnetic field.
- **Device-motion data**, indicating key motion-related attributes such as the device’s user-initiated acceleration, its attitude, rotation rates, orientation relative to calibrated magnetic fields, and orientation relative to gravity. Core Motion’s sensor fusion algorithms provide this data.

The processed device-motion data gives the device’s attitude, rotation rate, calibrated magnetic fields, the direction of gravity, and the amount of acceleration the user contributes to the device.

> **Important**

>  Create only one [CMMotionManager](cmmotionmanager.md) object for your app. Multiple instances of this class can affect the rate at which the system receives data from the accelerometer and gyroscope.

You can receive live sensor data at a specified update interval, or you can let the sensors collect data and store it for retrieval later. With both of these approaches,  call the appropriate stop method ([stopAccelerometerUpdates](cmmotionmanager/stopaccelerometerupdates%28%29.md), [stopGyroUpdates](cmmotionmanager/stopgyroupdates%28%29.md), [stopMagnetometerUpdates](cmmotionmanager/stopmagnetometerupdates%28%29.md), and [stopDeviceMotionUpdates](cmmotionmanager/stopdevicemotionupdates%28%29.md)) when you no longer need the data.

<a id="Receive-regular-motion-updates"></a>

### Receive regular motion updates

To receive motion data at specific intervals, the app calls a start method that takes an operation queue (instance of [NSOperationQueue](../foundation/operationqueue.md)) and a block handler of a specific type for processing those updates.  The motion data is passed into the block handler. The frequency of updates is determined by the value of an interval property.

- **Accelerometer.** Set the [accelerometerUpdateInterval](cmmotionmanager/accelerometerupdateinterval.md) property to specify an update interval. Call  the [startAccelerometerUpdatesToQueue:withHandler:](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md) method, passing in a block of type [CMAccelerometerHandler](cmaccelerometerhandler.md). Accelerometer data is passed into the block as [CMAccelerometerData](cmaccelerometerdata.md) objects.
- **Gyroscope.** Set the [gyroUpdateInterval](cmmotionmanager/gyroupdateinterval.md) property to specify an update interval. Call  the [startGyroUpdatesToQueue:withHandler:](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md) method, passing in a block of type [CMGyroHandler](cmgyrohandler.md). Rotation-rate data is passed into the block as [CMGyroData](cmgyrodata.md) objects.
- **Magnetometer.** Set the [magnetometerUpdateInterval](cmmotionmanager/magnetometerupdateinterval.md) property to specify an update interval. Call the [startMagnetometerUpdatesToQueue:withHandler:](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md) method, passing a block of type [CMMagnetometerHandler](cmmagnetometerhandler.md). Magnetic-field data is passed into the block as [CMMagnetometerData](cmmagnetometerdata.md) objects.
- **Device motion.** Set the [deviceMotionUpdateInterval](cmmotionmanager/devicemotionupdateinterval.md) property to specify an update interval. Call the [startDeviceMotionUpdatesUsingReferenceFrame:](cmmotionmanager/startdevicemotionupdates%28using_%29.md)or [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md) or [startDeviceMotionUpdatesToQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md) method, passing in a block of type [CMDeviceMotionHandler](cmdevicemotionhandler.md). With the former method, you can specify a reference frame to be used for the attitude estimates. Rotation-rate data is passed into the block as [CMDeviceMotion](cmdevicemotion.md) objects.

<a id="Sample-motion-data-periodically"></a>

### Sample motion data periodically

To sample motion data periodically, start a motion service using a method that takes no parameters and periodically access the properties of the [CMMotionManager](cmmotionmanager.md). This approach is the recommended approach for apps such as games. Handling accelerometer data in a block introduces additional overhead, and most game apps are only interested in the latest sample of motion data when they render a frame.

- **Accelerometer.** Call [startAccelerometerUpdates](cmmotionmanager/startaccelerometerupdates%28%29.md) to begin updates and periodically access [CMAccelerometerData](cmaccelerometerdata.md) objects by reading the [accelerometerData](cmmotionmanager/accelerometerdata.md) property.
- **Gyroscope.** Call [startGyroUpdates](cmmotionmanager/startgyroupdates%28%29.md) to begin updates and periodically access [CMGyroData](cmgyrodata.md) objects by reading the [gyroData](cmmotionmanager/gyrodata.md) property.
- **Magnetometer.** Call [startMagnetometerUpdates](cmmotionmanager/startmagnetometerupdates%28%29.md) to begin updates and periodically access [CMMagnetometerData](cmmagnetometerdata.md) objects by reading the [magnetometerData](cmmotionmanager/magnetometerdata.md) property.
- **Device motion.** Call the [startDeviceMotionUpdatesUsingReferenceFrame:](cmmotionmanager/startdevicemotionupdates%28using_%29.md) or [startDeviceMotionUpdates](cmmotionmanager/startdevicemotionupdates%28%29.md) method to begin updates and periodically access [CMDeviceMotion](cmdevicemotion.md) objects by reading the [deviceMotion](cmmotionmanager/devicemotion.md) property. The [startDeviceMotionUpdatesUsingReferenceFrame:](cmmotionmanager/startdevicemotionupdates%28using_%29.md) method lets you specify a reference frame for the attitude estimates.

<a id="Determine-hardware-availability-and-state"></a>

### Determine hardware availability and state

If a hardware feature (for example, a gyroscope) is not available on a device, calling a start method related to that feature has no effect. You can find out whether a hardware feature is available or active by checking the appropriate property; for example, for gyroscope data, you can check the value of the [gyroAvailable](cmmotionmanager/isgyroavailable.md) or [gyroActive](cmmotionmanager/isgyroactive.md) properties.

<a id="Identify-the-coordinate-axes-of-the-device"></a>

### Identify the coordinate axes of the device

To interpret accelerometer, gyroscope, or attitude information, you need to know the orientation of the device’s coordinate axes. The following illustration shows the positive x-axis, positive y-axis, and positive z-axis for motion-capable Apple devices.

![An illustration showing iPhone, iPad, Apple Watch, and Apple Vision Pro with labels representing the positive x-axis, positive y-axis, and positive z-axis on each device.](https://developer.apple.com/images/com.apple.coremotion/media-4302073@2x.png)

## Topics

### Determining the Availability of Services

- [deviceMotionAvailable](cmmotionmanager/isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.
- [accelerometerAvailable](cmmotionmanager/isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.
- [gyroAvailable](cmmotionmanager/isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.
- [magnetometerAvailable](cmmotionmanager/ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.

### Determining Which Services Are Active

- [deviceMotionActive](cmmotionmanager/isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.
- [accelerometerActive](cmmotionmanager/isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.
- [gyroActive](cmmotionmanager/isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.
- [magnetometerActive](cmmotionmanager/ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](cmmotionmanager/showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](cmmotionmanager/devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdatesToQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:](cmmotionmanager/startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates](cmmotionmanager/startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates](cmmotionmanager/stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](cmmotionmanager/devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](cmdevicemotionhandler.md): The type of block callback for handling device-motion data.

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](cmmotionmanager/accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdatesToQueue:withHandler:](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates](cmmotionmanager/startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [stopAccelerometerUpdates](cmmotionmanager/stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](cmmotionmanager/accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.

### Managing Gyroscope Updates

- [gyroUpdateInterval](cmmotionmanager/gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdatesToQueue:withHandler:](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates](cmmotionmanager/startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates](cmmotionmanager/stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](cmmotionmanager/gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](cmgyrohandler.md): The type of block callback for handling gyroscope data.

### Managing Magnetometer Updates

- [magnetometerUpdateInterval](cmmotionmanager/magnetometerupdateinterval.md): The interval, in seconds, at which the system delivers magnetometer data to the block handler.
- [startMagnetometerUpdatesToQueue:withHandler:](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md): Starts magnetometer updates on an operation queue and with a specified handler.
- [startMagnetometerUpdates](cmmotionmanager/startmagnetometerupdates%28%29.md): Starts magnetometer updates without a block handler.
- [stopMagnetometerUpdates](cmmotionmanager/stopmagnetometerupdates%28%29.md): Stops magnetometer updates.
- [magnetometerData](cmmotionmanager/magnetometerdata.md): The latest sample of magnetometer data.
- [CMMagnetometerHandler](cmmagnetometerhandler.md): The type of block callback for handling magnetometer data.

### Accessing Attitude Reference Frames

- [attitudeReferenceFrame](cmmotionmanager/attitudereferenceframe.md): Returns either the reference frame currently being used or the default attitude reference frame.
- [availableAttitudeReferenceFrames](cmmotionmanager/availableattitudereferenceframes%28%29.md): Returns a bitmask of the available reference frames for reporting the attitude of the current device.

### Understanding Errors

- [CMErrorDomain](cmerrordomain.md): The error domain for Core Motion.
- [CMError](cmerror.md): Defines motion errors.

### Instance Properties

- [deviceMotionBody](cmmotionmanager/devicemotionbody.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
