> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asextensionlocalizedfailurereasonerrorkey](https://developer.apple.com/documentation/authenticationservices/asextensionlocalizedfailurereasonerrorkey)

# ASExtensionLocalizedFailureReasonErrorKey (Swift)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A key that specifies a string value to show to the user when a request fails.

## Declaration

```swift
let ASExtensionLocalizedFailureReasonErrorKey: String
```

<a id="Discussion"></a>

## Discussion

When canceling a request, your extension calls [cancelRequest(withError:)](asaccountauthenticationmodificationextensioncontext/cancelrequest%28witherror_%29.md). The system informs the user that the request failed. To show additional information regarding the failure, use this key to set a string value in the error’s `userInfo` dictionary.

## See Also

### Handling Requests

- [completeUpgradeToSignInWithApple(userInfo:)](asaccountauthenticationmodificationextensioncontext/completeupgradetosigninwithapple%28userinfo_%29.md): Completes the process of upgrading an account’s authentication credentials from using passwords to using Sign in with Apple.
- [completeChangePasswordRequest(updatedCredential:userInfo:)](asaccountauthenticationmodificationextensioncontext/completechangepasswordrequest%28updatedcredential_userinfo_%29.md): Completes a request to update an account’s authentication credentials from using a weak password to using a strong password.
- [getSignInWithAppleUpgradeAuthorization(state:nonce:completionHandler:)](asaccountauthenticationmodificationextensioncontext/getsigninwithappleupgradeauthorization%28state_nonce_completionhandler_%29.md): Retrieves the user’s current Sign in with Apple authorization credentials.
- [cancelRequest(withError:)](asaccountauthenticationmodificationextensioncontext/cancelrequest%28witherror_%29.md): Cancels a request with an error.

# ASExtensionLocalizedFailureReasonErrorKey (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A key that specifies a string value to show to the user when a request fails.

## Declaration

```objectivec
extern NSErrorUserInfoKey const ASExtensionLocalizedFailureReasonErrorKey;
```

<a id="Discussion"></a>

## Discussion

When canceling a request, your extension calls [cancelRequestWithError:](asaccountauthenticationmodificationextensioncontext/cancelrequest%28witherror_%29.md). The system informs the user that the request failed. To show additional information regarding the failure, use this key to set a string value in the error’s `userInfo` dictionary.

## See Also

### Handling Requests

- [completeUpgradeToSignInWithAppleWithUserInfo:](asaccountauthenticationmodificationextensioncontext/completeupgradetosigninwithapple%28userinfo_%29.md): Completes the process of upgrading an account’s authentication credentials from using passwords to using Sign in with Apple.
- [completeChangePasswordRequestWithUpdatedCredential:userInfo:](asaccountauthenticationmodificationextensioncontext/completechangepasswordrequest%28updatedcredential_userinfo_%29.md): Completes a request to update an account’s authentication credentials from using a weak password to using a strong password.
- [getSignInWithAppleUpgradeAuthorizationWithState:nonce:completionHandler:](asaccountauthenticationmodificationextensioncontext/getsigninwithappleupgradeauthorization%28state_nonce_completionhandler_%29.md): Retrieves the user’s current Sign in with Apple authorization credentials.
- [cancelRequestWithError:](asaccountauthenticationmodificationextensioncontext/cancelrequest%28witherror_%29.md): Cancels a request with an error.
