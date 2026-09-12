> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationcontroller/perform(_:)](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationcontroller/perform(_:))

# perform(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Performs a request to upgrade the authentication credentials for an account to a strong password, or to use Sign in with Apple.

## Declaration

```swift
func perform(_ request: ASAccountAuthenticationModificationRequest)
```

## Parameters

- `request`: The request to perform.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

Only one request can be in progress at a time. If a request is already in progress, additional requests fail immediately.

## See Also

### Initiating Security Upgrades from Your App

- [ASAccountAuthenticationModificationReplacePasswordWithSignInWithAppleRequest](../asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest.md): A request to upgrade from using a password to using Sign in with Apple.
- [ASAccountAuthenticationModificationUpgradePasswordToStrongPasswordRequest](../asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest.md): A request to automatically upgrade from a weak password to a strong password.
- [ASAccountAuthenticationModificationRequest](../asaccountauthenticationmodificationrequest.md): A request to modify an account’s authentication properties.

# performRequest: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Performs a request to upgrade the authentication credentials for an account to a strong password, or to use Sign in with Apple.

## Declaration

```objectivec
- (void) performRequest:(ASAccountAuthenticationModificationRequest *) request;
```

## Parameters

- `request`: The request to perform.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

Only one request can be in progress at a time. If a request is already in progress, additional requests fail immediately.

## See Also

### Initiating Security Upgrades from Your App

- [ASAccountAuthenticationModificationReplacePasswordWithSignInWithAppleRequest](../asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest.md): A request to upgrade from using a password to using Sign in with Apple.
- [ASAccountAuthenticationModificationUpgradePasswordToStrongPasswordRequest](../asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest.md): A request to automatically upgrade from a weak password to a strong password.
- [ASAccountAuthenticationModificationRequest](../asaccountauthenticationmodificationrequest.md): A request to modify an account’s authentication properties.
