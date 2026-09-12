> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationextensioncontext/getsigninwithappleupgradeauthorization(state:nonce:completionhandler:)](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationextensioncontext/getsigninwithappleupgradeauthorization(state:nonce:completionhandler:))

# getSignInWithAppleUpgradeAuthorization(state:nonce:completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Retrieves the user’s current Sign in with Apple authorization credentials.

## Declaration

```swift
func getSignInWithAppleUpgradeAuthorization(state: String?, nonce: String?, completionHandler: @escaping @Sendable (ASAuthorizationAppleIDCredential?, (any Error)?) -> Void)
```

```swift
func requestSignInWithAppleUpgradeAuthorization(state: String?, nonce: String?) async throws -> ASAuthorizationAppleIDCredential
```

## Parameters

- `state`: A string that contains a random value for verifying the Sign in with Apple credentials.
- `nonce`: A string that contains a random value for verifying the Sign in with Apple credentials.
- `completionHandler`: A closure that takes a parameter for the user’s current Sign in with Apple credentials, and an error if one occurs while retrieving them.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

Calling this method causes the system to present the Sign in with Apple upgrade interface, dismissing any currently presented interface.

For more information about the `state` and `nonce` parameters, see [Authenticating users with Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/authenticating-users-with-sign-in-with-apple) and [Get the most out of Sign in with Apple](https://developer.apple.com/videos/play/wwdc2020/10173/).

## See Also

### Handling Requests

- [completeUpgradeToSignInWithApple(userInfo:)](completeupgradetosigninwithapple%28userinfo_%29.md): Completes the process of upgrading an account’s authentication credentials from using passwords to using Sign in with Apple.
- [completeChangePasswordRequest(updatedCredential:userInfo:)](completechangepasswordrequest%28updatedcredential_userinfo_%29.md): Completes a request to update an account’s authentication credentials from using a weak password to using a strong password.
- [cancelRequest(withError:)](cancelrequest%28witherror_%29.md): Cancels a request with an error.
- [ASExtensionLocalizedFailureReasonErrorKey](../asextensionlocalizedfailurereasonerrorkey.md): A key that specifies a string value to show to the user when a request fails.

# getSignInWithAppleUpgradeAuthorizationWithState:nonce:completionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Retrieves the user’s current Sign in with Apple authorization credentials.

## Declaration

```objectivec
- (void) getSignInWithAppleUpgradeAuthorizationWithState:(NSString *) state nonce:(NSString *) nonce completionHandler:(void (^)(ASAuthorizationAppleIDCredential *authorization, NSError *error)) completionHandler;
```

## Parameters

- `state`: A string that contains a random value for verifying the Sign in with Apple credentials.
- `nonce`: A string that contains a random value for verifying the Sign in with Apple credentials.
- `completionHandler`: A closure that takes a parameter for the user’s current Sign in with Apple credentials, and an error if one occurs while retrieving them.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

Calling this method causes the system to present the Sign in with Apple upgrade interface, dismissing any currently presented interface.

For more information about the `state` and `nonce` parameters, see [Authenticating users with Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/authenticating-users-with-sign-in-with-apple) and [Get the most out of Sign in with Apple](https://developer.apple.com/videos/play/wwdc2020/10173/).

## See Also

### Handling Requests

- [completeUpgradeToSignInWithAppleWithUserInfo:](completeupgradetosigninwithapple%28userinfo_%29.md): Completes the process of upgrading an account’s authentication credentials from using passwords to using Sign in with Apple.
- [completeChangePasswordRequestWithUpdatedCredential:userInfo:](completechangepasswordrequest%28updatedcredential_userinfo_%29.md): Completes a request to update an account’s authentication credentials from using a weak password to using a strong password.
- [cancelRequestWithError:](cancelrequest%28witherror_%29.md): Cancels a request with an error.
- [ASExtensionLocalizedFailureReasonErrorKey](../asextensionlocalizedfailurereasonerrorkey.md): A key that specifies a string value to show to the user when a request fails.
