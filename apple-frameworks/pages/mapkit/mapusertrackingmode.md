> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapusertrackingmode](https://developer.apple.com/documentation/mapkit/mapusertrackingmode)

# MapUserTrackingMode

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS · watchOS 7.0+ (deprecated in 10.0)

The modes available for user tracking.

> Use [Map](map.md) initializers that take a `position` parameter along with  `MapCameraPosition.userLocation` to configure how the camera follows the user.

## Declaration

```swift
enum MapUserTrackingMode
```

## Topics

### Setting the user tracking mode

- [MapUserTrackingMode.none](mapusertrackingmode/none.md): Deprecated. The map doesn’t update based on the person’s location.
- [MapUserTrackingMode.follow](mapusertrackingmode/follow.md): Deprecated. The map updates by following a person’s location.
- [MapUserTrackingMode.followWithHeading](mapusertrackingmode/followwithheading.md): Deprecated. The map updates by following the person’s heading.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
