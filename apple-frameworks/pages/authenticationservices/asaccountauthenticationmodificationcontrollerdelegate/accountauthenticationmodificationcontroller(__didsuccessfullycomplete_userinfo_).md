> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller(_:didsuccessfullycomplete:userinfo:)](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationcontrollerdelegate/accountauthenticationmodificationcontroller(_:didsuccessfullycomplete:userinfo:))

# accountAuthenticationModificationController(\_:didSuccessfullyComplete:userInfo:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Tells the delegate an account modification request completed successfully.

## Declaration

```swift
optional func accountAuthenticationModificationController(_ controller: ASAccountAuthenticationModificationController, didSuccessfullyComplete request: ASAccountAuthenticationModificationRequest, userInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `controller`: The account authentication modification controller that initiated the request.
- `request`: The request that failed.
- `userInfo`: A dictionary that contains values from the account modification extension.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

## See Also

### Handling Requests

- [accountAuthenticationModificationController(\_:didFail:error:)](accountauthenticationmodificationcontroller%28__didfail_error_%29.md): Tells the delegate an account modification request failed.

# accountAuthenticationModificationController:didSuccessfullyCompleteRequest:withUserInfo: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Tells the delegate an account modification request completed successfully.

## Declaration

```objectivec
- (void) accountAuthenticationModificationController:(ASAccountAuthenticationModificationController *) controller didSuccessfullyCompleteRequest:(ASAccountAuthenticationModificationRequest *) request withUserInfo:(NSDictionary *) userInfo;
```

## Parameters

- `controller`: The account authentication modification controller that initiated the request.
- `request`: The request that failed.
- `userInfo`: A dictionary that contains values from the account modification extension.

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](../upgrading-account-security-with-an-account-authentication-modification-extension.md)

## See Also

### Handling Requests

- [accountAuthenticationModificationController:didFailRequest:withError:](accountauthenticationmodificationcontroller%28__didfail_error_%29.md): Tells the delegate an account modification request failed.
