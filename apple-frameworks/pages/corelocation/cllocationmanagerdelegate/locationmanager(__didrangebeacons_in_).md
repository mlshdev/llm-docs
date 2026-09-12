> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didrangebeacons:in:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didrangebeacons:in:))

# locationManager(\_:didRangeBeacons:in:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Tells the delegate that one or more beacons are in range.

> Use [locationManager(\_:didRange:satisfying:)](locationmanager%28__didrange_satisfying_%29.md) instead.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didRangeBeacons beacons: [CLBeacon], in region: CLBeaconRegion)
```

## Parameters

- `manager`: The location manager object reporting the event.
- `beacons`: An array of [CLBeacon](../clbeacon.md) objects representing the beacons currently in range. If `beacons` is empty, you can assume that no beacons matching the specified region are in range. When a specific beacon is no longer in `beacons`, that beacon is no longer received by the device. You can use the information in the [CLBeacon](../clbeacon.md) objects to determine the range of each beacon and its identifying information.
- `region`: The region object containing the parameters that were used to locate the beacons.

## Mentioned In

- [Determining the proximity to an iBeacon device](../determining-the-proximity-to-an-ibeacon-device.md)

<a id="Discussion"></a>

## Discussion

The location manager calls this method when a new set of beacons becomes available in the specified region or when a beacon goes out of range. The location manager also calls this method when the range of a beacon changes; for example, when a beacon gets closer.

## See Also

### Receiving beacon-related updates

- [locationManager(\_:didRange:satisfying:)](locationmanager%28__didrange_satisfying_%29.md): Tells the delegate that the location manager detected at least one beacon that satisfies the provided constraint.
- [locationManager(\_:didFailRangingFor:error:)](locationmanager%28__didfailrangingfor_error_%29.md): Tells the delegate that the location manager couldn’t detect any beacons that satisfy the provided constraint.
- [locationManager(\_:rangingBeaconsDidFailFor:withError:)](locationmanager%28__rangingbeaconsdidfailfor_witherror_%29.md): Deprecated. Tells the delegate that an error occurred while gathering ranging information for a set of beacons.

# locationManager:didRangeBeacons:inRegion: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Tells the delegate that one or more beacons are in range.

> Use [locationManager:didRangeBeacons:satisfyingConstraint:](locationmanager%28__didrange_satisfying_%29.md) instead.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didRangeBeacons:(NSArray<CLBeacon *> *) beacons inRegion:(CLBeaconRegion *) region;
```

## Parameters

- `manager`: The location manager object reporting the event.
- `beacons`: An array of [CLBeacon](../clbeacon.md) objects representing the beacons currently in range. If `beacons` is empty, you can assume that no beacons matching the specified region are in range. When a specific beacon is no longer in `beacons`, that beacon is no longer received by the device. You can use the information in the [CLBeacon](../clbeacon.md) objects to determine the range of each beacon and its identifying information.
- `region`: The region object containing the parameters that were used to locate the beacons.

## Mentioned In

- [Determining the proximity to an iBeacon device](../determining-the-proximity-to-an-ibeacon-device.md)

<a id="Discussion"></a>

## Discussion

The location manager calls this method when a new set of beacons becomes available in the specified region or when a beacon goes out of range. The location manager also calls this method when the range of a beacon changes; for example, when a beacon gets closer.

## See Also

### Receiving beacon-related updates

- [locationManager:didRangeBeacons:satisfyingConstraint:](locationmanager%28__didrange_satisfying_%29.md): Tells the delegate that the location manager detected at least one beacon that satisfies the provided constraint.
- [locationManager:didFailRangingBeaconsForConstraint:error:](locationmanager%28__didfailrangingfor_error_%29.md): Tells the delegate that the location manager couldn’t detect any beacons that satisfy the provided constraint.
- [locationManager:rangingBeaconsDidFailForRegion:withError:](locationmanager%28__rangingbeaconsdidfailfor_witherror_%29.md): Deprecated. Tells the delegate that an error occurred while gathering ranging information for a set of beacons.
