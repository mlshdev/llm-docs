> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didfinishdeferredupdateswitherror:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didfinishdeferredupdateswitherror:))

# locationManager(\_:didFinishDeferredUpdatesWithError:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Tells the delegate that updates will no longer be deferred.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didFinishDeferredUpdatesWithError error: (any Error)?)
```

## Parameters

- `manager`: The location manager object that generated the update event.
- `error`: The error object containing the reason deferred location updates could not be delivered.

<a id="Discussion"></a>

## Discussion

The location manager object calls this method to let you know that it has stopped deferring the delivery of location events. The manager may call this method for any number of reasons. For example, it calls it when you stop location updates altogether, when you ask the location manager to disallow deferred updates, or when a condition for deferring updates (such as exceeding a timeout or distance parameter) is met.

## See Also

### Receiving location updates

- [locationManager(\_:didUpdateLocations:)](locationmanager%28__didupdatelocations_%29.md): Tells the delegate that new location data is available.
- [locationManager(\_:didUpdateTo:from:)](locationmanager%28__didupdateto_from_%29.md): Deprecated. Tells the delegate that a new location value is available.

# locationManager:didFinishDeferredUpdatesWithError: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Tells the delegate that updates will no longer be deferred.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didFinishDeferredUpdatesWithError:(NSError *) error;
```

## Parameters

- `manager`: The location manager object that generated the update event.
- `error`: The error object containing the reason deferred location updates could not be delivered.

<a id="Discussion"></a>

## Discussion

The location manager object calls this method to let you know that it has stopped deferring the delivery of location events. The manager may call this method for any number of reasons. For example, it calls it when you stop location updates altogether, when you ask the location manager to disallow deferred updates, or when a condition for deferring updates (such as exceeding a timeout or distance parameter) is met.

## See Also

### Receiving location updates

- [locationManager:didUpdateLocations:](locationmanager%28__didupdatelocations_%29.md): Tells the delegate that new location data is available.
- [locationManager:didUpdateToLocation:fromLocation:](locationmanager%28__didupdateto_from_%29.md): Deprecated. Tells the delegate that a new location value is available.
