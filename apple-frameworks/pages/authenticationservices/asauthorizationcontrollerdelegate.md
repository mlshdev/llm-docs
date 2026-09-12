> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontrollerdelegate](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontrollerdelegate)

# ASAuthorizationControllerDelegate (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An interface for providing information about the outcome of an authorization request.

## Declaration

```swift
@MainActor protocol ASAuthorizationControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Supporting passkeys](supporting-passkeys.md)
- [Supporting Security Key Authentication Using Physical Keys](supporting-security-key-authentication-using-physical-keys.md)
- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md)

## Topics

### Handling Successful Authorization

- [authorizationController(\_:didCompleteWithCustomMethod:)](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [authorizationController(controller:didCompleteWithAuthorization:)](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md): Tells the delegate when authorization completes successfully.
- [ASAuthorization](asauthorization.md): The encapsulation of a successful authorization by a controller.

### Handling Authorization Errors

- [authorizationController(controller:didCompleteWithError:)](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewitherror_%29.md): Tells the delegate when authorization fails, and provides an error explaining why.
- [ASAuthorizationErrorDomain](asauthorizationerrordomain.md): The domain of authorization errors.
- [ASAuthorizationError](asauthorizationerror-swift.struct.md): Errors that can occur during authorization.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to request completion

- [delegate](asauthorizationcontroller/delegate.md): A delegate that the authorization controller informs about the success or failure of an authorization attempt.
- [authorizationController(\_:didCompleteWithCustomMethod:)](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.

# ASAuthorizationControllerDelegate (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An interface for providing information about the outcome of an authorization request.

## Declaration

```objectivec
@protocol ASAuthorizationControllerDelegate <NSObject>
```

## Mentioned In

- [Supporting passkeys](supporting-passkeys.md)
- [Supporting Security Key Authentication Using Physical Keys](supporting-security-key-authentication-using-physical-keys.md)
- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md)

## Topics

### Handling Successful Authorization

- [authorizationController:didCompleteWithCustomMethod:](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [authorizationController:didCompleteWithAuthorization:](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md): Tells the delegate when authorization completes successfully.
- [ASAuthorization](asauthorization.md): The encapsulation of a successful authorization by a controller.

### Handling Authorization Errors

- [authorizationController:didCompleteWithError:](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewitherror_%29.md): Tells the delegate when authorization fails, and provides an error explaining why.
- [ASAuthorizationErrorDomain](asauthorizationerrordomain.md): The domain of authorization errors.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to request completion

- [delegate](asauthorizationcontroller/delegate.md): A delegate that the authorization controller informs about the success or failure of an authorization attempt.
- [authorizationController:didCompleteWithCustomMethod:](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
