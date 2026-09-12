> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalyzer/videoanalysis(forfileat:)](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalyzer/videoanalysis(forfileat:))

# videoAnalysis(forFileAt:)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

Analyzes a video file on disk at a URL for sensitive content.

## Declaration

```swift
func videoAnalysis(forFileAt fileURL: URL) -> SCSensitivityAnalyzer.VideoAnalysisHandler
```

## Parameters

- `fileURL`: The URL for a video file on disk.

<a id="return-value"></a>

## Return Value

An object that checks if a video contains sensitive content and provides the app with status updates as the analysis progresses.

## See Also

### Analyzing video

- [SCSensitivityAnalyzer.VideoAnalysisHandler](videoanalysishandler.md): An object that checks if a video contains sensitive content and provides status updates.
