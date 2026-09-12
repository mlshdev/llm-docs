> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/requestauthorizationforpublickeycredentials(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/requestauthorizationforpublickeycredentials(_:))

# requestAuthorizationForPublicKeyCredentials(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

Requests a person’s permission to use their passkeys.

## Declaration

```swift
func requestAuthorizationForPublicKeyCredentials(_ completionHandler: @escaping @Sendable (ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState) -> Void)
```

```swift
func requestAuthorizationForPublicKeyCredentials() async -> ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState
```

## Parameters

- `completionHandler`: A block you provide that the operating system calls when the request is completed.

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)

## See Also

### Requesting access to passkeys

- [authorizationStateForPlatformCredentials](authorizationstateforplatformcredentials.md): Returns a value that indicates whether the browser app has access to a person’s passkeys.
- [ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState](authorizationstate.md): An enumeration of values that indicate whether the browser app has access to a person’s passkeys.

# requestAuthorizationForPublicKeyCredentials: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

Requests a person’s permission to use their passkeys.

## Declaration

```objectivec
- (void) requestAuthorizationForPublicKeyCredentials:(void (^)(ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationState authorizationState)) completionHandler;
```

## Parameters

- `completionHandler`: A block you provide that the operating system calls when the request is completed.

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)

## See Also

### Requesting access to passkeys

- [authorizationStateForPlatformCredentials](authorizationstateforplatformcredentials.md): Returns a value that indicates whether the browser app has access to a person’s passkeys.
- [ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationState](authorizationstate.md): An enumeration of values that indicate whether the browser app has access to a person’s passkeys.
