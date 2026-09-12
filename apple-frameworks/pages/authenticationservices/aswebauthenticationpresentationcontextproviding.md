> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationpresentationcontextproviding](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationpresentationcontextproviding)

# ASWebAuthenticationPresentationContextProviding (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An interface the session uses to ask a delegate for a presentation context.

## Declaration

```swift
@MainActor protocol ASWebAuthenticationPresentationContextProviding : NSObjectProtocol
```

## Mentioned In

- [Authenticating a User Through a Web Service](authenticating-a-user-through-a-web-service.md)

## Topics

### Specifying the Anchor

- [presentationAnchor(for:)](aswebauthenticationpresentationcontextproviding/presentationanchor%28for_%29.md): Tells the delegate from which window it should present content to the user.
- [ASPresentationAnchor](aspresentationanchor.md): A platform-specific type that indicates the kind of user interface element to use as a presentation anchor.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Presenting a Session

- [presentationContextProvider](aswebauthenticationsession/presentationcontextprovider.md): A delegate that provides a display context in which the system can present an authentication session to the user.

# ASWebAuthenticationPresentationContextProviding (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An interface the session uses to ask a delegate for a presentation context.

## Declaration

```objectivec
@protocol ASWebAuthenticationPresentationContextProviding <NSObject>
```

## Mentioned In

- [Authenticating a User Through a Web Service](authenticating-a-user-through-a-web-service.md)

## Topics

### Specifying the Anchor

- [presentationAnchorForWebAuthenticationSession:](aswebauthenticationpresentationcontextproviding/presentationanchor%28for_%29.md): Tells the delegate from which window it should present content to the user.
- [ASPresentationAnchor](aspresentationanchor.md): A platform-specific type that indicates the kind of user interface element to use as a presentation anchor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Presenting a Session

- [presentationContextProvider](aswebauthenticationsession/presentationcontextprovider.md): A delegate that provides a display context in which the system can present an authentication session to the user.
