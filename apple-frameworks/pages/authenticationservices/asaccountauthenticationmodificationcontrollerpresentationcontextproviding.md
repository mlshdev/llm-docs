> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationcontrollerpresentationcontextproviding](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationcontrollerpresentationcontextproviding)

# ASAccountAuthenticationModificationControllerPresentationContextProviding (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An interface you implement to coordinate presentation of the user interface when modifying an account’s authentication properties.

## Declaration

```swift
@MainActor protocol ASAccountAuthenticationModificationControllerPresentationContextProviding : NSObjectProtocol
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

## Topics

### Presenting the Account Modification Interface

- [presentationAnchor(for:)](asaccountauthenticationmodificationcontrollerpresentationcontextproviding/presentationanchor%28for_%29.md): Returns the most appropriate window for presenting the authentication modification interface.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Modification Requests

- [cancelRequest()](asaccountauthenticationmodificationviewcontroller/cancelrequest%28%29.md): Cancels a request that the user initiated.
- [ASAccountAuthenticationModificationControllerDelegate](asaccountauthenticationmodificationcontrollerdelegate.md): An interface you implement for receiving success and failure statuses about modification of an account’s authentication properties.

# ASAccountAuthenticationModificationControllerPresentationContextProviding (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An interface you implement to coordinate presentation of the user interface when modifying an account’s authentication properties.

## Declaration

```objectivec
@protocol ASAccountAuthenticationModificationControllerPresentationContextProviding <NSObject>
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

## Topics

### Presenting the Account Modification Interface

- [presentationAnchorForAccountAuthenticationModificationController:](asaccountauthenticationmodificationcontrollerpresentationcontextproviding/presentationanchor%28for_%29.md): Returns the most appropriate window for presenting the authentication modification interface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Modification Requests

- [cancelRequest](asaccountauthenticationmodificationviewcontroller/cancelrequest%28%29.md): Cancels a request that the user initiated.
- [ASAccountAuthenticationModificationControllerDelegate](asaccountauthenticationmodificationcontrollerdelegate.md): An interface you implement for receiving success and failure statuses about modification of an account’s authentication properties.
