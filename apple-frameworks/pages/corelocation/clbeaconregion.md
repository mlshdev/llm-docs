> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion](https://developer.apple.com/documentation/corelocation/clbeaconregion)

# CLBeaconRegion (Swift)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

A region for detecting the presence of iBeacon devices.

> Use [CLBeaconIdentityCondition](clbeaconidentitycondition.md) instead.

## Declaration

```swift
class CLBeaconRegion
```

## Mentioned In

- [Turning an iOS device into an iBeacon device](turning-an-ios-device-into-an-ibeacon-device.md)
- [Determining the proximity to an iBeacon device](determining-the-proximity-to-an-ibeacon-device.md)

<a id="overview"></a>

## Overview

A [CLBeaconRegion](clbeaconregion.md) object defines a region that you use to detect Bluetooth beacons conforming to the iBeacon specification. In contrast to a [CLCircularRegion](clcircularregion.md) that centers on a geographic location, a [CLBeaconRegion](clbeaconregion.md) focuses on an iBeacon with specific identifying characteristics, which you provide. When a matching device comes in range, Core Location notifies your app.

You monitor beacon regions in two ways. To detect when a beacon is in range, use the [startMonitoring(for:)](cllocationmanager/startmonitoring%28for_%29.md) method of your location manager object. After detecting a beacon, call the [startRangingBeacons(in:)](cllocationmanager/startrangingbeacons%28in_%29.md) method to determine the relative distance to that beacon.

When detecting an iBeacon, you need to specify the [proximityUUID](clbeaconregion/proximityuuid.md), [major](clbeaconregion/major.md), and [minor](clbeaconregion/minor.md) values that you programmed into the beacon hardware. You use the values to identify your beacons uniquely, and you can specify a subset of values to detect multiple beacons. The [proximityUUID](clbeaconregion/proximityuuid.md) property is typically the same for all of the beacons in your installation. Use the [major](clbeaconregion/major.md) and [minor](clbeaconregion/minor.md) values to distinguish among different beacons in your installation.

If you want to configure the current iOS device as a Bluetooth beacon, create a beacon region with the appropriate identifying information. You can then call the [peripheralData(withMeasuredPower:)](clbeaconregion/peripheraldata%28withmeasuredpower_%29.md) method of the region to get a dictionary that you can use to advertise the device with the Core Bluetooth framework. For more information about using that framework to advertise the device as a beacon, see [Turning an iOS device into an iBeacon device](turning-an-ios-device-into-an-ibeacon-device.md).

For information about how to detect beacons, see [Determining the proximity to an iBeacon device](determining-the-proximity-to-an-ibeacon-device.md).

## Topics

### Creating a beacon region

- [init(beaconIdentityConstraint:identifier:)](clbeaconregion/init%28beaconidentityconstraint_identifier_%29.md): Deprecated. Creates and returns a region object that targets beacons that satisfy the specified beacon identity constraints.
- [init(uuid:identifier:)](clbeaconregion/init%28uuid_identifier_%29-6hg8v.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID.
- [init(uuid:major:identifier:)](clbeaconregion/init%28uuid_major_identifier_%29-8ur0j.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID and major value.
- [init(uuid:major:minor:identifier:)](clbeaconregion/init%28uuid_major_minor_identifier_%29-24h7w.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID, and major and minor values.
- [CLBeaconMajorValue](clbeaconmajorvalue.md): The most significant value in a beacon.
- [CLBeaconMinorValue](clbeaconminorvalue.md): The least significant value in a beacon.

### Getting the beacon identity

- [uuid](clbeaconregion/uuid.md): Deprecated. The UUID value from the beacon identity constraint that defines the beacon region.
- [major](clbeaconregion/major.md): Deprecated. The major value from the beacon identity constraint that defines the beacon region.
- [minor](clbeaconregion/minor.md): Deprecated. The minor value from the beacon identity constraint that defines the beacon region.
- [beaconIdentityConstraint](clbeaconregion/beaconidentityconstraint.md): Deprecated. The beacon identity constraint that defines the beacon region.

### Specifying when to send notifications

- [notifyEntryStateOnDisplay](clbeaconregion/notifyentrystateondisplay.md): Deprecated. A Boolean value that indicates whether Core Location sends beacon notifications when the device’s display is on.

### Getting the beacon’s advertisement data

- [peripheralData(withMeasuredPower:)](clbeaconregion/peripheraldata%28withmeasuredpower_%29.md): Deprecated. Retrieves data that you can use to advertise the current device as a beacon.

### Deprecated

- [init(proximityUUID:identifier:)](clbeaconregion/init%28proximityuuid_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified UUID.
- [init(proximityUUID:major:identifier:)](clbeaconregion/init%28proximityuuid_major_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID and major value.
- [init(proximityUUID:major:minor:identifier:)](clbeaconregion/init%28proximityuuid_major_minor_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID, major value, and minor value.
- [proximityUUID](clbeaconregion/proximityuuid.md): Deprecated. The unique ID of the beacons you’re targeting.

### Initializers

- [init(UUID:identifier:)](clbeaconregion/init%28uuid_identifier_%29-6114g.md): Deprecated.
- [init(UUID:major:identifier:)](clbeaconregion/init%28uuid_major_identifier_%29-71t0b.md): Deprecated.
- [init(UUID:major:minor:identifier:)](clbeaconregion/init%28uuid_major_minor_identifier_%29-9ejej.md): Deprecated.

## Relationships

### Inherits From

- [CLRegion](clregion.md)

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

### Classes

- [CLBeaconIdentityConstraint](clbeaconidentityconstraint.md): Deprecated. Identity characteristics that can match one or more beacons.
- [CLCircularRegion](clcircularregion.md): Deprecated. A circular geographic region that a center point and radius deine.

# CLBeaconRegion (Objective-C)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

A region for detecting the presence of iBeacon devices.

> Use [CLBeaconIdentityCondition](clbeaconidentitycondition.md) instead.

## Declaration

```objectivec
@interface CLBeaconRegion : CLRegion
```

## Mentioned In

- [Turning an iOS device into an iBeacon device](turning-an-ios-device-into-an-ibeacon-device.md)
- [Determining the proximity to an iBeacon device](determining-the-proximity-to-an-ibeacon-device.md)

<a id="overview"></a>

## Overview

A [CLBeaconRegion](clbeaconregion.md) object defines a region that you use to detect Bluetooth beacons conforming to the iBeacon specification. In contrast to a [CLCircularRegion](clcircularregion.md) that centers on a geographic location, a [CLBeaconRegion](clbeaconregion.md) focuses on an iBeacon with specific identifying characteristics, which you provide. When a matching device comes in range, Core Location notifies your app.

You monitor beacon regions in two ways. To detect when a beacon is in range, use the [startMonitoringForRegion:](cllocationmanager/startmonitoring%28for_%29.md) method of your location manager object. After detecting a beacon, call the [startRangingBeaconsInRegion:](cllocationmanager/startrangingbeacons%28in_%29.md) method to determine the relative distance to that beacon.

When detecting an iBeacon, you need to specify the [proximityUUID](clbeaconregion/proximityuuid.md), [major](clbeaconregion/major.md), and [minor](clbeaconregion/minor.md) values that you programmed into the beacon hardware. You use the values to identify your beacons uniquely, and you can specify a subset of values to detect multiple beacons. The [proximityUUID](clbeaconregion/proximityuuid.md) property is typically the same for all of the beacons in your installation. Use the [major](clbeaconregion/major.md) and [minor](clbeaconregion/minor.md) values to distinguish among different beacons in your installation.

If you want to configure the current iOS device as a Bluetooth beacon, create a beacon region with the appropriate identifying information. You can then call the [peripheralDataWithMeasuredPower:](clbeaconregion/peripheraldata%28withmeasuredpower_%29.md) method of the region to get a dictionary that you can use to advertise the device with the Core Bluetooth framework. For more information about using that framework to advertise the device as a beacon, see [Turning an iOS device into an iBeacon device](turning-an-ios-device-into-an-ibeacon-device.md).

For information about how to detect beacons, see [Determining the proximity to an iBeacon device](determining-the-proximity-to-an-ibeacon-device.md).

## Topics

### Creating a beacon region

- [initWithBeaconIdentityConstraint:identifier:](clbeaconregion/init%28beaconidentityconstraint_identifier_%29.md): Deprecated. Creates and returns a region object that targets beacons that satisfy the specified beacon identity constraints.
- [initWithUUID:identifier:](clbeaconregion/init%28uuid_identifier_%29-6hg8v.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID.
- [initWithUUID:major:identifier:](clbeaconregion/init%28uuid_major_identifier_%29-8ur0j.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID and major value.
- [initWithUUID:major:minor:identifier:](clbeaconregion/init%28uuid_major_minor_identifier_%29-24h7w.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID, and major and minor values.
- [CLBeaconMajorValue](clbeaconmajorvalue.md): The most significant value in a beacon.
- [CLBeaconMinorValue](clbeaconminorvalue.md): The least significant value in a beacon.

### Getting the beacon identity

- [UUID](clbeaconregion/uuid.md): Deprecated. The UUID value from the beacon identity constraint that defines the beacon region.
- [major](clbeaconregion/major.md): Deprecated. The major value from the beacon identity constraint that defines the beacon region.
- [minor](clbeaconregion/minor.md): Deprecated. The minor value from the beacon identity constraint that defines the beacon region.
- [beaconIdentityConstraint](clbeaconregion/beaconidentityconstraint.md): Deprecated. The beacon identity constraint that defines the beacon region.

### Specifying when to send notifications

- [notifyEntryStateOnDisplay](clbeaconregion/notifyentrystateondisplay.md): Deprecated. A Boolean value that indicates whether Core Location sends beacon notifications when the device’s display is on.

### Getting the beacon’s advertisement data

- [peripheralDataWithMeasuredPower:](clbeaconregion/peripheraldata%28withmeasuredpower_%29.md): Deprecated. Retrieves data that you can use to advertise the current device as a beacon.

### Deprecated

- [initWithProximityUUID:identifier:](clbeaconregion/init%28proximityuuid_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified UUID.
- [initWithProximityUUID:major:identifier:](clbeaconregion/init%28proximityuuid_major_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID and major value.
- [initWithProximityUUID:major:minor:identifier:](clbeaconregion/init%28proximityuuid_major_minor_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID, major value, and minor value.
- [proximityUUID](clbeaconregion/proximityuuid.md): Deprecated. The unique ID of the beacons you’re targeting.

## Relationships

### Inherits From

- [CLRegion](clregion.md)

## See Also

### Classes

- [CLBeaconIdentityConstraint](clbeaconidentityconstraint.md): Deprecated. Identity characteristics that can match one or more beacons.
- [CLCircularRegion](clcircularregion.md): Deprecated. A circular geographic region that a center point and radius deine.
