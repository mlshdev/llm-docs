> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insiriauthorizationstatus/denied](https://developer.apple.com/documentation/intents/insiriauthorizationstatus/denied)

# INSiriAuthorizationStatus.denied (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Not authorized. The user explicitly denied authorization for this app.

## Declaration

```swift
case denied
```

## See Also

### Constants

- [INSiriAuthorizationStatus.notDetermined](notdetermined.md): Not yet determined. An authorization request has not yet been made or the user has not yet made a choice regarding the status of the app. Call the [requestSiriAuthorization(\_:)](../inpreferences/requestsiriauthorization%28__%29.md) method to request authorization from the user.
- [INSiriAuthorizationStatus.restricted](restricted.md): Restricted. The app is not authorized to use Siri services. This status could be the result of active restrictions on Siri services rather than on the user denying access.
- [INSiriAuthorizationStatus.authorized](authorized.md): Authorized. Siri is enabled and your app is authorized to interact with it.

# INSiriAuthorizationStatusDenied (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Not authorized. The user explicitly denied authorization for this app.

## Declaration

```objectivec
INSiriAuthorizationStatusDenied
```

## See Also

### Constants

- [INSiriAuthorizationStatusNotDetermined](notdetermined.md): Not yet determined. An authorization request has not yet been made or the user has not yet made a choice regarding the status of the app. Call the [requestSiriAuthorization:](../inpreferences/requestsiriauthorization%28__%29.md) method to request authorization from the user.
- [INSiriAuthorizationStatusRestricted](restricted.md): Restricted. The app is not authorized to use Siri services. This status could be the result of active restrictions on Siri services rather than on the user denying access.
- [INSiriAuthorizationStatusAuthorized](authorized.md): Authorized. Siri is enabled and your app is authorized to interact with it.
