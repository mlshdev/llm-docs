> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/isuserlocationvisible](https://developer.apple.com/documentation/mapkit/mkmapview/isuserlocationvisible)

# isUserLocationVisible (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the user’s location is visible in the map view.

## Declaration

```swift
var isUserLocationVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When determining whether the user’s location is visible, this property factors in the horizontal accuracy of the location data. Specifically, if the rectangle that the user’s location represents, plus or minus the horizontal accuracy of that location, intersects the map’s visible rectangle, this property contains the value [true](https://developer.apple.com/documentation/swift/true). If that location rectangle doesn’t intersect the map’s visible rectangle, this property contains the value [false](https://developer.apple.com/documentation/swift/false).

When the user’s location is unknown, this property contains the value [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [userLocation](userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode(\_:animated:)](setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.

# userLocationVisible (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the user’s location is visible in the map view.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isUserLocationVisible) BOOL userLocationVisible;
```

<a id="Discussion"></a>

## Discussion

When determining whether the user’s location is visible, this property factors in the horizontal accuracy of the location data. Specifically, if the rectangle that the user’s location represents, plus or minus the horizontal accuracy of that location, intersects the map’s visible rectangle, this property contains the value [true](https://developer.apple.com/documentation/swift/true). If that location rectangle doesn’t intersect the map’s visible rectangle, this property contains the value [false](https://developer.apple.com/documentation/swift/false).

When the user’s location is unknown, this property contains the value [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [userLocation](userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode:animated:](setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.
