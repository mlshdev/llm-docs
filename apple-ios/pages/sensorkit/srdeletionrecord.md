> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeletionrecord](https://developer.apple.com/documentation/sensorkit/srdeletionrecord)

# SRDeletionRecord (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the reason the framework deletes samples.

## Declaration

```swift
class SRDeletionRecord
```

<a id="overview"></a>

## Overview

When there are gaps in a recorded sensor’s data, deletion records account for the occasions when the framework deliberately removes the records. A deletion record specifies the time range when records are unavailable (see [startTime](srdeletionrecord/starttime.md) and [endTime](srdeletionrecord/endtime.md)), and the [reason](srdeletionrecord/reason.md) for removal.

To access deletion records for a particular sensor, create a new reader by applying the `sr_sensorForDeletionRecordsFromSensor()` extension of [NSString](https://developer.apple.com/documentation/foundation/nsstring) to the source sensor.

```swift
let deletionRecordsReader = SRSensorReader(sensor: ambientLightSensor.rawValue.sr_sensorForDeletionRecordsFromSensor())
deletionRecordsReader.delegate = myAmbientLightDeletionRecordsDelegate
```

## Topics

### Accessing the Deletion Reason

- [reason](srdeletionrecord/reason.md): The reason the framework deletes samples.
- [SRDeletionReason](srdeletionreason.md): Reasons that the framework deletes samples.

### Accessing the Deletion Time

- [startTime](srdeletionrecord/starttime.md): The time the framework begins deleting samples.
- [endTime](srdeletionrecord/endtime.md): The time the framework finishes deleting samples.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SRDeletionRecord (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the reason the framework deletes samples.

## Declaration

```objectivec
@interface SRDeletionRecord : NSObject
```

<a id="overview"></a>

## Overview

When there are gaps in a recorded sensor’s data, deletion records account for the occasions when the framework deliberately removes the records. A deletion record specifies the time range when records are unavailable (see [startTime](srdeletionrecord/starttime.md) and [endTime](srdeletionrecord/endtime.md)), and the [reason](srdeletionrecord/reason.md) for removal.

To access deletion records for a particular sensor, create a new reader by applying the `sr_sensorForDeletionRecordsFromSensor()` extension of [NSString](https://developer.apple.com/documentation/foundation/nsstring) to the source sensor.

```swift
let deletionRecordsReader = SRSensorReader(sensor: ambientLightSensor.rawValue.sr_sensorForDeletionRecordsFromSensor())
deletionRecordsReader.delegate = myAmbientLightDeletionRecordsDelegate
```

## Topics

### Accessing the Deletion Reason

- [reason](srdeletionrecord/reason.md): The reason the framework deletes samples.
- [SRDeletionReason](srdeletionreason.md): Reasons that the framework deletes samples.

### Accessing the Deletion Time

- [startTime](srdeletionrecord/starttime.md): The time the framework begins deleting samples.
- [endTime](srdeletionrecord/endtime.md): The time the framework finishes deleting samples.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
