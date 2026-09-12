> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentauthenticationpolicy](https://developer.apple.com/documentation/appintents/intentauthenticationpolicy)

# IntentAuthenticationPolicy

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The authentication policies you can apply to an app intent when it runs.

## Declaration

```swift
enum IntentAuthenticationPolicy
```

## Topics

### Authentication policies

- [IntentAuthenticationPolicy.alwaysAllowed](intentauthenticationpolicy/alwaysallowed.md): A policy that allows the app intent to run at any time, including when the device is locked.
- [IntentAuthenticationPolicy.requiresAuthentication](intentauthenticationpolicy/requiresauthentication.md): A policy that requires authentication before running the app intent.
- [IntentAuthenticationPolicy.requiresLocalDeviceAuthentication](intentauthenticationpolicy/requireslocaldeviceauthentication.md): A policy that requires the person to unlock the device running the intent.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the authentication policy

- [authenticationPolicy](appintent/authenticationpolicy.md): The authentication policy to enforce when running the app intent.
