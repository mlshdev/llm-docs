> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequestdelegate/authenticationsessionrequest(_:didcompletewithcallbackurl:)

# authenticationSessionRequest(\_:didCompleteWithCallbackURL:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate, typically a browser, that the authentication completed successfully.

## Declaration

```swift
optional func authenticationSessionRequest(_ authenticationSessionRequest: ASWebAuthenticationSessionRequest, didCompleteWithCallbackURL callbackURL: URL)
```

## Parameters

- `authenticationSessionRequest`: The request sending the message.
- `callbackURL`: A URL using the scheme indicated by the request’s [callbackURLScheme](../aswebauthenticationsessionrequest/callbackurlscheme.md) property that indicates the outcome of the authentication attempt.

## See Also

### Responding to Completion Events

- [authenticationSessionRequest(\_:didCancelWithError:)](authenticationsessionrequest%28__didcancelwitherror_%29.md): Tells the delegate, typically a browser, that the authentication was canceled.

# authenticationSessionRequest:didCompleteWithCallbackURL: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

Tells the delegate, typically a browser, that the authentication completed successfully.

## Declaration

```objectivec
- (void) authenticationSessionRequest:(ASWebAuthenticationSessionRequest *) authenticationSessionRequest didCompleteWithCallbackURL:(NSURL *) callbackURL;
```

## Parameters

- `authenticationSessionRequest`: The request sending the message.
- `callbackURL`: A URL using the scheme indicated by the request’s [callbackURLScheme](../aswebauthenticationsessionrequest/callbackurlscheme.md) property that indicates the outcome of the authentication attempt.

## See Also

### Responding to Completion Events

- [authenticationSessionRequest:didCancelWithError:](authenticationsessionrequest%28__didcancelwitherror_%29.md): Tells the delegate, typically a browser, that the authentication was canceled.
