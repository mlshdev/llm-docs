> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9bwls/beginmonitoring()](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9bwls/beginmonitoring())

# beginMonitoring()

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Informs the system to start monitoring the download.

## Declaration

```swift
@objc(beginMonitoring:) func beginMonitoring() async throws -> BEDownloadMonitor.Location?
```

<a id="return-value"></a>

## Return Value

If you called [useDownloadsFolder(placeholderType:finalFileCreatedHandler:)](usedownloadsfolder%28placeholdertype_finalfilecreatedhandler_%29.md), this method returns the placeholder location that the system creates to host the downloaded content; otherwise, it returns `nil`.

## Mentioned In

- [Downloading files in a web browser with an alternative browser engine](../downloading-files-in-a-web-browser.md)

## See Also

### Reporting progress to the system

- [resumeMonitoring(placeholderURL:)](resumemonitoring%28placeholderurl_%29.md): Informs the system that it needs to resume monitoring the download.
