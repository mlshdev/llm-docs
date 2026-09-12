> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/webauthenticationsession/browsersession](https://developer.apple.com/documentation/authenticationservices/webauthenticationsession/browsersession)

# WebAuthenticationSession.BrowserSession

**Framework:** AuthenticationServices  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Describes the preferred browser session behavior.

## Declaration

```swift
struct BrowserSession
```

## Topics

### Behaviors

- [ephemeral](browsersession/ephemeral.md): A session that doesn’t share cookies or other browsing data with a person’s normal browser session.
- [shared](browsersession/shared.md): A session that can share cookies and other browsing data with a person’s normal browser session.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authenticating a session

- [authenticate(using:callback:preferredBrowserSession:additionalHeaderFields:)](authenticate%28using_callback_preferredbrowsersession_additionalheaderfields_%29.md): Begins a web authentication session.
- [ASWebAuthenticationSession.Callback](../aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
