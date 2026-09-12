> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapviewwillstartlocatinguser(_:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapviewwillstartlocatinguser(_:))

# mapViewWillStartLocatingUser(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate that the map view is about to start tracking the user’s location.

## Declaration

```swift
optional func mapViewWillStartLocatingUser(_ mapView: MKMapView)
```

## Parameters

- `mapView`: The map view that’s tracking the user’s location.

<a id="Discussion"></a>

## Discussion

The map view calls this method when the value of the [showsUserLocation](../mkmapview/showsuserlocation.md) property changes to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Tracking the user’s location

- [mapViewDidStopLocatingUser(\_:)](mapviewdidstoplocatinguser%28__%29.md): Tells the delegate when the map view stops tracking the user’s location.
- [mapView(\_:didUpdate:)](mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [mapView(\_:didFailToLocateUserWithError:)](mapview%28__didfailtolocateuserwitherror_%29.md): Tells the delegate when an attempt to locate the user’s location fails.
- [mapView(\_:didChange:animated:)](mapview%28__didchange_animated_%29.md): Tells the delegate when the user-tracking mode changes.

# mapViewWillStartLocatingUser: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate that the map view is about to start tracking the user’s location.

## Declaration

```objectivec
- (void) mapViewWillStartLocatingUser:(MKMapView *) mapView;
```

## Parameters

- `mapView`: The map view that’s tracking the user’s location.

<a id="Discussion"></a>

## Discussion

The map view calls this method when the value of the [showsUserLocation](../mkmapview/showsuserlocation.md) property changes to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Tracking the user’s location

- [mapViewDidStopLocatingUser:](mapviewdidstoplocatinguser%28__%29.md): Tells the delegate when the map view stops tracking the user’s location.
- [mapView:didUpdateUserLocation:](mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [mapView:didFailToLocateUserWithError:](mapview%28__didfailtolocateuserwitherror_%29.md): Tells the delegate when an attempt to locate the user’s location fails.
- [mapView:didChangeUserTrackingMode:animated:](mapview%28__didchange_animated_%29.md): Tells the delegate when the user-tracking mode changes.
