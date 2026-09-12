> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationextensioncontext](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationextensioncontext)

# ASAccountAuthenticationModificationExtensionContext (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that you interact with to change an account’s password or to upgrade to Sign in with Apple.

## Declaration

```swift
class ASAccountAuthenticationModificationExtensionContext
```

<a id="overview"></a>

## Overview

> **Note**

>  This class ignores calls from Mac apps built with Mac Catalyst.

## Topics

### Handling Requests

- [completeUpgradeToSignInWithApple(userInfo:)](asaccountauthenticationmodificationextensioncontext/completeupgradetosigninwithapple%28userinfo_%29.md): Completes the process of upgrading an account’s authentication credentials from using passwords to using Sign in with Apple.
- [completeChangePasswordRequest(updatedCredential:userInfo:)](asaccountauthenticationmodificationextensioncontext/completechangepasswordrequest%28updatedcredential_userinfo_%29.md): Completes a request to update an account’s authentication credentials from using a weak password to using a strong password.
- [getSignInWithAppleUpgradeAuthorization(state:nonce:completionHandler:)](asaccountauthenticationmodificationextensioncontext/getsigninwithappleupgradeauthorization%28state_nonce_completionhandler_%29.md): Retrieves the user’s current Sign in with Apple authorization credentials.
- [cancelRequest(withError:)](asaccountauthenticationmodificationextensioncontext/cancelrequest%28witherror_%29.md): Cancels a request with an error.
- [ASExtensionLocalizedFailureReasonErrorKey](asextensionlocalizedfailurereasonerrorkey.md): A key that specifies a string value to show to the user when a request fails.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

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

### Automatic security upgrades

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md): Automatically and transparently convert accounts to Sign in with Apple or to use strong passwords for improved security.
- [ASAccountAuthenticationModificationController](asaccountauthenticationmodificationcontroller.md): An object that performs a request to modify an account’s authentication properties.
- [ASAccountAuthenticationModificationViewController](asaccountauthenticationmodificationviewcontroller.md): A view controller that can upgrade user passwords to strong passwords, or convert accounts to use Sign in with Apple.

# ASAccountAuthenticationModificationExtensionContext (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that you interact with to change an account’s password or to upgrade to Sign in with Apple.

## Declaration

```objectivec
@interface ASAccountAuthenticationModificationExtensionContext : NSExtensionContext
```

<a id="overview"></a>

## Overview

> **Note**

>  This class ignores calls from Mac apps built with Mac Catalyst.

## Topics

### Handling Requests

- [completeUpgradeToSignInWithAppleWithUserInfo:](asaccountauthenticationmodificationextensioncontext/completeupgradetosigninwithapple%28userinfo_%29.md): Completes the process of upgrading an account’s authentication credentials from using passwords to using Sign in with Apple.
- [completeChangePasswordRequestWithUpdatedCredential:userInfo:](asaccountauthenticationmodificationextensioncontext/completechangepasswordrequest%28updatedcredential_userinfo_%29.md): Completes a request to update an account’s authentication credentials from using a weak password to using a strong password.
- [getSignInWithAppleUpgradeAuthorizationWithState:nonce:completionHandler:](asaccountauthenticationmodificationextensioncontext/getsigninwithappleupgradeauthorization%28state_nonce_completionhandler_%29.md): Retrieves the user’s current Sign in with Apple authorization credentials.
- [cancelRequestWithError:](asaccountauthenticationmodificationextensioncontext/cancelrequest%28witherror_%29.md): Cancels a request with an error.
- [ASExtensionLocalizedFailureReasonErrorKey](asextensionlocalizedfailurereasonerrorkey.md): A key that specifies a string value to show to the user when a request fails.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

## See Also

### Automatic security upgrades

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md): Automatically and transparently convert accounts to Sign in with Apple or to use strong passwords for improved security.
- [ASAccountAuthenticationModificationController](asaccountauthenticationmodificationcontroller.md): An object that performs a request to modify an account’s authentication properties.
- [ASAccountAuthenticationModificationViewController](asaccountauthenticationmodificationviewcontroller.md): A view controller that can upgrade user passwords to strong passwords, or convert accounts to use Sign in with Apple.
