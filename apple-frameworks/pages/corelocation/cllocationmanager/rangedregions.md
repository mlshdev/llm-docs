> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/rangedregions](https://developer.apple.com/documentation/corelocation/cllocationmanager/rangedregions)

# rangedRegions (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.15+ (deprecated in 10.15)

The set of regions currently being tracked using ranging.

> Use [rangedBeaconConstraints](rangedbeaconconstraints.md) instead.

## Declaration

```swift
var rangedRegions: Set<CLRegion> { get }
```

<a id="Discussion"></a>

## Discussion

The objects in the set are instances of the [CLBeaconRegion](../clbeaconregion.md) class.

## Topics

### Related Documentation

- [startRangingBeacons(in:)](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.

## See Also

### Properties

- [headingAvailable](headingavailable-swift.property.md): Deprecated. A Boolean value indicating whether the location manager is able to generate heading-related events.
- [locationServicesEnabled](locationservicesenabled-swift.property.md): Deprecated. A Boolean value indicating whether location services are enabled on the device.
- [purpose](purpose.md): Deprecated. An app-provided string that describes the reason for using location services.

# rangedRegions (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.15+ (deprecated in 10.15)

The set of regions currently being tracked using ranging.

> Use [rangedBeaconConstraints](rangedbeaconconstraints.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<__kindof CLRegion *> * rangedRegions;
```

<a id="Discussion"></a>

## Discussion

The objects in the set are instances of the [CLBeaconRegion](../clbeaconregion.md) class.

## Topics

### Related Documentation

- [startRangingBeaconsInRegion:](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.

## See Also

### Properties

- [headingAvailable](headingavailable-swift.property.md): Deprecated. A Boolean value indicating whether the location manager is able to generate heading-related events.
- [locationServicesEnabled](locationservicesenabled-swift.property.md): Deprecated. A Boolean value indicating whether location services are enabled on the device.
- [purpose](purpose.md): Deprecated. An app-provided string that describes the reason for using location services.
