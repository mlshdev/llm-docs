> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:finishedwithfileurl:)-4s70i

# backgroundDownload(\_:finishedWithFileURL:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Handles a finished download

## Declaration

```swift
func backgroundDownload(_ finishedDownload: BADownload, finishedWithFileURL fileURL: URL)
```

## Parameters

- `finishedDownload`: The finished download.
- `fileURL`: The file URL at which the downloaded asset pack was saved.

<a id="discussion"></a>

## Discussion

> **Warning**

> Don’t override this default implementation.
