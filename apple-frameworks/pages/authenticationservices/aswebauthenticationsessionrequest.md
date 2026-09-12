> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest)

# ASWebAuthenticationSessionRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** macOS 10.15+

A login session request that a web browser receives from an app.

## Declaration

```swift
class ASWebAuthenticationSessionRequest
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](supporting-single-sign-on-in-a-web-browser-app.md)

## Topics

### Interpreting a request

- [url](aswebauthenticationsessionrequest/url.md): The web address the browser should use to perform the authentication request.
- [shouldUseEphemeralSession](aswebauthenticationsessionrequest/shoulduseephemeralsession.md): A Boolean that indicates whether the browser should use a private browsing session.
- [uuid](aswebauthenticationsessionrequest/uuid.md): A unique identifier for the request.
- [additionalHeaderFields](aswebauthenticationsessionrequest/additionalheaderfields.md): Additional headers to send when loading the initial URL.

### Finishing a request

- [callback](aswebauthenticationsessionrequest/callback.md): The callback to listen for, which completes the request.
- [ASWebAuthenticationSession.Callback](aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
- [complete(withCallbackURL:)](aswebauthenticationsessionrequest/complete%28withcallbackurl_%29.md): Indicates that the browser successfully completed the authentication attempt.
- [cancelWithError(\_:)](aswebauthenticationsessionrequest/cancelwitherror%28__%29.md): Indicates that the browser canceled the authentication attempt.

### Indicating completion

- [delegate](aswebauthenticationsessionrequest/delegate.md): A delegate that the session request instance informs about authentication completion.
- [ASWebAuthenticationSessionRequestDelegate](aswebauthenticationsessionrequestdelegate.md): An interface through which the session request can inform its delegate, which is typically a browser, about the outcome of the authentication attempt.

### Deprecated symbols

- [callbackURLScheme](aswebauthenticationsessionrequest/callbackurlscheme.md): Deprecated. The scheme for the browser to use when returning the result of the authentication attempt to the app requesting it.

### Initializers

- [init(coder:)](aswebauthenticationsessionrequest/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Starting and Stopping a Session Request

- [begin(\_:)](aswebauthenticationsessionwebbrowsersessionhandling/begin%28__%29.md): Handles the given session request from an app.
- [cancel(\_:)](aswebauthenticationsessionwebbrowsersessionhandling/cancel%28__%29.md): Cancels the process of handling the given request.

# ASWebAuthenticationSessionRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

A login session request that a web browser receives from an app.

## Declaration

```objectivec
@interface ASWebAuthenticationSessionRequest : NSObject
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](supporting-single-sign-on-in-a-web-browser-app.md)

## Topics

### Interpreting a request

- [URL](aswebauthenticationsessionrequest/url.md): The web address the browser should use to perform the authentication request.
- [shouldUseEphemeralSession](aswebauthenticationsessionrequest/shoulduseephemeralsession.md): A Boolean that indicates whether the browser should use a private browsing session.
- [UUID](aswebauthenticationsessionrequest/uuid.md): A unique identifier for the request.
- [additionalHeaderFields](aswebauthenticationsessionrequest/additionalheaderfields.md): Additional headers to send when loading the initial URL.

### Finishing a request

- [callback](aswebauthenticationsessionrequest/callback.md): The callback to listen for, which completes the request.
- [ASWebAuthenticationSessionCallback](aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
- [completeWithCallbackURL:](aswebauthenticationsessionrequest/complete%28withcallbackurl_%29.md): Indicates that the browser successfully completed the authentication attempt.
- [cancelWithError:](aswebauthenticationsessionrequest/cancelwitherror%28__%29.md): Indicates that the browser canceled the authentication attempt.

### Indicating completion

- [delegate](aswebauthenticationsessionrequest/delegate.md): A delegate that the session request instance informs about authentication completion.
- [ASWebAuthenticationSessionRequestDelegate](aswebauthenticationsessionrequestdelegate.md): An interface through which the session request can inform its delegate, which is typically a browser, about the outcome of the authentication attempt.

### Deprecated symbols

- [callbackURLScheme](aswebauthenticationsessionrequest/callbackurlscheme.md): Deprecated. The scheme for the browser to use when returning the result of the authentication attempt to the app requesting it.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Starting and Stopping a Session Request

- [beginHandlingWebAuthenticationSessionRequest:](aswebauthenticationsessionwebbrowsersessionhandling/begin%28__%29.md): Handles the given session request from an app.
- [cancelWebAuthenticationSessionRequest:](aswebauthenticationsessionwebbrowsersessionhandling/cancel%28__%29.md): Cancels the process of handling the given request.
