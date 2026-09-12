> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:finishedwithfileurl:)](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/backgrounddownload(_:finishedwithfileurl:))

# backgroundDownload(\_:finishedWithFileURL:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```swift
func backgroundDownload(_ finishedDownload: BADownload, finishedWithFileURL fileURL: URL)
```

## Default Implementations

### BADownloaderExtension Implementations

- [backgroundDownload(\_:finishedWithFileURL:)](backgrounddownload%28__finishedwithfileurl_%29-4s70i.md): Handles a finished download
- [backgroundDownload(\_:finishedWithFileURL:)](backgrounddownload%28__finishedwithfileurl_%29-5cjqw.md): This method is called when a download has finished but there is no `BADownloadManager` delegate to handle the completion event.

## See Also

### Processing downloads

- [backgroundDownload(\_:didReceive:)](backgrounddownload%28__didreceive_%29.md)
- [backgroundDownload(\_:failedWithError:)](backgrounddownload%28__failedwitherror_%29.md)
