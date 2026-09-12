> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsession/prefersephemeralwebbrowsersession](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/prefersephemeralwebbrowsersession)

# prefersEphemeralWebBrowserSession (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.2+

A Boolean value that indicates whether the session should ask the browser for a private authentication session.

## Declaration

```swift
var prefersEphemeralWebBrowserSession: Bool { get set }
```

## Mentioned In

- [Authenticating a User Through a Web Service](../authenticating-a-user-through-a-web-service.md)

<a id="Discussion"></a>

## Discussion

Set [prefersEphemeralWebBrowserSession](prefersephemeralwebbrowsersession.md) to `true` to request that the browser doesn’t share cookies or other browsing data between the authentication session and the user’s normal browser session.

Safari always respects the request. In macOS, someone can choose a different default browser that might or might not respect the request.

The value of this property is `false` by default.

Set this property before you call [start()](start%28%29.md). Otherwise it has no effect.

# prefersEphemeralWebBrowserSession (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.2+

A Boolean value that indicates whether the session should ask the browser for a private authentication session.

## Declaration

```objectivec
@property (nonatomic) BOOL prefersEphemeralWebBrowserSession;
```

## Mentioned In

- [Authenticating a User Through a Web Service](../authenticating-a-user-through-a-web-service.md)

<a id="Discussion"></a>

## Discussion

Set [prefersEphemeralWebBrowserSession](prefersephemeralwebbrowsersession.md) to `true` to request that the browser doesn’t share cookies or other browsing data between the authentication session and the user’s normal browser session.

Safari always respects the request. In macOS, someone can choose a different default browser that might or might not respect the request.

The value of this property is `false` by default.

Set this property before you call [start](start%28%29.md). Otherwise it has no effect.
