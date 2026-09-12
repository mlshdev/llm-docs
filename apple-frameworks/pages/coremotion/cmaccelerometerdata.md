> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaccelerometerdata](https://developer.apple.com/documentation/coremotion/cmaccelerometerdata)

# CMAccelerometerData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A data sample from the device’s three accelerometers.

## Declaration

```swift
class CMAccelerometerData
```

<a id="overview"></a>

## Overview

An application accesses `CMAccelerometerData` objects through the block handler specified as the last parameter of the [startAccelerometerUpdates(to:withHandler:)](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md) method and through the [accelerometerData](cmmotionmanager/accelerometerdata.md) property, both declared by the `CMMotionManager` class. The superclass of `CMAccelerometerData`, [CMLogItem](cmlogitem.md), defines a [timestamp](cmlogitem/timestamp.md) property that records when the acceleration measurement was taken.

## Topics

### Accessing Accelerometer Data

- [acceleration](cmaccelerometerdata/acceleration.md): The acceleration measured by the accelerometer.
- [CMAcceleration](cmacceleration.md): The type of a structure containing 3-axis acceleration values.

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

### Inherited By

- [CMRecordedAccelerometerData](cmrecordedaccelerometerdata.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accelerometers

- [Getting raw accelerometer events](getting-raw-accelerometer-events.md): Retrieve data from the onboard accelerometers.
- [CMRecordedAccelerometerData](cmrecordedaccelerometerdata.md): A single piece of accelerometer data that was recorded by the device.
- [CMSensorRecorder](cmsensorrecorder.md): An object that gathers and retrieves accelerometer data from a device.
- [CMSensorDataList](cmsensordatalist.md): A list of the accelerometer data recorded by the system.

# CMAccelerometerData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A data sample from the device’s three accelerometers.

## Declaration

```objectivec
@interface CMAccelerometerData : CMLogItem
```

<a id="overview"></a>

## Overview

An application accesses `CMAccelerometerData` objects through the block handler specified as the last parameter of the [startAccelerometerUpdatesToQueue:withHandler:](cmmotionmanager/startaccelerometerupdates%28to_withhandler_%29.md) method and through the [accelerometerData](cmmotionmanager/accelerometerdata.md) property, both declared by the `CMMotionManager` class. The superclass of `CMAccelerometerData`, [CMLogItem](cmlogitem.md), defines a [timestamp](cmlogitem/timestamp.md) property that records when the acceleration measurement was taken.

## Topics

### Accessing Accelerometer Data

- [acceleration](cmaccelerometerdata/acceleration.md): The acceleration measured by the accelerometer.
- [CMAcceleration](cmacceleration.md): The type of a structure containing 3-axis acceleration values.

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

### Inherited By

- [CMRecordedAccelerometerData](cmrecordedaccelerometerdata.md)

## See Also

### Accelerometers

- [Getting raw accelerometer events](getting-raw-accelerometer-events.md): Retrieve data from the onboard accelerometers.
- [CMRecordedAccelerometerData](cmrecordedaccelerometerdata.md): A single piece of accelerometer data that was recorded by the device.
- [CMSensorRecorder](cmsensorrecorder.md): An object that gathers and retrieves accelerometer data from a device.
- [CMSensorDataList](cmsensordatalist.md): A list of the accelerometer data recorded by the system.
