> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequestdelegate](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequestdelegate)

# ASWebAuthenticationSessionRequestDelegate (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** macOS 10.15+

An interface through which the session request can inform its delegate, which is typically a browser, about the outcome of the authentication attempt.

## Declaration

```swift
protocol ASWebAuthenticationSessionRequestDelegate : NSObjectProtocol
```

## Topics

### Responding to Completion Events

- [authenticationSessionRequest(\_:didCompleteWithCallbackURL:)](aswebauthenticationsessionrequestdelegate/authenticationsessionrequest%28__didcompletewithcallbackurl_%29.md): Tells the delegate, typically a browser, that the authentication completed successfully.
- [authenticationSessionRequest(\_:didCancelWithError:)](aswebauthenticationsessionrequestdelegate/authenticationsessionrequest%28__didcancelwitherror_%29.md): Tells the delegate, typically a browser, that the authentication was canceled.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Indicating completion

- [delegate](aswebauthenticationsessionrequest/delegate.md): A delegate that the session request instance informs about authentication completion.

# ASWebAuthenticationSessionRequestDelegate (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

An interface through which the session request can inform its delegate, which is typically a browser, about the outcome of the authentication attempt.

## Declaration

```objectivec
@protocol ASWebAuthenticationSessionRequestDelegate <NSObject>
```

## Topics

### Responding to Completion Events

- [authenticationSessionRequest:didCompleteWithCallbackURL:](aswebauthenticationsessionrequestdelegate/authenticationsessionrequest%28__didcompletewithcallbackurl_%29.md): Tells the delegate, typically a browser, that the authentication completed successfully.
- [authenticationSessionRequest:didCancelWithError:](aswebauthenticationsessionrequestdelegate/authenticationsessionrequest%28__didcancelwitherror_%29.md): Tells the delegate, typically a browser, that the authentication was canceled.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Indicating completion

- [delegate](aswebauthenticationsessionrequest/delegate.md): A delegate that the session request instance informs about authentication completion.
