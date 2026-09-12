> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/authorizationtype](https://developer.apple.com/documentation/arkit/arkitsession/authorizationtype)

# ARKitSession.AuthorizationType

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

The authorization types you can request from ARKit.

## Declaration

```swift
enum AuthorizationType
```

## Topics

### Requesting authorization

- [ARKitSession.AuthorizationType.handTracking](authorizationtype/handtracking.md): The authorization for access to detailed hand-tracking data.
- [ARKitSession.AuthorizationType.worldSensing](authorizationtype/worldsensing.md): The authorization for access to plane detection, scene reconstruction, and image tracking.
- [ARKitSession.AuthorizationType.cameraAccess](authorizationtype/cameraaccess.md): The authorization for camera access.

### Enumeration Cases

- [ARKitSession.AuthorizationType.accessoryTracking](authorizationtype/accessorytracking.md): Accessory Tracking

### Instance Properties

- [description](authorizationtype/description.md): A textual representation of AuthorizationType

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting authorization

- [requestAuthorization(for:)](requestauthorization%28for_%29.md): Requests authorization from the user to use the specified kinds of ARKit data.
- [queryAuthorization(for:)](queryauthorization%28for_%29.md): Checks whether the current session is authorized for particular authorization types without requesting authorization.
- [ARKitSession.AuthorizationStatus](authorizationstatus.md): The authorization states for a type of ARKit data.
