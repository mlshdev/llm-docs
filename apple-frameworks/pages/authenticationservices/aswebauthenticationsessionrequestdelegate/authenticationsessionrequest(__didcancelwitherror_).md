> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequestdelegate/authenticationsessionrequest(_:didcancelwitherror:)](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequestdelegate/authenticationsessionrequest(_:didcancelwitherror:))

# authenticationSessionRequest(\_:didCancelWithError:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate, typically a browser, that the authentication was canceled.

## Declaration

```swift
optional func authenticationSessionRequest(_ authenticationSessionRequest: ASWebAuthenticationSessionRequest, didCancelWithError error: any Error)
```

## Parameters

- `authenticationSessionRequest`: The request sending the message.
- `error`: An error that indicates the reason for the cancelation.

## See Also

### Responding to Completion Events

- [authenticationSessionRequest(\_:didCompleteWithCallbackURL:)](authenticationsessionrequest%28__didcompletewithcallbackurl_%29.md): Tells the delegate, typically a browser, that the authentication completed successfully.

# authenticationSessionRequest:didCancelWithError: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

Tells the delegate, typically a browser, that the authentication was canceled.

## Declaration

```objectivec
- (void) authenticationSessionRequest:(ASWebAuthenticationSessionRequest *) authenticationSessionRequest didCancelWithError:(NSError *) error;
```

## Parameters

- `authenticationSessionRequest`: The request sending the message.
- `error`: An error that indicates the reason for the cancelation.

## See Also

### Responding to Completion Events

- [authenticationSessionRequest:didCompleteWithCallbackURL:](authenticationsessionrequest%28__didcompletewithcallbackurl_%29.md): Tells the delegate, typically a browser, that the authentication completed successfully.
