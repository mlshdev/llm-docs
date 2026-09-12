> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionhandling](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionhandling)

# ASWebAuthenticationSessionWebBrowserSessionHandling (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** macOS 10.15+

An interface that a session handler implements to handle login requests from an app.

## Declaration

```swift
protocol ASWebAuthenticationSessionWebBrowserSessionHandling
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](supporting-single-sign-on-in-a-web-browser-app.md)

## Topics

### Starting and Stopping a Session Request

- [begin(\_:)](aswebauthenticationsessionwebbrowsersessionhandling/begin%28__%29.md): Handles the given session request from an app.
- [cancel(\_:)](aswebauthenticationsessionwebbrowsersessionhandling/cancel%28__%29.md): Cancels the process of handling the given request.
- [ASWebAuthenticationSessionRequest](aswebauthenticationsessionrequest.md): A login session request that a web browser receives from an app.

## See Also

### Handling a Session Request

- [sessionHandler](aswebauthenticationsessionwebbrowsersessionmanager/sessionhandler.md): A handler that a web browser provides to handle session requests from an app.

# ASWebAuthenticationSessionWebBrowserSessionHandling (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** macOS 10.15+

An interface that a session handler implements to handle login requests from an app.

## Declaration

```objectivec
@protocol ASWebAuthenticationSessionWebBrowserSessionHandling
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](supporting-single-sign-on-in-a-web-browser-app.md)

## Topics

### Starting and Stopping a Session Request

- [beginHandlingWebAuthenticationSessionRequest:](aswebauthenticationsessionwebbrowsersessionhandling/begin%28__%29.md): Handles the given session request from an app.
- [cancelWebAuthenticationSessionRequest:](aswebauthenticationsessionwebbrowsersessionhandling/cancel%28__%29.md): Cancels the process of handling the given request.
- [ASWebAuthenticationSessionRequest](aswebauthenticationsessionrequest.md): A login session request that a web browser receives from an app.

## See Also

### Handling a Session Request

- [sessionHandler](aswebauthenticationsessionwebbrowsersessionmanager/sessionhandler.md): A handler that a web browser provides to handle session requests from an app.
