> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontrollerdelegate/authorizationcontroller(controller:didcompletewithauthorization:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontrollerdelegate/authorizationcontroller(controller:didcompletewithauthorization:))

# authorizationController(controller:didCompleteWithAuthorization:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate when authorization completes successfully.

## Declaration

```swift
optional func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization)
```

## Parameters

- `controller`: The controller that performs the authorization request.
- `authorization`: An encapsulation of the successful authorization.

## Mentioned In

- [Supporting passkeys](../supporting-passkeys.md)
- [Supporting Security Key Authentication Using Physical Keys](../supporting-security-key-authentication-using-physical-keys.md)

## See Also

### Handling Successful Authorization

- [authorizationController(\_:didCompleteWithCustomMethod:)](authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorization](../asauthorization.md): The encapsulation of a successful authorization by a controller.

# authorizationController:didCompleteWithAuthorization: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate when authorization completes successfully.

## Declaration

```objectivec
- (void) authorizationController:(ASAuthorizationController *) controller didCompleteWithAuthorization:(ASAuthorization *) authorization;
```

## Parameters

- `controller`: The controller that performs the authorization request.
- `authorization`: An encapsulation of the successful authorization.

## Mentioned In

- [Supporting passkeys](../supporting-passkeys.md)
- [Supporting Security Key Authentication Using Physical Keys](../supporting-security-key-authentication-using-physical-keys.md)

## See Also

### Handling Successful Authorization

- [authorizationController:didCompleteWithCustomMethod:](authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorization](../asauthorization.md): The encapsulation of a successful authorization by a controller.
