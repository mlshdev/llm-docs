> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmlogitem](https://developer.apple.com/documentation/coremotion/cmlogitem)

# CMLogItem (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The base class for all motion-related data objects.

## Declaration

```swift
class CMLogItem
```

<a id="overview"></a>

## Overview

The `CMLogItem` class defines a read-only [timestamp](cmlogitem/timestamp.md) property that records the time a motion-event measurement was taken.

## Topics

### Getting the Time of the Event

- [timestamp](cmlogitem/timestamp.md): The time when the logged item is valid.

### Initializers

- [init(coder:)](cmlogitem/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CMAbsoluteAltitudeData](cmabsolutealtitudedata.md)
- [CMAccelerometerData](cmaccelerometerdata.md)
- [CMAltitudeData](cmaltitudedata.md)
- [CMAmbientPressureData](cmambientpressuredata.md)
- [CMDeviceMotion](cmdevicemotion.md)
- [CMGyroData](cmgyrodata.md)
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md)
- [CMMagnetometerData](cmmagnetometerdata.md)
- [CMMotionActivity](cmmotionactivity.md)
- [CMRotationRateData](cmrotationratedata.md)

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

# CMLogItem (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The base class for all motion-related data objects.

## Declaration

```objectivec
@interface CMLogItem : NSObject
```

<a id="overview"></a>

## Overview

The `CMLogItem` class defines a read-only [timestamp](cmlogitem/timestamp.md) property that records the time a motion-event measurement was taken.

## Topics

### Getting the Time of the Event

- [timestamp](cmlogitem/timestamp.md): The time when the logged item is valid.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CMAbsoluteAltitudeData](cmabsolutealtitudedata.md)
- [CMAccelerometerData](cmaccelerometerdata.md)
- [CMAltitudeData](cmaltitudedata.md)
- [CMAmbientPressureData](cmambientpressuredata.md)
- [CMDeviceMotion](cmdevicemotion.md)
- [CMGyroData](cmgyrodata.md)
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md)
- [CMMagnetometerData](cmmagnetometerdata.md)
- [CMMotionActivity](cmmotionactivity.md)
- [CMRotationRateData](cmrotationratedata.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
