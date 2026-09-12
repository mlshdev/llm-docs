> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontrollerpresentationcontextproviding](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontrollerpresentationcontextproviding)

# ASAuthorizationControllerPresentationContextProviding (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An interface the controller uses to ask a delegate for a presentation context.

## Declaration

```swift
@MainActor protocol ASAuthorizationControllerPresentationContextProviding : NSObjectProtocol
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md)

## Topics

### Specifying the Anchor

- [presentationAnchor(for:)](asauthorizationcontrollerpresentationcontextproviding/presentationanchor%28for_%29.md): Tells the delegate from which window it should present content to the user.
- [ASPresentationAnchor](aspresentationanchor.md): A platform-specific type that indicates the kind of user interface element to use as a presentation anchor.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Presenting requests

- [presentationContextProvider](asauthorizationcontroller/presentationcontextprovider.md): A delegate that provides a display context in which the system can present an authorization interface to the user.

# ASAuthorizationControllerPresentationContextProviding (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An interface the controller uses to ask a delegate for a presentation context.

## Declaration

```objectivec
@protocol ASAuthorizationControllerPresentationContextProviding <NSObject>
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md)

## Topics

### Specifying the Anchor

- [presentationAnchorForAuthorizationController:](asauthorizationcontrollerpresentationcontextproviding/presentationanchor%28for_%29.md): Tells the delegate from which window it should present content to the user.
- [ASPresentationAnchor](aspresentationanchor.md): A platform-specific type that indicates the kind of user interface element to use as a presentation anchor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Presenting requests

- [presentationContextProvider](asauthorizationcontroller/presentationcontextprovider.md): A delegate that provides a display context in which the system can present an authorization interface to the user.
