> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmrecordedaccelerometerdata](https://developer.apple.com/documentation/coremotion/cmrecordedaccelerometerdata)

# CMRecordedAccelerometerData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A single piece of accelerometer data that was recorded by the device.

## Declaration

```swift
class CMRecordedAccelerometerData
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. Instead, you use a [CMSensorRecorder](cmsensorrecorder.md) object to retrieve already recorded data from the system.

## Topics

### Getting the Accelerometer Data

- [startDate](cmrecordedaccelerometerdata/startdate.md): The wall clock time when the sensor sample was recorded.
- [identifier](cmrecordedaccelerometerdata/identifier.md): The unique identifier for the accelerometer data.

## Relationships

### Inherits From

- [CMAccelerometerData](cmaccelerometerdata.md)

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
- [CMAccelerometerData](cmaccelerometerdata.md): A data sample from the device’s three accelerometers.
- [CMSensorRecorder](cmsensorrecorder.md): An object that gathers and retrieves accelerometer data from a device.
- [CMSensorDataList](cmsensordatalist.md): A list of the accelerometer data recorded by the system.

# CMRecordedAccelerometerData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A single piece of accelerometer data that was recorded by the device.

## Declaration

```objectivec
@interface CMRecordedAccelerometerData : CMAccelerometerData
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. Instead, you use a [CMSensorRecorder](cmsensorrecorder.md) object to retrieve already recorded data from the system.

## Topics

### Getting the Accelerometer Data

- [startDate](cmrecordedaccelerometerdata/startdate.md): The wall clock time when the sensor sample was recorded.
- [identifier](cmrecordedaccelerometerdata/identifier.md): The unique identifier for the accelerometer data.

## Relationships

### Inherits From

- [CMAccelerometerData](cmaccelerometerdata.md)

## See Also

### Accelerometers

- [Getting raw accelerometer events](getting-raw-accelerometer-events.md): Retrieve data from the onboard accelerometers.
- [CMAccelerometerData](cmaccelerometerdata.md): A data sample from the device’s three accelerometers.
- [CMSensorRecorder](cmsensorrecorder.md): An object that gathers and retrieves accelerometer data from a device.
- [CMSensorDataList](cmsensordatalist.md): A list of the accelerometer data recorded by the system.
