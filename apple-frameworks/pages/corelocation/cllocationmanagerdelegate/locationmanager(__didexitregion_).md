> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didexitregion:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didexitregion:))

# locationManager(\_:didExitRegion:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Tells the delegate that the user left the specified region.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didExitRegion region: CLRegion)
```

## Parameters

- `manager`: The location manager object reporting the event.
- `region`: An object containing information about the region that was exited.

## Mentioned In

- [Determining the proximity to an iBeacon device](../determining-the-proximity-to-an-ibeacon-device.md)

<a id="Discussion"></a>

## Discussion

Because regions are a shared application resource, every active location manager object delivers this message to its associated delegate. It doesn’t matter which location manager actually registered the specified region. If multiple location managers share a delegate object, that delegate receives the message multiple times.

The region object provided may not be the same one that was registered. As a result, you should never perform pointer-level comparisons to determine equality. Instead, use the region’s identifier string to determine if your delegate should respond.

## See Also

### Receiving region-related updates

- [locationManager(\_:didEnterRegion:)](locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager(\_:didDetermineState:for:)](locationmanager%28__diddeterminestate_for_%29.md): Tells the delegate about the state of the specified region.
- [locationManager(\_:monitoringDidFailFor:withError:)](locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [locationManager(\_:didStartMonitoringFor:)](locationmanager%28__didstartmonitoringfor_%29.md): Tells the delegate that a new region is being monitored.
- [CLRegionState](../clregionstate.md): Constants that reflect the relationship of the current location to the region boundaries.

# locationManager:didExitRegion: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Tells the delegate that the user left the specified region.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didExitRegion:(CLRegion *) region;
```

## Parameters

- `manager`: The location manager object reporting the event.
- `region`: An object containing information about the region that was exited.

## Mentioned In

- [Determining the proximity to an iBeacon device](../determining-the-proximity-to-an-ibeacon-device.md)

<a id="Discussion"></a>

## Discussion

Because regions are a shared application resource, every active location manager object delivers this message to its associated delegate. It doesn’t matter which location manager actually registered the specified region. If multiple location managers share a delegate object, that delegate receives the message multiple times.

The region object provided may not be the same one that was registered. As a result, you should never perform pointer-level comparisons to determine equality. Instead, use the region’s identifier string to determine if your delegate should respond.

## See Also

### Receiving region-related updates

- [locationManager:didEnterRegion:](locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager:didDetermineState:forRegion:](locationmanager%28__diddeterminestate_for_%29.md): Tells the delegate about the state of the specified region.
- [locationManager:monitoringDidFailForRegion:withError:](locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [locationManager:didStartMonitoringForRegion:](locationmanager%28__didstartmonitoringfor_%29.md): Tells the delegate that a new region is being monitored.
- [CLRegionState](../clregionstate.md): Constants that reflect the relationship of the current location to the region boundaries.
