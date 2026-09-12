> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationviewcontroller](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationviewcontroller)

# ASAccountAuthenticationModificationViewController (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A view controller that can upgrade user passwords to strong passwords, or convert accounts to use Sign in with Apple.

## Declaration

```swift
class ASAccountAuthenticationModificationViewController
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="overview"></a>

## Overview

Adding an account modification extension lets your app seamlessly upgrade user passwords to strong passwords, or convert from using passwords to using Sign in with Apple. The entire process can be automatic, requiring no user interaction, or you can include interactions, such as two-factor authentication confirmation.

> **Note**

>  This class ignores calls from Mac apps built with Mac Catalyst.

## Topics

### Upgrading to Sign in with Apple

- [convertAccountToSignInWithAppleWithoutUserInteraction(for:existingCredential:userInfo:)](asaccountauthenticationmodificationviewcontroller/convertaccounttosigninwithapplewithoutuserinteraction%28for_existingcredential_userinfo_%29.md): Converts an account’s authentication mechanism from using passwords to using Sign in with Apple.
- [prepareInterfaceToConvertAccountToSignInWithApple(for:existingCredential:userInfo:)](asaccountauthenticationmodificationviewcontroller/prepareinterfacetoconvertaccounttosigninwithapple%28for_existingcredential_userinfo_%29.md): Prepares the view controller’s interface that displays when converting an account that uses password authentication to use Sign in with Apple.
- [ASAccountAuthenticationModificationSupportsUpgradeToSignInWithApple](../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationsupportsupgradetosigninwithapple.md): A Boolean value that indicates whether the extension supports upgrading from using password authentication to using Sign in with Apple.

### Upgrading to Strong Passwords

- [changePasswordWithoutUserInteraction(for:existingCredential:newPassword:userInfo:)](asaccountauthenticationmodificationviewcontroller/changepasswordwithoutuserinteraction%28for_existingcredential_newpassword_userinfo_%29.md): Upgrades a user’s weak password to a strong password.
- [prepareInterfaceToChangePassword(for:existingCredential:newPassword:userInfo:)](asaccountauthenticationmodificationviewcontroller/prepareinterfacetochangepassword%28for_existingcredential_newpassword_userinfo_%29.md): Prepares the view controller’s interface that displays when upgrading from a weak password to a strong password.
- [ASAccountAuthenticationModificationSupportsStrongPasswordChange](../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationsupportsstrongpasswordchange.md): A Boolean value that indicates whether the extension supports upgrading a user’s password to a strong password.
- [ASAccountAuthenticationModificationPasswordGenerationRequirements](../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationpasswordgenerationrequirements.md): The rules the system satisfies when generating a strong password for your extension during an automatic upgrade.
- [ASAccountAuthenticationModificationOptOutOfSecurityPromptsOnSignIn](../bundleresources/information-property-list/asaccountauthenticationmodificationoptoutofsecuritypromptsonsignin.md): A Boolean value that indicates the system shouldn’t show security recommendation prompts when users sign in using the app.

### Handling Modification Requests

- [cancelRequest()](asaccountauthenticationmodificationviewcontroller/cancelrequest%28%29.md): Cancels a request that the user initiated.
- [ASAccountAuthenticationModificationControllerDelegate](asaccountauthenticationmodificationcontrollerdelegate.md): An interface you implement for receiving success and failure statuses about modification of an account’s authentication properties.
- [ASAccountAuthenticationModificationControllerPresentationContextProviding](asaccountauthenticationmodificationcontrollerpresentationcontextproviding.md): An interface you implement to coordinate presentation of the user interface when modifying an account’s authentication properties.

### Getting the Extension Context

- [extensionContext](asaccountauthenticationmodificationviewcontroller/extensioncontext.md): The context your account authentication modification extension uses to provide information to the system.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Automatic security upgrades

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md): Automatically and transparently convert accounts to Sign in with Apple or to use strong passwords for improved security.
- [ASAccountAuthenticationModificationController](asaccountauthenticationmodificationcontroller.md): An object that performs a request to modify an account’s authentication properties.
- [ASAccountAuthenticationModificationExtensionContext](asaccountauthenticationmodificationextensioncontext.md): An object that you interact with to change an account’s password or to upgrade to Sign in with Apple.

# ASAccountAuthenticationModificationViewController (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A view controller that can upgrade user passwords to strong passwords, or convert accounts to use Sign in with Apple.

## Declaration

```objectivec
@interface ASAccountAuthenticationModificationViewController : UIViewController
```

```objectivec
@interface ASAccountAuthenticationModificationViewController : NSViewController
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="overview"></a>

