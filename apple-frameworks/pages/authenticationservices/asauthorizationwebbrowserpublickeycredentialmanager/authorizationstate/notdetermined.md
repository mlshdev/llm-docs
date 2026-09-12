> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/authorizationstate/notdetermined](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/authorizationstate/notdetermined)

# ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState.notDetermined (Swift)

**Framework:** Authentication Services  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

The person has yet to choose whether to allow the browser app to access passkeys stored on the keychain, or managed by third-party credential managers.

## Declaration

```swift
case notDetermined
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../../authenticating-people-by-using-passkeys-in-browser-apps.md)

## See Also

### Passkey access states

- [ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState.authorized](authorized.md): Someone allows the browser app to use passkeys stored in the keychain, and managed by third-party credential manager apps.
- [ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState.denied](denied.md): Someone forbids the browser app to use passkeys stored in the keychain, and managed by third-party credential manager apps.

# ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationStateNotDetermined (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The person has yet to choose whether to allow the browser app to access passkeys stored on the keychain, or managed by third-party credential managers.

## Declaration

```objectivec
ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationStateNotDetermined
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../../authenticating-people-by-using-passkeys-in-browser-apps.md)

## See Also

### Passkey access states

- [ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationStateAuthorized](authorized.md): Someone allows the browser app to use passkeys stored in the keychain, and managed by third-party credential manager apps.
- [ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationStateDenied](denied.md): Someone forbids the browser app to use passkeys stored in the keychain, and managed by third-party credential manager apps.
