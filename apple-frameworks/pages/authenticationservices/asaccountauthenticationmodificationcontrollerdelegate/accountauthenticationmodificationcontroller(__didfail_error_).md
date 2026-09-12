> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller(_:didfail:error:)](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller(_:didfail:error:))

# accountAuthenticationModificationController(\_:didFail:error:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Tells the delegate an account modification request failed.

## Declaration

```swift
optional func accountAuthenticationModificationController(_ controller: ASAccountAuthenticationModificationController, didFail request: ASAccountAuthenticationModificationRequest, error: any Error)
```

## Parameters

- `controller`: The account authentication modification controller that initiated the request.
- `request`: The request that failed.
- `error`: An error that indicates why the request failed.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

## See Also

### Handling Requests

- [accountAuthenticationModificationController(\_:didSuccessfullyComplete:userInfo:)](accountauthenticationmodificationcontroller%28__didsuccessfullycomplete_userinfo_%29.md): Tells the delegate an account modification request completed successfully.

# accountAuthenticationModificationController:didFailRequest:withError: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Tells the delegate an account modification request failed.

## Declaration

```objectivec
- (void) accountAuthenticationModificationController:(ASAccountAuthenticationModificationController *) controller didFailRequest:(ASAccountAuthenticationModificationRequest *) request withError:(NSError *) error;
```

## Parameters

- `controller`: The account authentication modification controller that initiated the request.
- `request`: The request that failed.
- `error`: An error that indicates why the request failed.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

## See Also

### Handling Requests

- [accountAuthenticationModificationController:didSuccessfullyCompleteRequest:withUserInfo:](accountauthenticationmodificationcontroller%28__didsuccessfullycomplete_userinfo_%29.md): Tells the delegate an account modification request completed successfully.
