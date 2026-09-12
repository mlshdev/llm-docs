> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/authorizationstateforplatformcredentials](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/authorizationstateforplatformcredentials)

# authorizationStateForPlatformCredentials (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

Returns a value that indicates whether the browser app has access to a person’s passkeys.

## Declaration

```swift
var authorizationStateForPlatformCredentials: ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState { get }
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)

## See Also

### Requesting access to passkeys

- [requestAuthorizationForPublicKeyCredentials(\_:)](requestauthorizationforpublickeycredentials%28__%29.md): Requests a person’s permission to use their passkeys.
- [ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState](authorizationstate.md): An enumeration of values that indicate whether the browser app has access to a person’s passkeys.

# authorizationStateForPlatformCredentials (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

Returns a value that indicates whether the browser app has access to a person’s passkeys.

## Declaration

```objectivec
@property (nonatomic, readonly) ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationState authorizationStateForPlatformCredentials;
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)

## See Also

### Requesting access to passkeys

- [requestAuthorizationForPublicKeyCredentials:](requestauthorizationforpublickeycredentials%28__%29.md): Requests a person’s permission to use their passkeys.
- [ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationState](authorizationstate.md): An enumeration of values that indicate whether the browser app has access to a person’s passkeys.
