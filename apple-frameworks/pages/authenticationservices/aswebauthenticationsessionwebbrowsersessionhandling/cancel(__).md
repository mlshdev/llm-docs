> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionhandling/cancel(_:)](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionhandling/cancel(_:))

# cancel(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Cancels the process of handling the given request.

## Declaration

```swift
func cancel(_ request: ASWebAuthenticationSessionRequest!)
```

## Parameters

- `request`: The request to cancel.

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

Your browser app implements this method to accept cancellation requests from the initiating app.

When you’ve finished your app’s teardown activities in your implementation of this method, call [cancelWithError(\_:)](../aswebauthenticationsessionrequest/cancelwitherror%28__%29.md) on the provided request object. Use [ASWebAuthenticationSessionErrorDomain](../aswebauthenticationsessionerrordomain.md) for the error domain and [ASWebAuthenticationSessionError.Code.canceledLogin](../aswebauthenticationsessionerror/code/canceledlogin.md) for the error code, unless another error happened that you need to communicate to the system.

## See Also

### Starting and Stopping a Session Request

- [begin(\_:)](begin%28__%29.md): Handles the given session request from an app.
- [ASWebAuthenticationSessionRequest](../aswebauthenticationsessionrequest.md): A login session request that a web browser receives from an app.

# cancelWebAuthenticationSessionRequest: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Cancels the process of handling the given request.

## Declaration

```objectivec
- (void) cancelWebAuthenticationSessionRequest:(ASWebAuthenticationSessionRequest *) request;
```

## Parameters

- `request`: The request to cancel.

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

Your browser app implements this method to accept cancellation requests from the initiating app.

When you’ve finished your app’s teardown activities in your implementation of this method, call [cancelWithError:](../aswebauthenticationsessionrequest/cancelwitherror%28__%29.md) on the provided request object. Use [ASWebAuthenticationSessionErrorDomain](../aswebauthenticationsessionerrordomain.md) for the error domain and [ASWebAuthenticationSessionErrorCodeCanceledLogin](../aswebauthenticationsessionerror/code/canceledlogin.md) for the error code, unless another error happened that you need to communicate to the system.

## See Also

### Starting and Stopping a Session Request

- [beginHandlingWebAuthenticationSessionRequest:](begin%28__%29.md): Handles the given session request from an app.
- [ASWebAuthenticationSessionRequest](../aswebauthenticationsessionrequest.md): A login session request that a web browser receives from an app.
