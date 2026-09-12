> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:didchange:animated:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:didchange:animated:))

# mapView(\_:didChange:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the user-tracking mode changes.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, didChange mode: MKUserTrackingMode, animated: Bool)
```

## Parameters

- `mapView`: The map view where the user-tracking mode changes.
- `mode`: The mode to use for tracking the user’s location.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map animates the change from the current mode to the new mode; otherwise, the map doesn’t animate the change. This parameter affects only tracking-mode changes. The map animates all changes to the user’s location and heading.

## See Also

### Related Documentation

- [setUserTrackingMode(\_:animated:)](../mkmapview/setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.

### Tracking the user’s location

- [mapViewWillStartLocatingUser(\_:)](mapviewwillstartlocatinguser%28__%29.md): Tells the delegate that the map view is about to start tracking the user’s location.
- [mapViewDidStopLocatingUser(\_:)](mapviewdidstoplocatinguser%28__%29.md): Tells the delegate when the map view stops tracking the user’s location.
- [mapView(\_:didUpdate:)](mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [mapView(\_:didFailToLocateUserWithError:)](mapview%28__didfailtolocateuserwitherror_%29.md): Tells the delegate when an attempt to locate the user’s location fails.

# mapView:didChangeUserTrackingMode:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the user-tracking mode changes.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView didChangeUserTrackingMode:(MKUserTrackingMode) mode animated:(BOOL) animated;
```

## Parameters

- `mapView`: The map view where the user-tracking mode changes.
- `mode`: The mode to use for tracking the user’s location.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map animates the change from the current mode to the new mode; otherwise, the map doesn’t animate the change. This parameter affects only tracking-mode changes. The map animates all changes to the user’s location and heading.

## See Also

### Related Documentation

- [setUserTrackingMode:animated:](../mkmapview/setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.

### Tracking the user’s location

- [mapViewWillStartLocatingUser:](mapviewwillstartlocatinguser%28__%29.md): Tells the delegate that the map view is about to start tracking the user’s location.
- [mapViewDidStopLocatingUser:](mapviewdidstoplocatinguser%28__%29.md): Tells the delegate when the map view stops tracking the user’s location.
- [mapView:didUpdateUserLocation:](mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [mapView:didFailToLocateUserWithError:](mapview%28__didfailtolocateuserwitherror_%29.md): Tells the delegate when an attempt to locate the user’s location fails.
