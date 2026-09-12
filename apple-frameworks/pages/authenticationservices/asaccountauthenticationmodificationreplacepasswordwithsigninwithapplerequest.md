> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest)

# ASAccountAuthenticationModificationReplacePasswordWithSignInWithAppleRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A request to upgrade from using a password to using Sign in with Apple.

## Declaration

```swift
class ASAccountAuthenticationModificationReplacePasswordWithSignInWithAppleRequest
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="overview"></a>

## Overview

Your app uses this class to initiate an upgrade to Sign in with Apple. After creating the request, your app initiates the upgrade process by instantiating an [ASAccountAuthenticationModificationController](asaccountauthenticationmodificationcontroller.md) object and calling [perform(\_:)](asaccountauthenticationmodificationcontroller/perform%28__%29.md) on it. The system invokes your authentication modification extension to complete the upgrade.

## Topics

### Creating Upgrade Requests in Your App

- [init(user:serviceIdentifier:userInfo:)](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/init%28user_serviceidentifier_userinfo_%29.md): Creates a request to upgrade from using passwords to using Sign in with Apple.
- [user](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/user.md): The user name of the account to upgrade.
- [serviceIdentifier](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/serviceidentifier.md): An identifier that represents a particular service that the user needs a credential for, like a web site.
- [userInfo](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/userinfo.md): A dictionary that contains values to pass to your account modification extension.

## Relationships

### Inherits From

- [ASAccountAuthenticationModificationRequest](asaccountauthenticationmodificationrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Initiating Security Upgrades from Your App

- [perform(\_:)](asaccountauthenticationmodificationcontroller/perform%28__%29.md): Performs a request to upgrade the authentication credentials for an account to a strong password, or to use Sign in with Apple.
- [ASAccountAuthenticationModificationUpgradePasswordToStrongPasswordRequest](asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest.md): A request to automatically upgrade from a weak password to a strong password.
- [ASAccountAuthenticationModificationRequest](asaccountauthenticationmodificationrequest.md): A request to modify an account’s authentication properties.

# ASAccountAuthenticationModificationReplacePasswordWithSignInWithAppleRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A request to upgrade from using a password to using Sign in with Apple.

## Declaration

```objectivec
@interface ASAccountAuthenticationModificationReplacePasswordWithSignInWithAppleRequest : ASAccountAuthenticationModificationRequest
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="overview"></a>

## Overview

Your app uses this class to initiate an upgrade to Sign in with Apple. After creating the request, your app initiates the upgrade process by instantiating an [ASAccountAuthenticationModificationController](asaccountauthenticationmodificationcontroller.md) object and calling [performRequest:](asaccountauthenticationmodificationcontroller/perform%28__%29.md) on it. The system invokes your authentication modification extension to complete the upgrade.

## Topics

### Creating Upgrade Requests in Your App

- [initWithUser:serviceIdentifier:userInfo:](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/init%28user_serviceidentifier_userinfo_%29.md): Creates a request to upgrade from using passwords to using Sign in with Apple.
- [user](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/user.md): The user name of the account to upgrade.
- [serviceIdentifier](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/serviceidentifier.md): An identifier that represents a particular service that the user needs a credential for, like a web site.
- [userInfo](asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/userinfo.md): A dictionary that contains values to pass to your account modification extension.

## Relationships

### Inherits From

- [ASAccountAuthenticationModificationRequest](asaccountauthenticationmodificationrequest.md)

## See Also

### Initiating Security Upgrades from Your App

- [performRequest:](asaccountauthenticationmodificationcontroller/perform%28__%29.md): Performs a request to upgrade the authentication credentials for an account to a strong password, or to use Sign in with Apple.
- [ASAccountAuthenticationModificationUpgradePasswordToStrongPasswordRequest](asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest.md): A request to automatically upgrade from a weak password to a strong password.
- [ASAccountAuthenticationModificationRequest](asaccountauthenticationmodificationrequest.md): A request to modify an account’s authentication properties.
