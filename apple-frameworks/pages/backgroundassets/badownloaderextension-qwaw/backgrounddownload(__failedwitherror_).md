> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:failedwitherror:)

# backgroundDownload(\_:failedWithError:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```swift
func backgroundDownload(_ failedDownload: BADownload, failedWithError error: any Error)
```

## Default Implementations

### BADownloaderExtension Implementations

- [backgroundDownload(\_:failedWithError:)](backgrounddownload%28__failedwitherror_%29-5geag.md): Handles a failed download.
- [backgroundDownload(\_:failedWithError:)](backgrounddownload%28__failedwitherror_%29-9erie.md): This method is called when a download has failed but there is no `BADownloadManager` delegate to handle the completion event. When a download has failed, this method will be invoked. If a download fails you may reschedule it with `BADownloadManager`.

## See Also

### Processing downloads

- [backgroundDownload(\_:didReceive:)](backgrounddownload%28__didreceive_%29.md)
- [backgroundDownload(\_:finishedWithFileURL:)](backgrounddownload%28__finishedwithfileurl_%29.md)
