> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationcontroller/presentationcontextprovider

# presentationContextProvider (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that provides a presentation context for the account modification request’s user interface.

## Declaration

```swift
weak var presentationContextProvider: (any ASAccountAuthenticationModificationControllerPresentationContextProviding)? { get set }
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

## See Also

### Configuring Requests

- [delegate](delegate.md): An object that receives notifications about the request’s status.

# presentationContextProvider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that provides a presentation context for the account modification request’s user interface.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<ASAccountAuthenticationModificationControllerPresentationContextProviding> presentationContextProvider;
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

## See Also

### Configuring Requests

- [delegate](delegate.md): An object that receives notifications about the request’s status.
