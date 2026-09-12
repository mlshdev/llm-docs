> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkusertrackingmode](https://developer.apple.com/documentation/mapkit/mkusertrackingmode)

# MKUserTrackingMode (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.2+ · visionOS 1.0+

The mode to use for tracking the user’s location on the map.

## Declaration

```swift
enum MKUserTrackingMode
```

## Topics

### Constants

- [MKUserTrackingMode.none](mkusertrackingmode/none.md): The map doesn’t follow the user’s location.
- [MKUserTrackingMode.follow](mkusertrackingmode/follow.md): The map follows the user location.
- [MKUserTrackingMode.followWithHeading](mkusertrackingmode/followwithheading.md): The map follows the user’s location and rotates when the heading changes.

### Initializers

- [init(rawValue:)](mkusertrackingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](mkmapview/showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [isUserLocationVisible](mkmapview/isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](mkmapview/userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](mkmapview/usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode(\_:animated:)](mkmapview/setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.

# MKUserTrackingMode (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.2+ · visionOS 1.0+

The mode to use for tracking the user’s location on the map.

## Declaration

```objectivec
enum MKUserTrackingMode : NSInteger;
```

## Topics

### Constants

- [MKUserTrackingModeNone](mkusertrackingmode/none.md): The map doesn’t follow the user’s location.
- [MKUserTrackingModeFollow](mkusertrackingmode/follow.md): The map follows the user location.
- [MKUserTrackingModeFollowWithHeading](mkusertrackingmode/followwithheading.md): The map follows the user’s location and rotates when the heading changes.

## See Also

### Displaying the user’s location

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [showsUserLocation](mkmapview/showsuserlocation.md): A Boolean value that indicates whether the map tries to display the user’s location.
- [userLocationVisible](mkmapview/isuserlocationvisible.md): A Boolean value that indicates whether the user’s location is visible in the map view.
- [userLocation](mkmapview/userlocation.md): The annotation object that represents the user’s location.
- [userTrackingMode](mkmapview/usertrackingmode.md): The mode to use for tracking the user’s location.
- [setUserTrackingMode:animated:](mkmapview/setusertrackingmode%28__animated_%29.md): Sets the mode to use for tracking the user’s location, with optional animation.
