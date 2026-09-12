> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/showsuserlocation](https://developer.apple.com/documentation/mapkit/mkmapview/showsuserlocation)

# showsUserLocation (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the map tries to display the user’s location.

## Declaration

```swift
var showsUserLocation: Bool { get set }
```

## Mentioned In

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md)

<a id="Discussion"></a>

## Discussion

This property doesn’t indicate whether the user’s location is actually visible on the map, only whether the map view tries to display it. Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the map view to use the Core Location framework to find the user’s location and try to display it on the map. While this property is [true](https://developer.apple.com/documentation/swift/true), the map view continues to track the user’s location and update it periodically. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Showing the user’s location doesn’t ensure that it’s visible on the map. The user might scroll the map to a different point, causing the location to be offscreen. To determine whether the user’s location displays on the map, use the [isUserLocationVisible](isuserlocationvisible.md) property.

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [isUserLocationVisible](isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode(\_:animated:)](setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.

# showsUserLocation (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the map tries to display the user’s location.

## Declaration

```objectivec
@property (nonatomic) BOOL showsUserLocation;
```

## Mentioned In

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md)

<a id="Discussion"></a>

## Discussion

This property doesn’t indicate whether the user’s location is actually visible on the map, only whether the map view tries to display it. Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the map view to use the Core Location framework to find the user’s location and try to display it on the map. While this property is [true](https://developer.apple.com/documentation/swift/true), the map view continues to track the user’s location and update it periodically. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Showing the user’s location doesn’t ensure that it’s visible on the map. The user might scroll the map to a different point, causing the location to be offscreen. To determine whether the user’s location displays on the map, use the [userLocationVisible](isuserlocationvisible.md) property.

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [userLocationVisible](isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode:animated:](setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
- [MKUserTrackingMode](../mkusertrackingmode.md): The mode to use for tracking the user’s location on the map.
