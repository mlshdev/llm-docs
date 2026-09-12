> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/userlocation](https://developer.apple.com/documentation/mapkit/mkmapview/userlocation)

# userLocation (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The annotation object that represents the user’s location.

## Declaration

```swift
var userLocation: MKUserLocation { get }
```

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [isUserLocationVisible](isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userTrackingMode](usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode(\_:animated:)](setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.

# userLocation (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The annotation object that represents the user’s location.

## Declaration

```objectivec
@property (nonatomic, readonly) MKUserLocation * userLocation;
```

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [userLocationVisible](isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userTrackingMode](usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode:animated:](setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.
