> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:rangingbeaconsdidfailfor:witherror:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:rangingbeaconsdidfailfor:witherror:))

# locationManager(\_:rangingBeaconsDidFailFor:withError:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Tells the delegate that an error occurred while gathering ranging information for a set of beacons.

> Use [locationManager(\_:didFailRangingFor:error:)](locationmanager%28__didfailrangingfor_error_%29.md) instead.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, rangingBeaconsDidFailFor region: CLBeaconRegion, withError error: any Error)
```

## Parameters

- `manager`: The location manager object reporting the event.
- `region`: The region object that encountered the error.
- `error`: An error object containing the error code that indicates why ranging failed.

<a id="Discussion"></a>

## Discussion

Errors occur most often when registering a beacon region failed. If the region object itself is invalid or if it contains invalid data, the location manager calls this method to report the problem.

## See Also

### Receiving beacon-related updates

- [locationManager(\_:didRange:satisfying:)](locationmanager%28__didrange_satisfying_%29.md): Tells the delegate that the location manager detected at least one beacon that satisfies the provided constraint.
- [locationManager(\_:didFailRangingFor:error:)](locationmanager%28__didfailrangingfor_error_%29.md): Tells the delegate that the location manager couldn’t detect any beacons that satisfy the provided constraint.
- [locationManager(\_:didRangeBeacons:in:)](locationmanager%28__didrangebeacons_in_%29.md): Deprecated. Tells the delegate that one or more beacons are in range.

# locationManager:rangingBeaconsDidFailForRegion:withError: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Tells the delegate that an error occurred while gathering ranging information for a set of beacons.

> Use [locationManager:didFailRangingBeaconsForConstraint:error:](locationmanager%28__didfailrangingfor_error_%29.md) instead.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager rangingBeaconsDidFailForRegion:(CLBeaconRegion *) region withError:(NSError *) error;
```

## Parameters

- `manager`: The location manager object reporting the event.
- `region`: The region object that encountered the error.
- `error`: An error object containing the error code that indicates why ranging failed.

<a id="Discussion"></a>

## Discussion

Errors occur most often when registering a beacon region failed. If the region object itself is invalid or if it contains invalid data, the location manager calls this method to report the problem.

## See Also

### Receiving beacon-related updates

- [locationManager:didRangeBeacons:satisfyingConstraint:](locationmanager%28__didrange_satisfying_%29.md): Tells the delegate that the location manager detected at least one beacon that satisfies the provided constraint.
- [locationManager:didFailRangingBeaconsForConstraint:error:](locationmanager%28__didfailrangingfor_error_%29.md): Tells the delegate that the location manager couldn’t detect any beacons that satisfy the provided constraint.
- [locationManager:didRangeBeacons:inRegion:](locationmanager%28__didrangebeacons_in_%29.md): Deprecated. Tells the delegate that one or more beacons are in range.
