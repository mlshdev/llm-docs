> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clservicesession-pt7n/authorizationrequirement](https://developer.apple.com/documentation/corelocation/clservicesession-pt7n/authorizationrequirement)

# CLServiceSession.AuthorizationRequirement

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Values that describe when the service session needs to request authorization.

## Declaration

```swift
enum AuthorizationRequirement
```

## Topics

### Authorization requirement values

- [CLServiceSession.AuthorizationRequirement.always](authorizationrequirement/always.md)
- [CLServiceSession.AuthorizationRequirement.none](authorizationrequirement/none.md)
- [CLServiceSession.AuthorizationRequirement.whenInUse](authorizationrequirement/wheninuse.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Creating a session

- [init(authorization:)](init%28authorization_%29.md): Creates a services session by using the authorization mode you specify.
- [init(authorization:fullAccuracyPurposeKey:)](init%28authorization_fullaccuracypurposekey_%29.md): Creates a services session by using the authorization mode and purpose key you specify.
