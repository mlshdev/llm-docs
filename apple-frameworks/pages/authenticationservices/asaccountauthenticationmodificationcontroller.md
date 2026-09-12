> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationcontroller](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationcontroller)

# ASAccountAuthenticationModificationController (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that performs a request to modify an account’s authentication properties.

## Declaration

```swift
class ASAccountAuthenticationModificationController
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="overview"></a>

## Overview

> **Note**

>  This class ignores calls from Mac apps built with Mac Catalyst.

## Topics

### Initiating Security Upgrades from Your App

- [perform(\_:)](asaccountauthenticationmodificationcontroller/perform%28__%29.md): Performs a request to upgrade the authentication credentials for an account to a strong password, or to use Sign in with Apple.
- [ASAccountAuthenticationModificationReplacePasswordWithSignInWithAppleRequest](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest.md): A request to upgrade from using a password to using Sign in with Apple.
- [ASAccountAuthenticationModificationUpgradePasswordToStrongPasswordRequest](asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest.md): A request to automatically upgrade from a weak password to a strong password.
- [ASAccountAuthenticationModificationRequest](asaccountauthenticationmodificationrequest.md): A request to modify an account’s authentication properties.

### Configuring Requests

- [presentationContextProvider](asaccountauthenticationmodificationcontroller/presentationcontextprovider.md): An object that provides a presentation context for the account modification request’s user interface.
- [delegate](asaccountauthenticationmodificationcontroller/delegate.md): An object that receives notifications about the request’s status.

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

## See Also

### Automatic security upgrades

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md): Automatically and transparently convert accounts to Sign in with Apple or to use strong passwords for improved security.
- [ASAccountAuthenticationModificationViewController](asaccountauthenticationmodificationviewcontroller.md): A view controller that can upgrade user passwords to strong passwords, or convert accounts to use Sign in with Apple.
- [ASAccountAuthenticationModificationExtensionContext](asaccountauthenticationmodificationextensioncontext.md): An object that you interact with to change an account’s password or to upgrade to Sign in with Apple.

# ASAccountAuthenticationModificationController (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that performs a request to modify an account’s authentication properties.

## Declaration

```objectivec
@interface ASAccountAuthenticationModificationController : NSObject
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="overview"></a>

## Overview

> **Note**

>  This class ignores calls from Mac apps built with Mac Catalyst.

## Topics

### Initiating Security Upgrades from Your App

- [performRequest:](asaccountauthenticationmodificationcontroller/perform%28__%29.md): Performs a request to upgrade the authentication credentials for an account to a strong password, or to use Sign in with Apple.
- [ASAccountAuthenticationModificationReplacePasswordWithSignInWithAppleRequest](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest.md): A request to upgrade from using a password to using Sign in with Apple.
- [ASAccountAuthenticationModificationUpgradePasswordToStrongPasswordRequest](asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest.md): A request to automatically upgrade from a weak password to a strong password.
- [ASAccountAuthenticationModificationRequest](asaccountauthenticationmodificationrequest.md): A request to modify an account’s authentication properties.

### Configuring Requests

- [presentationContextProvider](asaccountauthenticationmodificationcontroller/presentationcontextprovider.md): An object that provides a presentation context for the account modification request’s user interface.
- [delegate](asaccountauthenticationmodificationcontroller/delegate.md): An object that receives notifications about the request’s status.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Automatic security upgrades

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md): Automatically and transparently convert accounts to Sign in with Apple or to use strong passwords for improved security.
- [ASAccountAuthenticationModificationViewController](asaccountauthenticationmodificationviewcontroller.md): A view controller that can upgrade user passwords to strong passwords, or convert accounts to use Sign in with Apple.
- [ASAccountAuthenticationModificationExtensionContext](asaccountauthenticationmodificationextensioncontext.md): An object that you interact with to change an account’s password or to upgrade to Sign in with Apple.
