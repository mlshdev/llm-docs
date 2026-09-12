> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:diddeterminestate:for:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:diddeterminestate:for:))

# locationManager(\_:didDetermineState:for:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Tells the delegate about the state of the specified region.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didDetermineState state: CLRegionState, for region: CLRegion)
```

## Parameters

- `manager`: The location manager object reporting the event.
- `state`: The state of the specified region. For a list of possible values, see the [CLRegionState](../clregionstate.md) type.
- `region`: The region whose state was determined.

<a id="Discussion"></a>

## Discussion

The location manager calls this method whenever there is a boundary transition for a region. It calls this method in addition to calling the  [locationManager(\_:didEnterRegion:)](locationmanager%28__didenterregion_%29.md) and [locationManager(\_:didExitRegion:)](locationmanager%28__didexitregion_%29.md) methods. The location manager also calls this method in response to a call to its [requestState(for:)](../cllocationmanager/requeststate%28for_%29.md) method, which runs asynchronously.

## See Also

### Receiving region-related updates

- [locationManager(\_:didEnterRegion:)](locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager(\_:didExitRegion:)](locationmanager%28__didexitregion_%29.md): Tells the delegate that the user left the specified region.
- [locationManager(\_:monitoringDidFailFor:withError:)](locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [locationManager(\_:didStartMonitoringFor:)](locationmanager%28__didstartmonitoringfor_%29.md): Tells the delegate that a new region is being monitored.
- [CLRegionState](../clregionstate.md): Constants that reflect the relationship of the current location to the region boundaries.

# locationManager:didDetermineState:forRegion: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Tells the delegate about the state of the specified region.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didDetermineState:(CLRegionState) state forRegion:(CLRegion *) region;
```

## Parameters

- `manager`: The location manager object reporting the event.
- `state`: The state of the specified region. For a list of possible values, see the [CLRegionState](../clregionstate.md) type.
- `region`: The region whose state was determined.

<a id="Discussion"></a>

## Discussion

The location manager calls this method whenever there is a boundary transition for a region. It calls this method in addition to calling the  [locationManager:didEnterRegion:](locationmanager%28__didenterregion_%29.md) and [locationManager:didExitRegion:](locationmanager%28__didexitregion_%29.md) methods. The location manager also calls this method in response to a call to its [requestStateForRegion:](../cllocationmanager/requeststate%28for_%29.md) method, which runs asynchronously.

## See Also

### Receiving region-related updates

- [locationManager:didEnterRegion:](locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager:didExitRegion:](locationmanager%28__didexitregion_%29.md): Tells the delegate that the user left the specified region.
- [locationManager:monitoringDidFailForRegion:withError:](locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [locationManager:didStartMonitoringForRegion:](locationmanager%28__didstartmonitoringfor_%29.md): Tells the delegate that a new region is being monitored.
- [CLRegionState](../clregionstate.md): Constants that reflect the relationship of the current location to the region boundaries.
