> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapusertrackingmode/follow](https://developer.apple.com/documentation/mapkit/mapusertrackingmode/follow)

# MapUserTrackingMode.follow

**Framework:** MapKit  
**Kind:** Case  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS · watchOS 7.0+ (deprecated in 10.0)

The map updates by following a person’s location.

> Use Map initializers that take a \`position\` parameter along with\\nMapCameraPosition.userLocation to configure the user location\\ntracking behavior.

## Declaration

```swift
case follow
```

## See Also

### Setting the user tracking mode

- [MapUserTrackingMode.none](none.md): Deprecated. The map doesn’t update based on the person’s location.
- [MapUserTrackingMode.followWithHeading](followwithheading.md): Deprecated. The map updates by following the person’s heading.
