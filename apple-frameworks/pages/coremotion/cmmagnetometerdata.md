> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmagnetometerdata](https://developer.apple.com/documentation/coremotion/cmmagnetometerdata)

# CMMagnetometerData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Measurements of the Earth’s magnetic field relative to the device.

## Declaration

```swift
class CMMagnetometerData
```

<a id="overview"></a>

## Overview

Your application can obtain samples of magnetometer measurements, as represented by instances of this class, from the block handler of the [startMagnetometerUpdates(to:withHandler:)](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md) method or from the [magnetometerData](cmmotionmanager/magnetometerdata.md) property of the `CMMotionManager` class.

> **Note**

>  The [magnetometerData](cmmotionmanager/magnetometerdata.md) property of `CMMotionManager` provides a non-`nil` value only if you have called the `startMagnetometerUpdates()` method or the [startMagnetometerUpdates(to:withHandler:)](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md) method to start magnetometer updates.

## Topics

### Getting the Field Strength

- [magneticField](cmmagnetometerdata/magneticfield.md): Returns the magnetic field measured by the magnetometer.
- [CMMagneticField](cmmagneticfield.md): A structure containing 3-axis magnetometer data

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

# CMMagnetometerData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Measurements of the Earth’s magnetic field relative to the device.

## Declaration

```objectivec
@interface CMMagnetometerData : CMLogItem
```

<a id="overview"></a>

## Overview

Your application can obtain samples of magnetometer measurements, as represented by instances of this class, from the block handler of the [startMagnetometerUpdatesToQueue:withHandler:](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md) method or from the [magnetometerData](cmmotionmanager/magnetometerdata.md) property of the `CMMotionManager` class.

> **Note**

>  The [magnetometerData](cmmotionmanager/magnetometerdata.md) property of `CMMotionManager` provides a non-`nil` value only if you have called the `startMagnetometerUpdates()` method or the [startMagnetometerUpdatesToQueue:withHandler:](cmmotionmanager/startmagnetometerupdates%28to_withhandler_%29.md) method to start magnetometer updates.

## Topics

### Getting the Field Strength

- [magneticField](cmmagnetometerdata/magneticfield.md): Returns the magnetic field measured by the magnetometer.
- [CMMagneticField](cmmagneticfield.md): A structure containing 3-axis magnetometer data

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)
