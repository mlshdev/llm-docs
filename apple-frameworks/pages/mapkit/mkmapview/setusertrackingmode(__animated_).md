> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/setusertrackingmode(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/setusertrackingmode(_:animated:))

# setUserTrackingMode(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.2+ · visionOS 1.0+

Sets the mode to use for tracking the user’s location, with optional animation.

## Declaration

```swift
func setUserTrackingMode(_ mode: MKUserTrackingMode, animated: Bool)
```

## Parameters

- `mode`: The mode for tracking the user’s location. [MKUserTrackingMode](../mkusertrackingmode.md) describes the possible values.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map animates the change from the current mode to the new mode; otherwise, it doesn’t. This parameter affects only tracking-mode changes. Changes to the user’s location or heading use animation.

<a id="Discussion"></a>

## Discussion

Setting the tracking mode to [MKUserTrackingMode.follow](../mkusertrackingmode/follow.md) or [MKUserTrackingMode.followWithHeading](../mkusertrackingmode/followwithheading.md) causes the map view to center the map on that location and begin tracking the user’s location. If it’s zoomed out, the map view automatically zooms in on the user’s location, effectively changing the current visible region.

## See Also

### Related Documentation

- [mapView(\_:didChange:animated:)](../mkmapviewdelegate/mapview%28__didchange_animated_%29.md): Tells the delegate when the user-tracking mode changes.
- [mapView(\_:didUpdate:)](../mkmapviewdelegate/mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [heading](../mkuserlocation/heading.md): The heading of the user’s location.

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [isUserLocationVisible](isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](usertrackingmode.md): The mode to use for tracking the user’s location.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.

# setUserTrackingMode:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.2+ · visionOS 1.0+

Sets the mode to use for tracking the user’s location, with optional animation.

## Declaration

```objectivec
- (void) setUserTrackingMode:(MKUserTrackingMode) mode animated:(BOOL) animated;
```

## Parameters

- `mode`: The mode for tracking the user’s location. [MKUserTrackingMode](../mkusertrackingmode.md) describes the possible values.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map animates the change from the current mode to the new mode; otherwise, it doesn’t. This parameter affects only tracking-mode changes. Changes to the user’s location or heading use animation.

<a id="Discussion"></a>

## Discussion

Setting the tracking mode to [MKUserTrackingModeFollow](../mkusertrackingmode/follow.md) or [MKUserTrackingModeFollowWithHeading](../mkusertrackingmode/followwithheading.md) causes the map view to center the map on that location and begin tracking the user’s location. If it’s zoomed out, the map view automatically zooms in on the user’s location, effectively changing the current visible region.

## See Also

### Related Documentation

- [mapView:didChangeUserTrackingMode:animated:](../mkmapviewdelegate/mapview%28__didchange_animated_%29.md): Tells the delegate when the user-tracking mode changes.
- [mapView:didUpdateUserLocation:](../mkmapviewdelegate/mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [heading](../mkuserlocation/heading.md): The heading of the user’s location.

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [userLocationVisible](isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](usertrackingmode.md): The mode to use for tracking the user’s location.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.
