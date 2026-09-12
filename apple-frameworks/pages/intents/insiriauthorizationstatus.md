> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insiriauthorizationstatus](https://developer.apple.com/documentation/intents/insiriauthorizationstatus)

# INSiriAuthorizationStatus (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the authorization status of your Intents extension.

## Declaration

```swift
enum INSiriAuthorizationStatus
```

## Topics

### Constants

- [INSiriAuthorizationStatus.notDetermined](insiriauthorizationstatus/notdetermined.md): Not yet determined. An authorization request has not yet been made or the user has not yet made a choice regarding the status of the app. Call the [requestSiriAuthorization(\_:)](inpreferences/requestsiriauthorization%28__%29.md) method to request authorization from the user.
- [INSiriAuthorizationStatus.restricted](insiriauthorizationstatus/restricted.md): Restricted. The app is not authorized to use Siri services. This status could be the result of active restrictions on Siri services rather than on the user denying access.
- [INSiriAuthorizationStatus.denied](insiriauthorizationstatus/denied.md): Not authorized. The user explicitly denied authorization for this app.
- [INSiriAuthorizationStatus.authorized](insiriauthorizationstatus/authorized.md): Authorized. Siri is enabled and your app is authorized to interact with it.

### Initializers

- [init(rawValue:)](insiriauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorization

- [Requesting Authorization to Use Siri](../sirikit/requesting-authorization-to-use-siri.md): Request permission from the user for Siri and Maps to communicate with your app or Intents app extension.
- [Siri Entitlement](../bundleresources/entitlements/com.apple.developer.siri.md): A Boolean value that indicates whether the app handles Siri requests.
- [INPreferences](inpreferences.md): The preferences and authorization related to using SiriKit.

# INSiriAuthorizationStatus (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the authorization status of your Intents extension.

## Declaration

```objectivec
enum INSiriAuthorizationStatus : NSInteger;
```

## Topics

### Constants

- [INSiriAuthorizationStatusNotDetermined](insiriauthorizationstatus/notdetermined.md): Not yet determined. An authorization request has not yet been made or the user has not yet made a choice regarding the status of the app. Call the [requestSiriAuthorization:](inpreferences/requestsiriauthorization%28__%29.md) method to request authorization from the user.
- [INSiriAuthorizationStatusRestricted](insiriauthorizationstatus/restricted.md): Restricted. The app is not authorized to use Siri services. This status could be the result of active restrictions on Siri services rather than on the user denying access.
- [INSiriAuthorizationStatusDenied](insiriauthorizationstatus/denied.md): Not authorized. The user explicitly denied authorization for this app.
- [INSiriAuthorizationStatusAuthorized](insiriauthorizationstatus/authorized.md): Authorized. Siri is enabled and your app is authorized to interact with it.

## See Also

### Authorization

- [Requesting Authorization to Use Siri](../sirikit/requesting-authorization-to-use-siri.md): Request permission from the user for Siri and Maps to communicate with your app or Intents app extension.
- [Siri Entitlement](../bundleresources/entitlements/com.apple.developer.siri.md): A Boolean value that indicates whether the app handles Siri requests.
- [INPreferences](inpreferences.md): The preferences and authorization related to using SiriKit.
