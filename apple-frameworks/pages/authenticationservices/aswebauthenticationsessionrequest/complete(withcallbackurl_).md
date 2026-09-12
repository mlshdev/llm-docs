> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest/complete(withcallbackurl:)](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest/complete(withcallbackurl:))

# complete(withCallbackURL:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Indicates that the browser successfully completed the authentication attempt.

## Declaration

```swift
func complete(withCallbackURL url: URL)
```

## Parameters

- `url`: A URL using the scheme indicated by the request’s [callbackURLScheme](callbackurlscheme.md) property that indicates the outcome of the authentication attempt.

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

Call this method from your browser app when the authentication attempt completes to report the result of the attempt using the callback URL.

## See Also

### Finishing a request

- [callback](callback.md): The callback to listen for, which completes the request.
- [ASWebAuthenticationSession.Callback](../aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
- [cancelWithError(\_:)](cancelwitherror%28__%29.md): Indicates that the browser canceled the authentication attempt.

# completeWithCallbackURL: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

Indicates that the browser successfully completed the authentication attempt.

## Declaration

```objectivec
- (void) completeWithCallbackURL:(NSURL *) url;
```

## Parameters

- `url`: A URL using the scheme indicated by the request’s [callbackURLScheme](callbackurlscheme.md) property that indicates the outcome of the authentication attempt.

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

Call this method from your browser app when the authentication attempt completes to report the result of the attempt using the callback URL.

## See Also

### Finishing a request

- [callback](callback.md): The callback to listen for, which completes the request.
- [ASWebAuthenticationSessionCallback](../aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
- [cancelWithError:](cancelwitherror%28__%29.md): Indicates that the browser canceled the authentication attempt.
