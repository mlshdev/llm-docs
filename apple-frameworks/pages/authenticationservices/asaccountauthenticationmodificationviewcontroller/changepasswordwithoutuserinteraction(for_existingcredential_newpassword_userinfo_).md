> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationviewcontroller/changepasswordwithoutuserinteraction(for:existingcredential:newpassword:userinfo:)](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationviewcontroller/changepasswordwithoutuserinteraction(for:existingcredential:newpassword:userinfo:))

# changePasswordWithoutUserInteraction(for:existingCredential:newPassword:userInfo:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Upgrades a user’s weak password to a strong password.

## Declaration

```swift
func changePasswordWithoutUserInteraction(for serviceIdentifier: ASCredentialServiceIdentifier, existingCredential: ASPasswordCredential, newPassword: String, userInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `serviceIdentifier`: An identifier that represents a particular service that the user needs a credential for, like a web site.
- `existingCredential`: The current password credential for the service.
- `newPassword`: A new, automatically generated, strong password for the service to use.
- `userInfo`: A dictionary that contains app-specific values when the request to upgrade to Sign in with Apple initiates from the parent app. If the request to upgrade to Sign in with Apple doesn’t initiate from the app, this parameter is `nil`.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

If the extension’s `Info.plist` file includes the [ASAccountAuthenticationModificationPasswordGenerationRequirements](../../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationpasswordgenerationrequirements.md) key, the value of `newPassword` satisfies the specified requirements.

## See Also

### Upgrading to Strong Passwords

- [prepareInterfaceToChangePassword(for:existingCredential:newPassword:userInfo:)](prepareinterfacetochangepassword%28for_existingcredential_newpassword_userinfo_%29.md): Prepares the view controller’s interface that displays when upgrading from a weak password to a strong password.
- [ASAccountAuthenticationModificationSupportsStrongPasswordChange](../../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationsupportsstrongpasswordchange.md): A Boolean value that indicates whether the extension supports upgrading a user’s password to a strong password.
- [ASAccountAuthenticationModificationPasswordGenerationRequirements](../../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationpasswordgenerationrequirements.md): The rules the system satisfies when generating a strong password for your extension during an automatic upgrade.
- [ASAccountAuthenticationModificationOptOutOfSecurityPromptsOnSignIn](../../bundleresources/information-property-list/asaccountauthenticationmodificationoptoutofsecuritypromptsonsignin.md): A Boolean value that indicates the system shouldn’t show security recommendation prompts when users sign in using the app.

# changePasswordWithoutUserInteractionForServiceIdentifier:existingCredential:newPassword:userInfo: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Upgrades a user’s weak password to a strong password.

## Declaration

```objectivec
- (void) changePasswordWithoutUserInteractionForServiceIdentifier:(ASCredentialServiceIdentifier *) serviceIdentifier existingCredential:(ASPasswordCredential *) existingCredential newPassword:(NSString *) newPassword userInfo:(NSDictionary *) userInfo;
```

## Parameters

- `serviceIdentifier`: An identifier that represents a particular service that the user needs a credential for, like a web site.
- `existingCredential`: The current password credential for the service.
- `newPassword`: A new, automatically generated, strong password for the service to use.
- `userInfo`: A dictionary that contains app-specific values when the request to upgrade to Sign in with Apple initiates from the parent app. If the request to upgrade to Sign in with Apple doesn’t initiate from the app, this parameter is `nil`.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

If the extension’s `Info.plist` file includes the [ASAccountAuthenticationModificationPasswordGenerationRequirements](../../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationpasswordgenerationrequirements.md) key, the value of `newPassword` satisfies the specified requirements.

## See Also

### Upgrading to Strong Passwords

- [prepareInterfaceToChangePasswordForServiceIdentifier:existingCredential:newPassword:userInfo:](prepareinterfacetochangepassword%28for_existingcredential_newpassword_userinfo_%29.md): Prepares the view controller’s interface that displays when upgrading from a weak password to a strong password.
- [ASAccountAuthenticationModificationSupportsStrongPasswordChange](../../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationsupportsstrongpasswordchange.md): A Boolean value that indicates whether the extension supports upgrading a user’s password to a strong password.
- [ASAccountAuthenticationModificationPasswordGenerationRequirements](../../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationpasswordgenerationrequirements.md): The rules the system satisfies when generating a strong password for your extension during an automatic upgrade.
- [ASAccountAuthenticationModificationOptOutOfSecurityPromptsOnSignIn](../../bundleresources/information-property-list/asaccountauthenticationmodificationoptoutofsecuritypromptsonsignin.md): A Boolean value that indicates the system shouldn’t show security recommendation prompts when users sign in using the app.
