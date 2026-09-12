> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager)

# ASAuthorizationWebBrowserPublicKeyCredentialManager (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

A class that you use to request access to a person’s passkeys in a web browser, and that reports on the access status.

## Declaration

```swift
class ASAuthorizationWebBrowserPublicKeyCredentialManager
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md)

## Topics

### Creating credential managers

- [init()](asauthorizationwebbrowserpublickeycredentialmanager/init%28%29.md): Initializes a credential manager.

### Requesting access to passkeys

- [authorizationStateForPlatformCredentials](asauthorizationwebbrowserpublickeycredentialmanager/authorizationstateforplatformcredentials.md): Returns a value that indicates whether the browser app has access to a person’s passkeys.
- [requestAuthorizationForPublicKeyCredentials(\_:)](asauthorizationwebbrowserpublickeycredentialmanager/requestauthorizationforpublickeycredentials%28__%29.md): Requests a person’s permission to use their passkeys.
- [ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState](asauthorizationwebbrowserpublickeycredentialmanager/authorizationstate.md): An enumeration of values that indicate whether the browser app has access to a person’s passkeys.

### Using passkeys

- [platformCredentials(forRelyingParty:)](asauthorizationwebbrowserpublickeycredentialmanager/platformcredentials%28forrelyingparty_%29.md): Gets a list of passkeys available for authenticating with the given relying party.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredential](asauthorizationwebbrowserplatformpublickeycredential-swift.struct.md): A structure that describes a passkey stored in the keychain, or managed by a third-party credential manager.

### Type Properties

- [isDeviceConfiguredForPasskeys](asauthorizationwebbrowserpublickeycredentialmanager/isdeviceconfiguredforpasskeys.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Website authorization

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md): Provide a secure and convenient alternative to passwords.

# ASAuthorizationWebBrowserPublicKeyCredentialManager (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

A class that you use to request access to a person’s passkeys in a web browser, and that reports on the access status.

## Declaration

```objectivec
@interface ASAuthorizationWebBrowserPublicKeyCredentialManager : NSObject
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md)

## Topics

### Creating credential managers

- [init](asauthorizationwebbrowserpublickeycredentialmanager/init%28%29.md): Initializes a credential manager.

### Requesting access to passkeys

- [authorizationStateForPlatformCredentials](asauthorizationwebbrowserpublickeycredentialmanager/authorizationstateforplatformcredentials.md): Returns a value that indicates whether the browser app has access to a person’s passkeys.
- [requestAuthorizationForPublicKeyCredentials:](asauthorizationwebbrowserpublickeycredentialmanager/requestauthorizationforpublickeycredentials%28__%29.md): Requests a person’s permission to use their passkeys.
- [ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationState](asauthorizationwebbrowserpublickeycredentialmanager/authorizationstate.md): An enumeration of values that indicate whether the browser app has access to a person’s passkeys.

### Using passkeys

- [platformCredentialsForRelyingParty:completionHandler:](asauthorizationwebbrowserpublickeycredentialmanager/platformcredentialsforrelyingparty_completionhandler_.md): Gets a list of passkeys available for authenticating with the given relying party.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredential](asauthorizationwebbrowserplatformpublickeycredential-c.class.md)

### Type Properties

- [isDeviceConfiguredForPasskeys](asauthorizationwebbrowserpublickeycredentialmanager/isdeviceconfiguredforpasskeys.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Website authorization

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md): Provide a secure and convenient alternative to passwords.
