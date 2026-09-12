> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:failedwitherror:)-5geag](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:failedwitherror:)-5geag)

# backgroundDownload(\_:failedWithError:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Handles a failed download.

## Declaration

```swift
func backgroundDownload(_ failedDownload: BADownload, failedWithError error: any Error)
```

## Parameters

- `failedDownload`: The failed download.
- `error`: The error.

<a id="discussion"></a>

## Discussion

> **Warning**

> Don’t override this default implementation.
