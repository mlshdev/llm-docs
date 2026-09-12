> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9bwls/resumemonitoring(placeholderurl:)](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9bwls/resumemonitoring(placeholderurl:))

# resumeMonitoring(placeholderURL:)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Informs the system that it needs to resume monitoring the download.

## Declaration

```swift
@objc(resumeMonitoring:completionHandler:) func resumeMonitoring(placeholderURL: URL) async throws
```

## Parameters

- `placeholderURL`: The placeholder location your networking extension previously received when it called [beginMonitoring()](beginmonitoring%28%29.md).

<a id="discussion"></a>

## Discussion

Call this method when your browser resumes the download after an interruption, for example, someone cancels the download, or your networking extension encounters a network error.

## See Also

### Reporting progress to the system

- [beginMonitoring()](beginmonitoring%28%29.md): Informs the system to start monitoring the download.
