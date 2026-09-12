> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:didreceive:)-5vjx7](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:didreceive:)-5vjx7)

# backgroundDownload(\_:didReceive:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Download is about to begin but requires an authentication challenge to continue.

## Declaration

```swift
func backgroundDownload(_ download: BADownload, didReceive challenge: URLAuthenticationChallenge) async -> (URLSession.AuthChallengeDisposition, URLCredential?)
```

## Parameters

- `download`: The download object that this challenge request is for.
- `challenge`: The challenge that been received and needs to be processed.

<a id="return-value"></a>

## Return Value

A tuple that informs the subsystem how the challenge request shall be answered.
