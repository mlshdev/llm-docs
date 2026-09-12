> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltitudedata](https://developer.apple.com/documentation/coremotion/cmaltitudedata)

# CMAltitudeData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Data for a recorded change in altitude.

## Declaration

```swift
class CMAltitudeData
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. When you want to receive altimeter changes, create an instance of the [CMAltimeter](cmaltimeter.md) class and use that object to query for events or to start the delivery of events. The altimeter object creates new instances of this class at appropriate times and delivers them to the handler you specify.

## Topics

### Getting the Altitude Data

- [relativeAltitude](cmaltitudedata/relativealtitude.md): The change in altitude (in meters) since the first reported event.
- [pressure](cmaltitudedata/pressure.md): The recorded pressure, in kilopascals.

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
- [CMAbsoluteAltitudeData](cmabsolutealtitudedata.md): Data that records a change in absolute altitude.

# CMAltitudeData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Data for a recorded change in altitude.

## Declaration

```objectivec
@interface CMAltitudeData : CMLogItem
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. When you want to receive altimeter changes, create an instance of the [CMAltimeter](cmaltimeter.md) class and use that object to query for events or to start the delivery of events. The altimeter object creates new instances of this class at appropriate times and delivers them to the handler you specify.

## Topics

### Getting the Altitude Data

- [relativeAltitude](cmaltitudedata/relativealtitude.md): The change in altitude (in meters) since the first reported event.
- [pressure](cmaltitudedata/pressure.md): The recorded pressure, in kilopascals.

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

## See Also

### Altitude data

- [CMAltimeter](cmaltimeter.md): An object that initiates the delivery of altitude-related changes.
- [CMAbsoluteAltitudeData](cmabsolutealtitudedata.md): Data that records a change in absolute altitude.
