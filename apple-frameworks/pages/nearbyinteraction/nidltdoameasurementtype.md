> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurementtype](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurementtype)

# NIDLTDOAMeasurementType (Swift)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The possible phases of downlink positioning signals.

## Declaration

```swift
enum NIDLTDOAMeasurementType
```

<a id="overview"></a>

## Overview

The [NIDLTDOAMeasurement](nidltdoameasurement.md) class [measurementType](nidltdoameasurement/measurementtype.md) property is of this type.

## Topics

### Identifying the measurement type

- [NIDLTDOAMeasurementType.poll](nidltdoameasurementtype/poll.md): A type that indicates the measurement derives from an initiating anchor’s first message.
- [NIDLTDOAMeasurementType.response](nidltdoameasurementtype/response.md): A type that indicates the measurement derives from responder anchors’ messages.
- [NIDLTDOAMeasurementType.final](nidltdoameasurementtype/final.md): A type that indicates the measurement derives from an initial anchor’s last message.

### Creating a measurement type

- [init(rawValue:)](nidltdoameasurementtype/init%28rawvalue_%29.md): Creates a measurement type from the given underlying value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Measurements

- [NIDLTDOAMeasurement](nidltdoameasurement.md): Information from a Downlink Time-Difference-of-Arrival anchor that you use to derive a range estimate.
- [NIDLTDOACoordinatesType](nidltdoacoordinatestype.md): The possible coordinate types for Downlink Time-Difference-of-Arrival measurement updates.

# NIDLTDOAMeasurementType (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

The possible phases of downlink positioning signals.

## Declaration

```objectivec
enum NIDLTDOAMeasurementType : NSInteger;
```

<a id="overview"></a>

## Overview

The [NIDLTDOAMeasurement](nidltdoameasurement.md) class [measurementType](nidltdoameasurement/measurementtype.md) property is of this type.

## Topics

### Identifying the measurement type

- [NIDLTDOAMeasurementTypePoll](nidltdoameasurementtype/poll.md): A type that indicates the measurement derives from an initiating anchor’s first message.
- [NIDLTDOAMeasurementTypeResponse](nidltdoameasurementtype/response.md): A type that indicates the measurement derives from responder anchors’ messages.
- [NIDLTDOAMeasurementTypeFinal](nidltdoameasurementtype/final.md): A type that indicates the measurement derives from an initial anchor’s last message.

## See Also

### Measurements

- [NIDLTDOAMeasurement](nidltdoameasurement.md): Information from a Downlink Time-Difference-of-Arrival anchor that you use to derive a range estimate.
- [NIDLTDOACoordinatesType](nidltdoacoordinatestype.md): The possible coordinate types for Downlink Time-Difference-of-Arrival measurement updates.
