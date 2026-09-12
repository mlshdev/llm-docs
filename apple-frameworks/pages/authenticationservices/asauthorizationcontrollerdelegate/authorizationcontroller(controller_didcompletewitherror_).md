> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontrollerdelegate/authorizationcontroller(controller:didcompletewitherror:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontrollerdelegate/authorizationcontroller(controller:didcompletewitherror:))

# authorizationController(controller:didCompleteWithError:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate when authorization fails, and provides an error explaining why.

## Declaration

```swift
optional func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: any Error)
```

## Parameters

- `controller`: The controller that performs the authorization attempt.
- `error`: An error that explains the failure using one of the codes in [ASAuthorizationError.Code](../asauthorizationerror-swift.struct/code.md).

## Mentioned In

- [Supporting passkeys](../supporting-passkeys.md)
- [Supporting Security Key Authentication Using Physical Keys](../supporting-security-key-authentication-using-physical-keys.md)

## See Also

### Handling Authorization Errors

- [ASAuthorizationErrorDomain](../asauthorizationerrordomain.md): The domain of authorization errors.
- [ASAuthorizationError](../asauthorizationerror-swift.struct.md): Errors that can occur during authorization.

# authorizationController:didCompleteWithError: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate when authorization fails, and provides an error explaining why.

## Declaration

```objectivec
- (void) authorizationController:(ASAuthorizationController *) controller didCompleteWithError:(NSError *) error;
```

## Parameters

- `controller`: The controller that performs the authorization attempt.
- `error`: An error that explains the failure using one of the codes in [ASAuthorizationError](../asauthorizationerror-swift.struct/code.md).

## Mentioned In

- [Supporting passkeys](../supporting-passkeys.md)
- [Supporting Security Key Authentication Using Physical Keys](../supporting-security-key-authentication-using-physical-keys.md)

## See Also

### Handling Authorization Errors

- [ASAuthorizationErrorDomain](../asauthorizationerrordomain.md): The domain of authorization errors.
