> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationviewcontroller/prepareinterfacetoconvertaccounttosigninwithapple(for:existingcredential:userinfo:)](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationviewcontroller/prepareinterfacetoconvertaccounttosigninwithapple(for:existingcredential:userinfo:))

# prepareInterfaceToConvertAccountToSignInWithApple(for:existingCredential:userInfo:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Prepares the view controller’s interface that displays when converting an account that uses password authentication to use Sign in with Apple.

## Declaration

```swift
func prepareInterfaceToConvertAccountToSignInWithApple(for serviceIdentifier: ASCredentialServiceIdentifier, existingCredential: ASPasswordCredential, userInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `serviceIdentifier`: An identifier that represents a particular service that the user needs a credential for, like a web site.
- `existingCredential`: The current password credential for the service.
- `userInfo`: A dictionary that contains app-specific values when the request to upgrade to Sign in with Apple initiates from by the parent app. If the request to upgrade to Sign in with Apple doesn’t initiate from the app, this parameter is `nil`.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

## See Also

### Upgrading to Sign in with Apple

- [convertAccountToSignInWithAppleWithoutUserInteraction(for:existingCredential:userInfo:)](convertaccounttosigninwithapplewithoutuserinteraction%28for_existingcredential_userinfo_%29.md): Converts an account’s authentication mechanism from using passwords to using Sign in with Apple.
- [ASAccountAuthenticationModificationSupportsUpgradeToSignInWithApple](../../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationsupportsupgradetosigninwithapple.md): A Boolean value that indicates whether the extension supports upgrading from using password authentication to using Sign in with Apple.

# prepareInterfaceToConvertAccountToSignInWithAppleForServiceIdentifier:existingCredential:userInfo: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Prepares the view controller’s interface that displays when converting an account that uses password authentication to use Sign in with Apple.

## Declaration

```objectivec
- (void) prepareInterfaceToConvertAccountToSignInWithAppleForServiceIdentifier:(ASCredentialServiceIdentifier *) serviceIdentifier existingCredential:(ASPasswordCredential *) existingCredential userInfo:(NSDictionary *) userInfo;
```

## Parameters

- `serviceIdentifier`: An identifier that represents a particular service that the user needs a credential for, like a web site.
- `existingCredential`: The current password credential for the service.
- `userInfo`: A dictionary that contains app-specific values when the request to upgrade to Sign in with Apple initiates from by the parent app. If the request to upgrade to Sign in with Apple doesn’t initiate from the app, this parameter is `nil`.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

## See Also

### Upgrading to Sign in with Apple

- [convertAccountToSignInWithAppleWithoutUserInteractionForServiceIdentifier:existingCredential:userInfo:](convertaccounttosigninwithapplewithoutuserinteraction%28for_existingcredential_userinfo_%29.md): Converts an account’s authentication mechanism from using passwords to using Sign in with Apple.
- [ASAccountAuthenticationModificationSupportsUpgradeToSignInWithApple](../../bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationsupportsupgradetosigninwithapple.md): A Boolean value that indicates whether the extension supports upgrading from using password authentication to using Sign in with Apple.
