> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationviewcontroller/extensioncontext

# extensionContext (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The context your account authentication modification extension uses to provide information to the system.

## Declaration

```swift
var extensionContext: ASAccountAuthenticationModificationExtensionContext { get }
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

Your extension uses the extension context to communicate with the system during the upgrade process.

# extensionContext (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The context your account authentication modification extension uses to provide information to the system.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ASAccountAuthenticationModificationExtensionContext * extensionContext;
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

<a id="Discussion"></a>

## Discussion

Your extension uses the extension context to communicate with the system during the upgrade process.
