> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationcontrollerdelegate](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationcontrollerdelegate)

# ASAccountAuthenticationModificationControllerDelegate (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An interface you implement for receiving success and failure statuses about modification of an account’s authentication properties.

## Declaration

```swift
protocol ASAccountAuthenticationModificationControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

## Topics

### Handling Requests

- [accountAuthenticationModificationController(\_:didSuccessfullyComplete:userInfo:)](asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller%28__didsuccessfullycomplete_userinfo_%29.md): Tells the delegate an account modification request completed successfully.
- [accountAuthenticationModificationController(\_:didFail:error:)](asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller%28__didfail_error_%29.md): Tells the delegate an account modification request failed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Modification Requests

- [cancelRequest()](asaccountauthenticationmodificationviewcontroller/cancelrequest%28%29.md): Cancels a request that the user initiated.
- [ASAccountAuthenticationModificationControllerPresentationContextProviding](asaccountauthenticationmodificationcontrollerpresentationcontextproviding.md): An interface you implement to coordinate presentation of the user interface when modifying an account’s authentication properties.

# ASAccountAuthenticationModificationControllerDelegate (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An interface you implement for receiving success and failure statuses about modification of an account’s authentication properties.

## Declaration

```objectivec
@protocol ASAccountAuthenticationModificationControllerDelegate <NSObject>
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

## Topics

### Handling Requests

- [accountAuthenticationModificationController:didSuccessfullyCompleteRequest:withUserInfo:](asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller%28__didsuccessfullycomplete_userinfo_%29.md): Tells the delegate an account modification request completed successfully.
- [accountAuthenticationModificationController:didFailRequest:withError:](asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller%28__didfail_error_%29.md): Tells the delegate an account modification request failed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Modification Requests

- [cancelRequest](asaccountauthenticationmodificationviewcontroller/cancelrequest%28%29.md): Cancels a request that the user initiated.
- [ASAccountAuthenticationModificationControllerPresentationContextProviding](asaccountauthenticationmodificationcontrollerpresentationcontextproviding.md): An interface you implement to coordinate presentation of the user interface when modifying an account’s authentication properties.
