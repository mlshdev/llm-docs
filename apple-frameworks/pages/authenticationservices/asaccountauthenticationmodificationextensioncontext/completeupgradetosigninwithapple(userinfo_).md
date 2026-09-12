> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationextensioncontext/completeupgradetosigninwithapple(userinfo:)](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationextensioncontext/completeupgradetosigninwithapple(userinfo:))

# completeUpgradeToSignInWithApple(userInfo:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Completes the process of upgrading an account’s authentication credentials from using passwords to using Sign in with Apple.

## Declaration

```swift
func completeUpgradeToSignInWithApple(userInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `userInfo`: A dictionary that contains details to pass to the extension’s containing app if the app initiated the account modification request.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

After successfully upgrading to Sign in with Apple, the system deletes the password credentials from the keychain.

To receive the `userInfo` dictionary in your app, set a delegate on the [ASAccountAuthenticationModificationController](../asaccountauthenticationmodificationcontroller.md) when initiating the request. The delegate receives the `userInfo` dictionary as a parameter to [accountAuthenticationModificationController(\_:didSuccessfullyComplete:userInfo:)](../asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller%28__didsuccessfullycomplete_userinfo_%29.md).

## See Also

### Handling Requests

- [completeChangePasswordRequest(updatedCredential:userInfo:)](completechangepasswordrequest%28updatedcredential_userinfo_%29.md): Completes a request to update an account’s authentication credentials from using a weak password to using a strong password.
- [getSignInWithAppleUpgradeAuthorization(state:nonce:completionHandler:)](getsigninwithappleupgradeauthorization%28state_nonce_completionhandler_%29.md): Retrieves the user’s current Sign in with Apple authorization credentials.
- [cancelRequest(withError:)](cancelrequest%28witherror_%29.md): Cancels a request with an error.
- [ASExtensionLocalizedFailureReasonErrorKey](../asextensionlocalizedfailurereasonerrorkey.md): A key that specifies a string value to show to the user when a request fails.

# completeUpgradeToSignInWithAppleWithUserInfo: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Completes the process of upgrading an account’s authentication credentials from using passwords to using Sign in with Apple.

## Declaration

```objectivec
- (void) completeUpgradeToSignInWithAppleWithUserInfo:(NSDictionary *) userInfo;
```

## Parameters

- `userInfo`: A dictionary that contains details to pass to the extension’s containing app if the app initiated the account modification request.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

After successfully upgrading to Sign in with Apple, the system deletes the password credentials from the keychain.

To receive the `userInfo` dictionary in your app, set a delegate on the [ASAccountAuthenticationModificationController](../asaccountauthenticationmodificationcontroller.md) when initiating the request. The delegate receives the `userInfo` dictionary as a parameter to [accountAuthenticationModificationController:didSuccessfullyCompleteRequest:withUserInfo:](../asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller%28__didsuccessfullycomplete_userinfo_%29.md).

## See Also

### Handling Requests

- [completeChangePasswordRequestWithUpdatedCredential:userInfo:](completechangepasswordrequest%28updatedcredential_userinfo_%29.md): Completes a request to update an account’s authentication credentials from using a weak password to using a strong password.
- [getSignInWithAppleUpgradeAuthorizationWithState:nonce:completionHandler:](getsigninwithappleupgradeauthorization%28state_nonce_completionhandler_%29.md): Retrieves the user’s current Sign in with Apple authorization credentials.
- [cancelRequestWithError:](cancelrequest%28witherror_%29.md): Cancels a request with an error.
- [ASExtensionLocalizedFailureReasonErrorKey](../asextensionlocalizedfailurereasonerrorkey.md): A key that specifies a string value to show to the user when a request fails.
