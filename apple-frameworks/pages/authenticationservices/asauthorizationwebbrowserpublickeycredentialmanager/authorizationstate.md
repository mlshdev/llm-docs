> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/authorizationstate](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/authorizationstate)

# ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

An enumeration of values that indicate whether the browser app has access to a person’s passkeys.

## Declaration

```swift
enum AuthorizationState
```

## Topics

### Passkey access states

- [ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState.authorized](authorizationstate/authorized.md): Someone allows the browser app to use passkeys stored in the keychain, and managed by third-party credential manager apps.
- [ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState.denied](authorizationstate/denied.md): Someone forbids the browser app to use passkeys stored in the keychain, and managed by third-party credential manager apps.
- [ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState.notDetermined](authorizationstate/notdetermined.md): The person has yet to choose whether to allow the browser app to access passkeys stored on the keychain, or managed by third-party credential managers.

### Initializers

- [init(rawValue:)](authorizationstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting access to passkeys

- [authorizationStateForPlatformCredentials](authorizationstateforplatformcredentials.md): Returns a value that indicates whether the browser app has access to a person’s passkeys.
- [requestAuthorizationForPublicKeyCredentials(\_:)](requestauthorizationforpublickeycredentials%28__%29.md): Requests a person’s permission to use their passkeys.

# ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationState (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An enumeration of values that indicate whether the browser app has access to a person’s passkeys.

## Declaration

```objectivec
enum ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationState : NSInteger;
```

## Topics

### Passkey access states

- [ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationStateAuthorized](authorizationstate/authorized.md): Someone allows the browser app to use passkeys stored in the keychain, and managed by third-party credential manager apps.
- [ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationStateDenied](authorizationstate/denied.md): Someone forbids the browser app to use passkeys stored in the keychain, and managed by third-party credential manager apps.
- [ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationStateNotDetermined](authorizationstate/notdetermined.md): The person has yet to choose whether to allow the browser app to access passkeys stored on the keychain, or managed by third-party credential managers.

## See Also

### Requesting access to passkeys

- [authorizationStateForPlatformCredentials](authorizationstateforplatformcredentials.md): Returns a value that indicates whether the browser app has access to a person’s passkeys.
- [requestAuthorizationForPublicKeyCredentials:](requestauthorizationforpublickeycredentials%28__%29.md): Requests a person’s permission to use their passkeys.
