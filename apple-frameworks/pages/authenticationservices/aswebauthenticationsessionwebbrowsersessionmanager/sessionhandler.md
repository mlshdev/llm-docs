> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionmanager/sessionhandler](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionmanager/sessionhandler)

# sessionHandler (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A handler that a web browser provides to handle session requests from an app.

## Declaration

```swift
var sessionHandler: any ASWebAuthenticationSessionWebBrowserSessionHandling { get set }
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

To enable a web browser that you write to participate in single sign-on (SSO), adopt the [ASWebAuthenticationSessionWebBrowserSessionHandling](../aswebauthenticationsessionwebbrowsersessionhandling.md) protocol, and then set your browser app as the [shared](shared.md) manager’s [sessionHandler](sessionhandler.md).

## See Also

### Handling a Session Request

- [ASWebAuthenticationSessionWebBrowserSessionHandling](../aswebauthenticationsessionwebbrowsersessionhandling.md): An interface that a session handler implements to handle login requests from an app.

# sessionHandler (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A handler that a web browser provides to handle session requests from an app.

## Declaration

```objectivec
@property (nonatomic) id<ASWebAuthenticationSessionWebBrowserSessionHandling> sessionHandler;
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

<a id="Discussion"></a>

## Discussion

To enable a web browser that you write to participate in single sign-on (SSO), adopt the [ASWebAuthenticationSessionWebBrowserSessionHandling](../aswebauthenticationsessionwebbrowsersessionhandling.md) protocol, and then set your browser app as the [sharedManager](shared.md) manager’s [sessionHandler](sessionhandler.md).

## See Also

### Handling a Session Request

- [ASWebAuthenticationSessionWebBrowserSessionHandling](../aswebauthenticationsessionwebbrowsersessionhandling.md): An interface that a session handler implements to handle login requests from an app.
