> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didstartmonitoringfor:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didstartmonitoringfor:))

# locationManager(\_:didStartMonitoringFor:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Tells the delegate that a new region is being monitored.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didStartMonitoringFor region: CLRegion)
```

## Parameters

- `manager`: The location manager object reporting the event.
- `region`: The region that is being monitored.

## See Also

### Receiving region-related updates

- [locationManager(\_:didEnterRegion:)](locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager(\_:didExitRegion:)](locationmanager%28__didexitregion_%29.md): Tells the delegate that the user left the specified region.
- [locationManager(\_:didDetermineState:for:)](locationmanager%28__diddeterminestate_for_%29.md): Tells the delegate about the state of the specified region.
- [locationManager(\_:monitoringDidFailFor:withError:)](locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [CLRegionState](../clregionstate.md): Constants that reflect the relationship of the current location to the region boundaries.

# locationManager:didStartMonitoringForRegion: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Tells the delegate that a new region is being monitored.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didStartMonitoringForRegion:(CLRegion *) region;
```

## Parameters

- `manager`: The location manager object reporting the event.
- `region`: The region that is being monitored.

## See Also

### Receiving region-related updates

- [locationManager:didEnterRegion:](locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager:didExitRegion:](locationmanager%28__didexitregion_%29.md): Tells the delegate that the user left the specified region.
- [locationManager:didDetermineState:forRegion:](locationmanager%28__diddeterminestate_for_%29.md): Tells the delegate about the state of the specified region.
- [locationManager:monitoringDidFailForRegion:withError:](locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [CLRegionState](../clregionstate.md): Constants that reflect the relationship of the current location to the region boundaries.
