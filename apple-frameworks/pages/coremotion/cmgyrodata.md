> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmgyrodata](https://developer.apple.com/documentation/coremotion/cmgyrodata)

# CMGyroData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A single measurement of the device’s rotation rate.

## Declaration

```swift
class CMGyroData
```

<a id="overview"></a>

## Overview

An application receives or samples `CMGyroData` objects at regular intervals after calling the [startGyroUpdates(to:withHandler:)](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md) method or the [startGyroUpdates()](cmmotionmanager/startgyroupdates%28%29.md) method of the [CMMotionManager](cmmotionmanager.md) class.

## Topics

### Getting the Rotation Rate

- [rotationRate](cmgyrodata/rotationrate.md): The rotation rate as measured by the device’s gyroscope.
- [CMRotationRate](cmrotationrate.md): The type of structures representing a measurement of rotation rate.
- [CMRotationRateData](cmrotationratedata.md): A data object that contains a single rotation-rate measurement.
- [CMRecordedRotationRateData](cmrecordedrotationratedata.md): A data object that contains a single rotation-rate measurement at a specific time.

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

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

### Gyroscopes

- [Getting raw gyroscope events](getting-raw-gyroscope-events.md): Retrieve data from the onboard gyroscopes.

# CMGyroData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A single measurement of the device’s rotation rate.

## Declaration

```objectivec
@interface CMGyroData : CMLogItem
```

<a id="overview"></a>

## Overview

An application receives or samples `CMGyroData` objects at regular intervals after calling the [startGyroUpdatesToQueue:withHandler:](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md) method or the [startGyroUpdates](cmmotionmanager/startgyroupdates%28%29.md) method of the [CMMotionManager](cmmotionmanager.md) class.

## Topics

### Getting the Rotation Rate

- [rotationRate](cmgyrodata/rotationrate.md): The rotation rate as measured by the device’s gyroscope.
- [CMRotationRate](cmrotationrate.md): The type of structures representing a measurement of rotation rate.
- [CMRotationRateData](cmrotationratedata.md): A data object that contains a single rotation-rate measurement.
- [CMRecordedRotationRateData](cmrecordedrotationratedata.md): A data object that contains a single rotation-rate measurement at a specific time.

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

## See Also

### Gyroscopes

- [Getting raw gyroscope events](getting-raw-gyroscope-events.md): Retrieve data from the onboard gyroscopes.
