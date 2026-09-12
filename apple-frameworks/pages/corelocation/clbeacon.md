> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeacon](https://developer.apple.com/documentation/corelocation/clbeacon)

# CLBeacon (Swift)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Information about an observed iBeacon device and its relative distance to a person’s device.

## Declaration

```swift
class CLBeacon
```

## Mentioned In

- [Turning an iOS device into an iBeacon device](turning-an-ios-device-into-an-ibeacon-device.md)

<a id="overview"></a>

## Overview

The [CLBeacon](clbeacon.md) class represents a beacon that was observed during beacon ranging. You do not create instances of this class directly. The location manager ([CLLocationManager](cllocationmanager.md)) object reports observed beacons to its associated delegate object.

The identity of a beacon is defined by its [uuid](clbeacon/uuid.md), [major](clbeacon/major.md), and [minor](clbeacon/minor.md) properties. These values are coded into the beacon itself. For a more thorough description of the meaning of those values, see [CLBeaconRegion](clbeaconregion.md).

## Topics

### Getting the beacon identity

- [uuid](clbeacon/uuid.md): The UUID that the observed beacon transmitted.
- [major](clbeacon/major.md): The major value that the observed beacon transmitted.
- [minor](clbeacon/minor.md): The minor value that the observed beacon transmitted.
- [proximityUUID](clbeacon/proximityuuid.md): Deprecated. The proximity ID of the beacon.

### Determining the distance to the beacon

- [proximity](clbeacon/proximity.md): The relative distance to the beacon.
- [CLProximity](clproximity.md): Constants that reflect the relative distance to a beacon.
- [accuracy](clbeacon/accuracy.md): The accuracy of the proximity value, measured in meters from the beacon.
- [rssi](clbeacon/rssi.md): The received signal strength of the beacon, measured in decibels.

### Getting the observation timestamp

- [timestamp](clbeacon/timestamp.md): A timestamp representing when the beacon was observed.

### Initializers

- [init(coder:)](clbeacon/init%28coder_%29.md)

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

## See Also

### iBeacon

- [Ranging for Beacons](ranging-for-beacons.md): Configure a device to act as a beacon and to detect surrounding beacons.
- [Determining the proximity to an iBeacon device](determining-the-proximity-to-an-ibeacon-device.md): Detect beacons and determine the relative distance to them.
- [Turning an iOS device into an iBeacon device](turning-an-ios-device-into-an-ibeacon-device.md): Broadcast iBeacon signals from an iOS device.
- [CLCondition](clcondition-swift.protocol.md): The abstract base class for all other monitor conditions.

# CLBeacon (Objective-C)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Information about an observed iBeacon device and its relative distance to a person’s device.

## Declaration

```objectivec
@interface CLBeacon : NSObject
```

## Mentioned In

- [Turning an iOS device into an iBeacon device](turning-an-ios-device-into-an-ibeacon-device.md)

<a id="overview"></a>

## Overview

The [CLBeacon](clbeacon.md) class represents a beacon that was observed during beacon ranging. You do not create instances of this class directly. The location manager ([CLLocationManager](cllocationmanager.md)) object reports observed beacons to its associated delegate object.

The identity of a beacon is defined by its [UUID](clbeacon/uuid.md), [major](clbeacon/major.md), and [minor](clbeacon/minor.md) properties. These values are coded into the beacon itself. For a more thorough description of the meaning of those values, see [CLBeaconRegion](clbeaconregion.md).

## Topics

### Getting the beacon identity

- [UUID](clbeacon/uuid.md): The UUID that the observed beacon transmitted.
- [major](clbeacon/major.md): The major value that the observed beacon transmitted.
- [minor](clbeacon/minor.md): The minor value that the observed beacon transmitted.
- [proximityUUID](clbeacon/proximityuuid.md): Deprecated. The proximity ID of the beacon.

### Determining the distance to the beacon

- [proximity](clbeacon/proximity.md): The relative distance to the beacon.
- [CLProximity](clproximity.md): Constants that reflect the relative distance to a beacon.
- [accuracy](clbeacon/accuracy.md): The accuracy of the proximity value, measured in meters from the beacon.
- [rssi](clbeacon/rssi.md): The received signal strength of the beacon, measured in decibels.

### Getting the observation timestamp

- [timestamp](clbeacon/timestamp.md): A timestamp representing when the beacon was observed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### iBeacon

- [Ranging for Beacons](ranging-for-beacons.md): Configure a device to act as a beacon and to detect surrounding beacons.
- [Determining the proximity to an iBeacon device](determining-the-proximity-to-an-ibeacon-device.md): Detect beacons and determine the relative distance to them.
- [Turning an iOS device into an iBeacon device](turning-an-ios-device-into-an-ibeacon-device.md): Broadcast iBeacon signals from an iOS device.
- [CLCondition](clcondition-c.class.md): The abstract base class that all other conditions derive from.
- [CLBeaconIdentityCondition](clbeaconidentitycondition.md): A condition that describes the identity characteristics of a beacon.
- [CLCircularGeographicCondition](clcirculargeographiccondition.md): A circular geographic condition that a center point and radius define.
