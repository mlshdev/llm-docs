> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoacoordinatestype](https://developer.apple.com/documentation/nearbyinteraction/nidltdoacoordinatestype)

# NIDLTDOACoordinatesType (Swift)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The possible coordinate types for Downlink Time-Difference-of-Arrival measurement updates.

## Declaration

```swift
enum NIDLTDOACoordinatesType
```

<a id="overview"></a>

## Overview

The [NIDLTDOAMeasurement](nidltdoameasurement.md) class [coordinates](nidltdoameasurement/coordinates.md) property is of this type.

For more information on Downlink Time-Difference-of-Arrival measurements, see [NIDLTDOAConfiguration](nidltdoaconfiguration.md).

## Topics

### Identifying a coordinate type

- [NIDLTDOACoordinatesType.geodetic](nidltdoacoordinatestype/geodetic.md): A coordinate type that specifies a latitude, longitude, and altitude triplet.
- [NIDLTDOACoordinatesType.relative](nidltdoacoordinatestype/relative.md): A coordinate type that specifies a 3D Cartesian triplet.

### Creating a coordinate type

- [init(rawValue:)](nidltdoacoordinatestype/init%28rawvalue_%29.md): Initializes a coordinate type for a Downlink Time-Difference-of-Arrival measurement.

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
- [NIDLTDOAMeasurementType](nidltdoameasurementtype.md): The possible phases of downlink positioning signals.

# NIDLTDOACoordinatesType (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

The possible coordinate types for Downlink Time-Difference-of-Arrival measurement updates.

## Declaration

```objectivec
enum NIDLTDOACoordinatesType : NSInteger;
```

<a id="overview"></a>

## Overview

The [NIDLTDOAMeasurement](nidltdoameasurement.md) class [coordinates](nidltdoameasurement/coordinates.md) property is of this type.

For more information on Downlink Time-Difference-of-Arrival measurements, see [NIDLTDOAConfiguration](nidltdoaconfiguration.md).

## Topics

### Identifying a coordinate type

- [NIDLTDOACoordinatesTypeGeodetic](nidltdoacoordinatestype/geodetic.md): A coordinate type that specifies a latitude, longitude, and altitude triplet.
- [NIDLTDOACoordinatesTypeRelative](nidltdoacoordinatestype/relative.md): A coordinate type that specifies a 3D Cartesian triplet.

## See Also

### Measurements

- [NIDLTDOAMeasurement](nidltdoameasurement.md): Information from a Downlink Time-Difference-of-Arrival anchor that you use to derive a range estimate.
- [NIDLTDOAMeasurementType](nidltdoameasurementtype.md): The possible phases of downlink positioning signals.
