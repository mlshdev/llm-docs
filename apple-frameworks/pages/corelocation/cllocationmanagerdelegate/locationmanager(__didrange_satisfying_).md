> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didrange:satisfying:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didrange:satisfying:))

# locationManager(\_:didRange:satisfying:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Tells the delegate that the location manager detected at least one beacon that satisfies the provided constraint.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didRange beacons: [CLBeacon], satisfying beaconConstraint: CLBeaconIdentityConstraint)
```

## Parameters

- `manager`: The [CLLocationManager](../cllocationmanager.md) that corresponds to this delegate.
- `beacons`: An array of [CLBeacon](../clbeacon.md) objects.
- `beaconConstraint`: The [CLBeaconIdentityConstraint](../clbeaconidentityconstraint.md) that describes the characteristics of the beacons the location manager is looking for.

## See Also

### Receiving beacon-related updates

- [locationManager(\_:didFailRangingFor:error:)](locationmanager%28__didfailrangingfor_error_%29.md): Tells the delegate that the location manager couldn’t detect any beacons that satisfy the provided constraint.
- [locationManager(\_:didRangeBeacons:in:)](locationmanager%28__didrangebeacons_in_%29.md): Deprecated. Tells the delegate that one or more beacons are in range.
- [locationManager(\_:rangingBeaconsDidFailFor:withError:)](locationmanager%28__rangingbeaconsdidfailfor_witherror_%29.md): Deprecated. Tells the delegate that an error occurred while gathering ranging information for a set of beacons.

# locationManager:didRangeBeacons:satisfyingConstraint: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Tells the delegate that the location manager detected at least one beacon that satisfies the provided constraint.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didRangeBeacons:(NSArray<CLBeacon *> *) beacons satisfyingConstraint:(CLBeaconIdentityConstraint *) beaconConstraint;
```

## Parameters

- `manager`: The [CLLocationManager](../cllocationmanager.md) that corresponds to this delegate.
- `beacons`: An array of [CLBeacon](../clbeacon.md) objects.
- `beaconConstraint`: The [CLBeaconIdentityConstraint](../clbeaconidentityconstraint.md) that describes the characteristics of the beacons the location manager is looking for.

## See Also

### Receiving beacon-related updates

- [locationManager:didFailRangingBeaconsForConstraint:error:](locationmanager%28__didfailrangingfor_error_%29.md): Tells the delegate that the location manager couldn’t detect any beacons that satisfy the provided constraint.
- [locationManager:didRangeBeacons:inRegion:](locationmanager%28__didrangebeacons_in_%29.md): Deprecated. Tells the delegate that one or more beacons are in range.
- [locationManager:rangingBeaconsDidFailForRegion:withError:](locationmanager%28__rangingbeaconsdidfailfor_witherror_%29.md): Deprecated. Tells the delegate that an error occurred while gathering ranging information for a set of beacons.
