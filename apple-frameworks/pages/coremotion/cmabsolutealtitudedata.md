> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmabsolutealtitudedata](https://developer.apple.com/documentation/coremotion/cmabsolutealtitudedata)

# CMAbsoluteAltitudeData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

Data that records a change in absolute altitude.

## Declaration

```swift
class CMAbsoluteAltitudeData
```

<a id="overview"></a>

## Overview

Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## Topics

### Accessing Altitude Data

- [altitude](cmabsolutealtitudedata/altitude.md): The absolute altitude of the device relative to sea level, measured in meters.
- [accuracy](cmabsolutealtitudedata/accuracy.md): The estimated uncertainty of the altimeter in meters, based on one standard deviation.
- [precision](cmabsolutealtitudedata/precision.md): The recommended resolution for the altitude, in meters.

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

### Altitude data

- [CMAltimeter](cmaltimeter.md): An object that initiates the delivery of altitude-related changes.
- [CMAltitudeData](cmaltitudedata.md): Data for a recorded change in altitude.

# CMAbsoluteAltitudeData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

Data that records a change in absolute altitude.

## Declaration

```objectivec
@interface CMAbsoluteAltitudeData : CMLogItem
```

<a id="overview"></a>

## Overview

Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## Topics

### Accessing Altitude Data

- [altitude](cmabsolutealtitudedata/altitude.md): The absolute altitude of the device relative to sea level, measured in meters.
- [accuracy](cmabsolutealtitudedata/accuracy.md): The estimated uncertainty of the altimeter in meters, based on one standard deviation.
- [precision](cmabsolutealtitudedata/precision.md): The recommended resolution for the altitude, in meters.

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

## See Also

### Altitude data

- [CMAltimeter](cmaltimeter.md): An object that initiates the delivery of altitude-related changes.
- [CMAltitudeData](cmaltitudedata.md): Data for a recorded change in altitude.
