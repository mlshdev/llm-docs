> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmrecordedpressuredata](https://developer.apple.com/documentation/coremotion/cmrecordedpressuredata)

# CMRecordedPressureData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

A recorded measurement of pressure data.

## Declaration

```swift
class CMRecordedPressureData
```

<a id="overview"></a>

## Overview

Use SensorKit’s [ambientPressure](https://developer.apple.com/documentation/sensorkit/srsensor/ambientpressure) sensor to read ambient pressure data.

## Topics

### Instance Properties

- [identifier](cmrecordedpressuredata/identifier.md): A value that uniquely identifies this measurement.
- [startDate](cmrecordedpressuredata/startdate.md): The time and date when the system recorded the measurement.

## Relationships

### Inherits From

- [CMAmbientPressureData](cmambientpressuredata.md)

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

### Ambient pressure

- [CMAmbientPressureData](cmambientpressuredata.md): A measurement of the ambient pressure and temperature.

# CMRecordedPressureData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

A recorded measurement of pressure data.

## Declaration

```objectivec
@interface CMRecordedPressureData : CMAmbientPressureData
```

<a id="overview"></a>

## Overview

Use SensorKit’s [SRSensorAmbientPressure](https://developer.apple.com/documentation/sensorkit/srsensor/ambientpressure) sensor to read ambient pressure data.

## Topics

### Instance Properties

- [identifier](cmrecordedpressuredata/identifier.md): A value that uniquely identifies this measurement.
- [startDate](cmrecordedpressuredata/startdate.md): The time and date when the system recorded the measurement.

## Relationships

### Inherits From

- [CMAmbientPressureData](cmambientpressuredata.md)

## See Also

### Ambient pressure

- [CMAmbientPressureData](cmambientpressuredata.md): A measurement of the ambient pressure and temperature.
