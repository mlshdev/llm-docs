> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionhandling/begin(_:)](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionhandling/begin(_:))

# begin(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Handles the given session request from an app.

## Declaration

```swift
func begin(_ request: ASWebAuthenticationSessionRequest!)
```

## Parameters

- `request`: The request to begin handling.

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

Your browser app implements this method to accept requests from apps that want to use single sign-on for authentication. Inspect the given request to see what URL to use for the request, and what call back scheme to use to reply to the app. Call the request’s [complete(withCallbackURL:)](../aswebauthenticationsessionrequest/complete%28withcallbackurl_%29.md) method to indicate a completed authentication. Call the [cancelWithError(\_:)](../aswebauthenticationsessionrequest/cancelwitherror%28__%29.md) method if the browser can’t complete the operation, for example because the user cancels it.

## See Also

### Starting and Stopping a Session Request

- [cancel(\_:)](cancel%28__%29.md): Cancels the process of handling the given request.
- [ASWebAuthenticationSessionRequest](../aswebauthenticationsessionrequest.md): A login session request that a web browser receives from an app.

# beginHandlingWebAuthenticationSessionRequest: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Handles the given session request from an app.

## Declaration

```objectivec
- (void) beginHandlingWebAuthenticationSessionRequest:(ASWebAuthenticationSessionRequest *) request;
```

## Parameters

- `request`: The request to begin handling.

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

Your browser app implements this method to accept requests from apps that want to use single sign-on for authentication. Inspect the given request to see what URL to use for the request, and what call back scheme to use to reply to the app. Call the request’s [completeWithCallbackURL:](../aswebauthenticationsessionrequest/complete%28withcallbackurl_%29.md) method to indicate a completed authentication. Call the [cancelWithError:](../aswebauthenticationsessionrequest/cancelwitherror%28__%29.md) method if the browser can’t complete the operation, for example because the user cancels it.

## See Also

### Starting and Stopping a Session Request

- [cancelWebAuthenticationSessionRequest:](cancel%28__%29.md): Cancels the process of handling the given request.
- [ASWebAuthenticationSessionRequest](../aswebauthenticationsessionrequest.md): A login session request that a web browser receives from an app.
