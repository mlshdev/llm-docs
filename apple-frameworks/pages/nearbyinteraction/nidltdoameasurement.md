> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement)

# NIDLTDOAMeasurement (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Information from a Downlink Time-Difference-of-Arrival anchor that you use to derive a range estimate.

## Declaration

```swift
class NIDLTDOAMeasurement
```

<a id="overview"></a>

## Overview

Your app runs on a receiver device that fields messages from nearby physical base stations, or *anchors*. The framework processes the messages into instances of this class and provides them to your app through the  [session(\_:didUpdateDLTDOA:)](nisessiondelegate/session%28__didupdatedltdoa_%29.md) callback. Your app analyzes the measurements to calculate the receiver’s position relative to the anchors in the tracked area.

Only sessions that run a [NIDLTDOAConfiguration](nidltdoaconfiguration.md) receive Downlink Time-Difference-of-Arrival measurements.

## Topics

### Identifying the anchor

- [address](nidltdoameasurement/address.md): A value that uniquely identifies an anchor in a tracked area.
- [clusterInitiatorAddress](nidltdoameasurement/clusterinitiatoraddress.md): The address of the initiator anchor within the same cluster.

### Locating the anchor

- [coordinates](nidltdoameasurement/coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [coordinatesType](nidltdoameasurement/coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [signalStrength](nidltdoameasurement/signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [floorElevation](nidltdoameasurement/floorelevation-swift.property.md): The floor elevation information for the anchor, if available.
- [NIDLTDOAMeasurement.FloorElevation](nidltdoameasurement/floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.

### Assessing time difference

- [receiveTime](nidltdoameasurement/receivetime.md): A timestamp, in seconds, for the time that the device receives the measurement.
- [transmitTime](nidltdoameasurement/transmittime.md): A transmission timestamp, in seconds, for the received message.

### Evaluating the message

- [measurementType](nidltdoameasurement/measurementtype.md): The type of anchor message that the measurement derives from.
- [carrierFrequencyOffset](nidltdoameasurement/carrierfrequencyoffset.md): The drift, as a ratio, across the frequencies of the receiver and the anchor.
- [responderClockFrequencyOffset](nidltdoameasurement/responderclockfrequencyoffset-8wu5r.md): The clock frequency offset of the responder anchor relative to the initiator anchor.

### Creating a measurement

- [init(coder:)](nidltdoameasurement/init%28coder_%29.md)

### Instance Properties

- [rawReceiveTime](nidltdoameasurement/rawreceivetime.md): Indicates the raw reception timestamp (in units of 15.65 picoseconds).
- [rawTransmitTime](nidltdoameasurement/rawtransmittime.md): Indicates the raw transmission timestamp (in units of 15.65 picoseconds).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Measurements

- [NIDLTDOACoordinatesType](nidltdoacoordinatestype.md): The possible coordinate types for Downlink Time-Difference-of-Arrival measurement updates.
- [NIDLTDOAMeasurementType](nidltdoameasurementtype.md): The possible phases of downlink positioning signals.

# NIDLTDOAMeasurement (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Information from a Downlink Time-Difference-of-Arrival anchor that you use to derive a range estimate.

## Declaration

```objectivec
@interface NIDLTDOAMeasurement : NSObject
```

<a id="overview"></a>

## Overview

Your app runs on a receiver device that fields messages from nearby physical base stations, or *anchors*. The framework processes the messages into instances of this class and provides them to your app through the  [session:didUpdateDLTDOAMeasurements:](nisessiondelegate/session%28__didupdatedltdoa_%29.md) callback. Your app analyzes the measurements to calculate the receiver’s position relative to the anchors in the tracked area.

Only sessions that run a [NIDLTDOAConfiguration](nidltdoaconfiguration.md) receive Downlink Time-Difference-of-Arrival measurements.

## Topics

### Identifying the anchor

- [address](nidltdoameasurement/address.md): A value that uniquely identifies an anchor in a tracked area.
- [clusterInitiatorAddress](nidltdoameasurement/clusterinitiatoraddress.md): The address of the initiator anchor within the same cluster.

### Locating the anchor

- [coordinates](nidltdoameasurement/coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [coordinatesType](nidltdoameasurement/coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [signalStrength](nidltdoameasurement/signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [floorElevation](nidltdoameasurement/floorelevation-swift.property.md): The floor elevation information for the anchor, if available.
- [NIDLTDOAMeasurementFloorElevation](nidltdoameasurement/floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.

### Assessing time difference

- [receiveTime](nidltdoameasurement/receivetime.md): A timestamp, in seconds, for the time that the device receives the measurement.
- [transmitTime](nidltdoameasurement/transmittime.md): A transmission timestamp, in seconds, for the received message.

### Evaluating the message

- [measurementType](nidltdoameasurement/measurementtype.md): The type of anchor message that the measurement derives from.
- [carrierFrequencyOffset](nidltdoameasurement/carrierfrequencyoffset.md): The drift, as a ratio, across the frequencies of the receiver and the anchor.

### Instance Properties

- [rawReceiveTime](nidltdoameasurement/rawreceivetime.md): Indicates the raw reception timestamp (in units of 15.65 picoseconds).
- [rawTransmitTime](nidltdoameasurement/rawtransmittime.md): Indicates the raw transmission timestamp (in units of 15.65 picoseconds).
- [responderClockFrequencyOffset](nidltdoameasurement/responderclockfrequencyoffset-899dj.md): Indicates the clock frequency offset (CFO) fraction of the responder anchor relative to the initiator anchor (dimensionless). For example, a positive value means for every 1 clock cycle, the responder runs fewer cycles than initiator. Returns nil when measurementType is not NIDLTDOAMeasurementTypeResponse, or when the value is not available.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Measurements

- [NIDLTDOACoordinatesType](nidltdoacoordinatestype.md): The possible coordinate types for Downlink Time-Difference-of-Arrival measurement updates.
- [NIDLTDOAMeasurementType](nidltdoameasurementtype.md): The possible phases of downlink positioning signals.
