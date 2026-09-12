> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/authorizationstatus](https://developer.apple.com/documentation/arkit/arkitsession/authorizationstatus)

# ARKitSession.AuthorizationStatus

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

The authorization states for a type of ARKit data.

## Declaration

```swift
enum AuthorizationStatus
```

## Topics

### Getting authorization states

- [ARKitSession.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md): The user hasn’t yet granted or denied permission.
- [ARKitSession.AuthorizationStatus.allowed](authorizationstatus/allowed.md): The user granted your app permission to use the associated kind of ARKit data.
- [ARKitSession.AuthorizationStatus.denied](authorizationstatus/denied.md): The user denied your app permission to use the associated kind of ARKit data.

### Instance Properties

- [description](authorizationstatus/description.md): A textual representation of AuthorizationStatus

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
- [ARKitSession.AuthorizationType](authorizationtype.md): The authorization types you can request from ARKit.
- [queryAuthorization(for:)](queryauthorization%28for_%29.md): Checks whether the current session is authorized for particular authorization types without requesting authorization.
