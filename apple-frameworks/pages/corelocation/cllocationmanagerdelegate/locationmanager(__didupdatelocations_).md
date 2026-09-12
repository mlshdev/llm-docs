> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didupdatelocations:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didupdatelocations:))

# locationManager(\_:didUpdateLocations:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that new location data is available.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation])
```

## Parameters

- `manager`: The location manager object that generated the update event.
- `locations`: An array of [CLLocation](../cllocation.md) objects containing the location data. This array always contains at least one object representing the current location. If updates were deferred or if multiple locations arrived before they could be delivered, the array may contain additional entries. The objects in the array are organized in the order in which they occurred. Therefore, the most recent location update is at the end of the array.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional but recommended.

## Topics

### Related Documentation

- [MapKit](../../mapkit.md): Display map or satellite imagery within your app, call out points of interest, and determine placemark information for map coordinates.
- [MapKit JS](https://developer.apple.com/documentation/mapkitjs): Embed interactive Apple Maps on your website, annotate points of interest, and perform georelated searches.

## See Also

### Receiving location updates

- [locationManager(\_:didUpdateTo:from:)](locationmanager%28__didupdateto_from_%29.md): Deprecated. Tells the delegate that a new location value is available.
- [locationManager(\_:didFinishDeferredUpdatesWithError:)](locationmanager%28__didfinishdeferredupdateswitherror_%29.md): Tells the delegate that updates will no longer be deferred.

# locationManager:didUpdateLocations: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that new location data is available.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didUpdateLocations:(NSArray<CLLocation *> *) locations;
```

## Parameters

- `manager`: The location manager object that generated the update event.
- `locations`: An array of [CLLocation](../cllocation.md) objects containing the location data. This array always contains at least one object representing the current location. If updates were deferred or if multiple locations arrived before they could be delivered, the array may contain additional entries. The objects in the array are organized in the order in which they occurred. Therefore, the most recent location update is at the end of the array.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional but recommended.

## Topics

### Related Documentation

- [MapKit](../../mapkit.md): Display map or satellite imagery within your app, call out points of interest, and determine placemark information for map coordinates.
- [MapKit JS](https://developer.apple.com/documentation/mapkitjs): Embed interactive Apple Maps on your website, annotate points of interest, and perform georelated searches.

## See Also

### Receiving location updates

- [locationManager:didUpdateToLocation:fromLocation:](locationmanager%28__didupdateto_from_%29.md): Deprecated. Tells the delegate that a new location value is available.
- [locationManager:didFinishDeferredUpdatesWithError:](locationmanager%28__didfinishdeferredupdateswitherror_%29.md): Tells the delegate that updates will no longer be deferred.
