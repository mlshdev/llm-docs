> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationdeciding/decideauthenticationchallengedisposition(for:)](https://developer.apple.com/documentation/webkit/webpage/navigationdeciding/decideauthenticationchallengedisposition(for:))

# decideAuthenticationChallengeDisposition(for:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Determines the response to an authentication challenge.

## Declaration

```swift
@MainActor mutating func decideAuthenticationChallengeDisposition(for challenge: URLAuthenticationChallenge) async -> (URLSession.AuthChallengeDisposition, URLCredential?)
```

## Parameters

- `challenge`: The authentication challenge.

<a id="return-value"></a>

## Return Value

The option to use to handle the challenge, and the credential to use for authentication when the disposition is `URLSession/AuthChallengeDisposition/useCredential`.

## Default Implementations

### WebPage.NavigationDeciding Implementations

- [decideAuthenticationChallengeDisposition(for:)](decideauthenticationchallengedisposition%28for_%29-693ex.md): By default, this method immediately returns with a disposition of `performDefaultHandling` and a `nil` credential.
