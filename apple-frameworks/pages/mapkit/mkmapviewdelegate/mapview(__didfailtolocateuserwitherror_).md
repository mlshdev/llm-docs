> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:didfailtolocateuserwitherror:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:didfailtolocateuserwitherror:))

# mapView(\_:didFailToLocateUserWithError:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when an attempt to locate the user’s location fails.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, didFailToLocateUserWithError error: any Error)
```

## Parameters

- `mapView`: The map view that’s tracking the user’s location.
- `error`: An error object containing the reason why location tracking fails.

## See Also

### Tracking the user’s location

- [mapViewWillStartLocatingUser(\_:)](mapviewwillstartlocatinguser%28__%29.md): Tells the delegate that the map view is about to start tracking the user’s location.
- [mapViewDidStopLocatingUser(\_:)](mapviewdidstoplocatinguser%28__%29.md): Tells the delegate when the map view stops tracking the user’s location.
- [mapView(\_:didUpdate:)](mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [mapView(\_:didChange:animated:)](mapview%28__didchange_animated_%29.md): Tells the delegate when the user-tracking mode changes.

# mapView:didFailToLocateUserWithError: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when an attempt to locate the user’s location fails.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView didFailToLocateUserWithError:(NSError *) error;
```

## Parameters

- `mapView`: The map view that’s tracking the user’s location.
- `error`: An error object containing the reason why location tracking fails.

## See Also

### Tracking the user’s location

- [mapViewWillStartLocatingUser:](mapviewwillstartlocatinguser%28__%29.md): Tells the delegate that the map view is about to start tracking the user’s location.
- [mapViewDidStopLocatingUser:](mapviewdidstoplocatinguser%28__%29.md): Tells the delegate when the map view stops tracking the user’s location.
- [mapView:didUpdateUserLocation:](mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [mapView:didChangeUserTrackingMode:animated:](mapview%28__didchange_animated_%29.md): Tells the delegate when the user-tracking mode changes.
