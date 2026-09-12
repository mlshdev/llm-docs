> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didupdateto:from:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didupdateto:from:))

# locationManager(\_:didUpdateTo:from:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Tells the delegate that a new location value is available.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didUpdateTo newLocation: CLLocation, from oldLocation: CLLocation)
```

## Parameters

- `manager`: The location manager object that generated the update event.
- `newLocation`: The new location data.
- `oldLocation`: The location data from the previous update. If this is the first update event delivered by this location manager, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

By the time this message is delivered to your delegate, the new location data is also available directly from the [CLLocationManager](../cllocationmanager.md) object. The `newLocation` parameter may contain the data that was cached from a previous usage of the location service. You can use the [timestamp](../cllocation/timestamp.md) property of the location object to determine how recent the location data is.

## See Also

### Receiving location updates

- [locationManager(\_:didUpdateLocations:)](locationmanager%28__didupdatelocations_%29.md): Tells the delegate that new location data is available.
- [locationManager(\_:didFinishDeferredUpdatesWithError:)](locationmanager%28__didfinishdeferredupdateswitherror_%29.md): Tells the delegate that updates will no longer be deferred.

# locationManager:didUpdateToLocation:fromLocation: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 6.0) · iPadOS 2.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+

Tells the delegate that a new location value is available.

> Use [locationManager:didUpdateLocations:](locationmanager%28__didupdatelocations_%29.md) instead.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didUpdateToLocation:(CLLocation *) newLocation fromLocation:(CLLocation *) oldLocation;
```

## Parameters

- `manager`: The location manager object that generated the update event.
- `newLocation`: The new location data.
- `oldLocation`: The location data from the previous update. If this is the first update event delivered by this location manager, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

By the time this message is delivered to your delegate, the new location data is also available directly from the [CLLocationManager](../cllocationmanager.md) object. The `newLocation` parameter may contain the data that was cached from a previous usage of the location service. You can use the [timestamp](../cllocation/timestamp.md) property of the location object to determine how recent the location data is.

## See Also

### Receiving location updates

- [locationManager:didUpdateLocations:](locationmanager%28__didupdatelocations_%29.md): Tells the delegate that new location data is available.
- [locationManager:didFinishDeferredUpdatesWithError:](locationmanager%28__didfinishdeferredupdateswitherror_%29.md): Tells the delegate that updates will no longer be deferred.
