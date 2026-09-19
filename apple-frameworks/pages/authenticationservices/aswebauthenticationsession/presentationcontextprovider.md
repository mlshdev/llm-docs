> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/presentationcontextprovider

# presentationContextProvider (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A delegate that provides a display context in which the system can present an authentication session to the user.

## Declaration

```swift
weak var presentationContextProvider: (any ASWebAuthenticationPresentationContextProviding)? { get set }
```

## Mentioned In

- [Authenticating a User Through a Web Service](../authenticating-a-user-through-a-web-service.md)

## See Also

### Presenting a Session

- [ASWebAuthenticationPresentationContextProviding](../aswebauthenticationpresentationcontextproviding.md): An interface the session uses to ask a delegate for a presentation context.

# presentationContextProvider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A delegate that provides a display context in which the system can present an authentication session to the user.

## Declaration

```objectivec
@property (nonatomic, weak) id<ASWebAuthenticationPresentationContextProviding> presentationContextProvider;
```

## Mentioned In

- [Authenticating a User Through a Web Service](../authenticating-a-user-through-a-web-service.md)

## See Also

### Presenting a Session

- [ASWebAuthenticationPresentationContextProviding](../aswebauthenticationpresentationcontextproviding.md): An interface the session uses to ask a delegate for a presentation context.
