> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/webauthenticationsession/authenticate(using:callbackurlscheme:preferredbrowsersession:)](https://developer.apple.com/documentation/authenticationservices/webauthenticationsession/authenticate(using:callbackurlscheme:preferredbrowsersession:))

# authenticate(using:callbackURLScheme:preferredBrowserSession:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 27.0) · iPadOS 16.4+ (deprecated in 27.0) · Mac Catalyst 16.4+ (deprecated in 27.0) · macOS 13.3+ (deprecated in 27.0) · tvOS 16.4+ (deprecated in 27.0) · visionOS 1.0+ · watchOS 9.4+ (deprecated in 27.0)

Begins a web authentication session.

> Use [authenticate(using:callback:preferredBrowserSession:additionalHeaderFields:)](authenticate%28using_callback_preferredbrowsersession_additionalheaderfields_%29.md) to handle callbacks.

## Declaration

```swift
@MainActor func authenticate(using url: URL, callbackURLScheme: String, preferredBrowserSession: WebAuthenticationSession.BrowserSession? = nil) async throws -> URL
```

## Parameters

- `url`: A URL beginning with HTTP or HTTPS that points to the authentication webpage.
- `callbackURLScheme`: The app’s custom callback scheme.
- `preferredBrowserSession`: The preferred data-sharing behavior of the browser session. For more information, see [WebAuthenticationSession.BrowserSession](browsersession.md).

<a id="return-value"></a>

## Return Value

The URL that the authentication provider returns.
