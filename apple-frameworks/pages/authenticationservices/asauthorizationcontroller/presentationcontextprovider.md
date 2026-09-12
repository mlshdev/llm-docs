> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/presentationcontextprovider](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/presentationcontextprovider)

# presentationContextProvider (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A delegate that provides a display context in which the system can present an authorization interface to the user.

## Declaration

```swift
weak var presentationContextProvider: (any ASAuthorizationControllerPresentationContextProviding)? { get set }
```

## See Also

### Presenting requests

- [ASAuthorizationControllerPresentationContextProviding](../asauthorizationcontrollerpresentationcontextproviding.md): An interface the controller uses to ask a delegate for a presentation context.

# presentationContextProvider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A delegate that provides a display context in which the system can present an authorization interface to the user.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<ASAuthorizationControllerPresentationContextProviding> presentationContextProvider;
```

## See Also

### Presenting requests

- [ASAuthorizationControllerPresentationContextProviding](../asauthorizationcontrollerpresentationcontextproviding.md): An interface the controller uses to ask a delegate for a presentation context.
