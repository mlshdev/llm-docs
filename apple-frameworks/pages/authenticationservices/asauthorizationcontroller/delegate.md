> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/delegate](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/delegate)

# delegate (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A delegate that the authorization controller informs about the success or failure of an authorization attempt.

## Declaration

```swift
weak var delegate: (any ASAuthorizationControllerDelegate)? { get set }
```

## See Also

### Responding to request completion

- [authorizationController(\_:didCompleteWithCustomMethod:)](../asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorizationControllerDelegate](../asauthorizationcontrollerdelegate.md): An interface for providing information about the outcome of an authorization request.

# delegate (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A delegate that the authorization controller informs about the success or failure of an authorization attempt.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<ASAuthorizationControllerDelegate> delegate;
```

## See Also

### Responding to request completion

- [authorizationController:didCompleteWithCustomMethod:](../asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorizationControllerDelegate](../asauthorizationcontrollerdelegate.md): An interface for providing information about the outcome of an authorization request.
