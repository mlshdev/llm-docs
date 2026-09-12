> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:didreceive:)](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:didreceive:))

# backgroundDownload(\_:didReceive:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```swift
func backgroundDownload(_ download: BADownload, didReceive challenge: URLAuthenticationChallenge) async -> (URLSession.AuthChallengeDisposition, URLCredential?)
```

## Default Implementations

### BADownloaderExtension Implementations

- [backgroundDownload(\_:didReceive:)](backgrounddownload%28__didreceive_%29-5vjx7.md): Download is about to begin but requires an authentication challenge to continue.
- [backgroundDownload(\_:didReceive:)](backgrounddownload%28__didreceive_%29-7qfcp.md): Handles an authentication challenge.

## See Also

### Processing downloads

- [backgroundDownload(\_:finishedWithFileURL:)](backgrounddownload%28__finishedwithfileurl_%29.md)
- [backgroundDownload(\_:failedWithError:)](backgrounddownload%28__failedwitherror_%29.md)
