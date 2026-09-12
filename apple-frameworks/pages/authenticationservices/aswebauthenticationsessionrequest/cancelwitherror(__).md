> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest/cancelwitherror(_:)](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest/cancelwitherror(_:))

# cancelWithError(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Indicates that the browser canceled the authentication attempt.

## Declaration

```swift
func cancelWithError(_ error: any Error)
```

## Parameters

- `error`: An error with domain [ASWebAuthenticationSessionErrorDomain](../aswebauthenticationsessionerrordomain.md) and a suitable code from [ASWebAuthenticationSessionError.Code](../aswebauthenticationsessionerror/code.md) that indicates the reason for the cancelation.

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

Call this method from your browser app when the authentication attempt fails to complete, for example because the user cancels it.

## See Also

### Finishing a request

- [callback](callback.md): The callback to listen for, which completes the request.
- [ASWebAuthenticationSession.Callback](../aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
- [complete(withCallbackURL:)](complete%28withcallbackurl_%29.md): Indicates that the browser successfully completed the authentication attempt.

# cancelWithError: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

Indicates that the browser canceled the authentication attempt.

## Declaration

```objectivec
- (void) cancelWithError:(NSError *) error;
```

## Parameters

- `error`: An error with domain [ASWebAuthenticationSessionErrorDomain](../aswebauthenticationsessionerrordomain.md) and a suitable code from [ASWebAuthenticationSessionErrorCode](../aswebauthenticationsessionerror/code.md) that indicates the reason for the cancelation.

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

Call this method from your browser app when the authentication attempt fails to complete, for example because the user cancels it.

## See Also

### Finishing a request

- [callback](callback.md): The callback to listen for, which completes the request.
- [ASWebAuthenticationSessionCallback](../aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
- [completeWithCallbackURL:](complete%28withcallbackurl_%29.md): Indicates that the browser successfully completed the authentication attempt.
