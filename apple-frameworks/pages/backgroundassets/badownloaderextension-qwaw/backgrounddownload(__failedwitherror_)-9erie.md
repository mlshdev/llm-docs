> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:failedwitherror:)-9erie](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:failedwitherror:)-9erie)

# backgroundDownload(\_:failedWithError:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

This method is called when a download has failed but there is no `BADownloadManager` delegate to handle the completion event. When a download has failed, this method will be invoked. If a download fails you may reschedule it with `BADownloadManager`.

## Declaration

```swift
func backgroundDownload(_ failedDownload: BADownload, failedWithError error: any Error)
```

## Parameters

- `failedDownload`: The download object that has failed.
- `error`: The error that caused the failure.
