> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9bwls/usedownloadsfolder(placeholdertype:finalfilecreatedhandler:)](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9bwls/usedownloadsfolder(placeholdertype:finalfilecreatedhandler:))

# useDownloadsFolder(placeholderType:finalFileCreatedHandler:)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Asks the system to create a placeholder for the downloaded file in the person’s Downloads folder.

## Declaration

```swift
@objc(useDownloadsFolderWithPlaceholderType:finalFileCreatedHandler:) func useDownloadsFolder(placeholderType: UTType? = nil, finalFileCreatedHandler: @escaping @Sendable (BEDownloadMonitor.Location?) -> Void)
```

## Parameters

- `placeholderType`: The type of the file for which the system creates a placeholder. If this is `nil`, the system chooses a type based on the download’s filename extension.
- `finalFileCreatedHandler`: A closure you use to receive the location of the downloaded file in the person’s Downloads folder.

## Mentioned In

- [Downloading files in a web browser with an alternative browser engine](../downloading-files-in-a-web-browser.md)

## See Also

### Creating a download placeholder

- [BEDownloadMonitor.Location](location.md): A class that associates a URL with the bookmark you use to access that URL.
