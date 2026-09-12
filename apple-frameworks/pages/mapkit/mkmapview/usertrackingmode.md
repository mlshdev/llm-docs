> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/usertrackingmode](https://developer.apple.com/documentation/mapkit/mkmapview/usertrackingmode)

# userTrackingMode (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.2+ · visionOS 1.0+

The mode to use for tracking the user’s location.

## Declaration

```swift
var userTrackingMode: MKUserTrackingMode { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the tracking mode to [MKUserTrackingMode.follow](../mkusertrackingmode/follow.md) or [MKUserTrackingMode.followWithHeading](../mkusertrackingmode/followwithheading.md) causes the map view to center the map on that location and begin tracking the user’s location. If it’s zoomed out, the map view automatically zooms in on the user’s location, effectively changing the current visible region.

For possible values, see [MKUserTrackingMode](../mkusertrackingmode.md).

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [isUserLocationVisible](isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](userlocation.md): The annotation object that represents the user’s location.
- [setUserTrackingMode(\_:animated:)](setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.

# userTrackingMode (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.2+ · visionOS 1.0+

The mode to use for tracking the user’s location.

## Declaration

```objectivec
@property (nonatomic) MKUserTrackingMode userTrackingMode;
```

<a id="Discussion"></a>

## Discussion

Setting the tracking mode to [MKUserTrackingModeFollow](../mkusertrackingmode/follow.md) or [MKUserTrackingModeFollowWithHeading](../mkusertrackingmode/followwithheading.md) causes the map view to center the map on that location and begin tracking the user’s location. If it’s zoomed out, the map view automatically zooms in on the user’s location, effectively changing the current visible region.

For possible values, see [MKUserTrackingMode](../mkusertrackingmode.md).

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [userLocationVisible](isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](userlocation.md): The annotation object that represents the user’s location.
- [setUserTrackingMode:animated:](setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.
