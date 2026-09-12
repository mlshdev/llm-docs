> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/webauthenticationsession/authenticate(using:callback:preferredbrowsersession:additionalheaderfields:)](https://developer.apple.com/documentation/authenticationservices/webauthenticationsession/authenticate(using:callback:preferredbrowsersession:additionalheaderfields:))

# authenticate(using:callback:preferredBrowserSession:additionalHeaderFields:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Begins a web authentication session.

## Declaration

```swift
@MainActor func authenticate(using url: URL, callback: ASWebAuthenticationSession.Callback, preferredBrowserSession: WebAuthenticationSession.BrowserSession? = nil, additionalHeaderFields: [String : String]) async throws -> URL
```

## Parameters

- `url`: A URL beginning with HTTP or HTTPS that points to the authentication webpage.
- `callback`: An object that describes when the session calls its completion handler.
- `preferredBrowserSession`: The preferred data-sharing behavior of the browser session. For more information, see [WebAuthenticationSession.BrowserSession](browsersession.md).
- `additionalHeaderFields`: A dictionary containing additional header fields to send when loading the initial URL.

<a id="discussion"></a>

## Discussion

This initializer throws an error if `additionalHeaderFields` includes a “forbidden request-header” as defined by the WHATWG.

## See Also

### Authenticating a session

- [WebAuthenticationSession.BrowserSession](browsersession.md): Describes the preferred browser session behavior.
- [ASWebAuthenticationSession.Callback](../aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
