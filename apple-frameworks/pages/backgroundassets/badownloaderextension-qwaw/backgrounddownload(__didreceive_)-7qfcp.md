> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:didreceive:)-7qfcp

# backgroundDownload(\_:didReceive:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Handles an authentication challenge.

## Declaration

```swift
func backgroundDownload(_ download: BADownload, didReceive challenge: URLAuthenticationChallenge) async -> (URLSession.AuthChallengeDisposition, URLCredential?)
```

## Parameters

- `download`: The download for which the server presented the authentication challenge.
- `challenge`: The authentication challenge.

<a id="return-value"></a>

## Return Value

The disposition with which to respond to the authentication challenge and the credential, if any, to use while doing so.

<a id="discussion"></a>

## Discussion

If your app doesn’t use Apple hosting, then you can override this default implementation to provide your own handling for authentication challenges from your server.