## Overview

Adding an account modification extension lets your app seamlessly upgrade user passwords to strong passwords, or convert from using passwords to using Sign in with Apple. The entire process can be automatic, requiring no user interaction, or you can include interactions, such as two-factor authentication confirmation.

> **Note**

>  This class ignores calls from Mac apps built with Mac Catalyst.

## Topics

### Upgrading to Sign in with Apple

- [convertAccountToSignInWithAppleWithoutUserInteractionForServiceIdentifier:existingCredential:userInfo:](asaccountauthenticationmodificationviewcontroller/convertaccounttosigninwithapplewithoutuserinteraction%28for_existingcredential_userinfo_%29.md): Converts an account’s authentication mechanism from using passwords to using Sign in with Apple.
- [prepareInterfaceToConvertAccountToSignInWithAppleForServiceIdentifier:existingCredential:userInfo:](asaccountauthenticationmodificationviewcontroller/prepareinterfacetoconvertaccounttosigninwithapple%28for_existingcredential_userinfo_%29.md): Prepares the view controller’s interface that displays when converting an account that uses password authentication to use Sign in with Apple.
- [ASAccountAuthenticationModificationSupportsUpgradeToSignInWithApple](../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationsupportsupgradetosigninwithapple.md): A Boolean value that indicates whether the extension supports upgrading from using password authentication to using Sign in with Apple.

### Upgrading to Strong Passwords

- [changePasswordWithoutUserInteractionForServiceIdentifier:existingCredential:newPassword:userInfo:](asaccountauthenticationmodificationviewcontroller/changepasswordwithoutuserinteraction%28for_existingcredential_newpassword_userinfo_%29.md): Upgrades a user’s weak password to a strong password.
- [prepareInterfaceToChangePasswordForServiceIdentifier:existingCredential:newPassword:userInfo:](asaccountauthenticationmodificationviewcontroller/prepareinterfacetochangepassword%28for_existingcredential_newpassword_userinfo_%29.md): Prepares the view controller’s interface that displays when upgrading from a weak password to a strong password.
- [ASAccountAuthenticationModificationSupportsStrongPasswordChange](../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationsupportsstrongpasswordchange.md): A Boolean value that indicates whether the extension supports upgrading a user’s password to a strong password.
- [ASAccountAuthenticationModificationPasswordGenerationRequirements](../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationpasswordgenerationrequirements.md): The rules the system satisfies when generating a strong password for your extension during an automatic upgrade.
- [ASAccountAuthenticationModificationOptOutOfSecurityPromptsOnSignIn](../bundleresources/information-property-list/asaccountauthenticationmodificationoptoutofsecuritypromptsonsignin.md): A Boolean value that indicates the system shouldn’t show security recommendation prompts when users sign in using the app.

### Handling Modification Requests

- [cancelRequest](asaccountauthenticationmodificationviewcontroller/cancelrequest%28%29.md): Cancels a request that the user initiated.
- [ASAccountAuthenticationModificationControllerDelegate](asaccountauthenticationmodificationcontrollerdelegate.md): An interface you implement for receiving success and failure statuses about modification of an account’s authentication properties.
- [ASAccountAuthenticationModificationControllerPresentationContextProviding](asaccountauthenticationmodificationcontrollerpresentationcontextproviding.md): An interface you implement to coordinate presentation of the user interface when modifying an account’s authentication properties.

### Getting the Extension Context

- [extensionContext](asaccountauthenticationmodificationviewcontroller/extensioncontext.md): The context your account authentication modification extension uses to provide information to the system.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Automatic security upgrades

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md): Automatically and transparently convert accounts to Sign in with Apple or to use strong passwords for improved security.
- [ASAccountAuthenticationModificationController](asaccountauthenticationmodificationcontroller.md): An object that performs a request to modify an account’s authentication properties.
- [ASAccountAuthenticationModificationExtensionContext](asaccountauthenticationmodificationextensioncontext.md): An object that you interact with to change an account’s password or to upgrade to Sign in with Apple.
