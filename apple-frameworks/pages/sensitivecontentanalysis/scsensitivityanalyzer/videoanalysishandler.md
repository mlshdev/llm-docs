> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalyzer/videoanalysishandler](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalyzer/videoanalysishandler)

# SCSensitivityAnalyzer.VideoAnalysisHandler

**Framework:** Sensitive Content Analysis  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

An object that checks if a video contains sensitive content and provides status updates.

## Declaration

```swift
final class VideoAnalysisHandler
```

<a id="overview"></a>

## Overview

Checking video for sensitive content can take longer than checking images. This class enables an app to stay informed on the framework’s progress while it checks a video for sensitive content. The [SCSensitivityAnalyzer](../scsensitivityanalyzer.md) method [videoAnalysis(forFileAt:)](videoanalysis%28forfileat_%29.md) returns an instance of this class.

To analyze a video file for sensitive content, pass a video URL into the [videoAnalysis(forFileAt:)](videoanalysis%28forfileat_%29.md) function. While waiting on the [hasSensitiveContent()](videoanalysishandler/hassensitivecontent%28%29.md) method, check [progress](videoanalysishandler/progress.md) for the completion status:

```swift
let handler = analyzer.videoAnalysis(forFileAt: videoFileUrl)

let progress = handler.progress
// Do something with the `progress` property, such as dispatch a UI update thread.

// Wait here until the video check for sensitive content completes.
let response = try await handler.hasSensitiveContent()
```

## Topics

### Checking progress

- [progress](videoanalysishandler/progress.md): An object that provides the app with status updates while a sensitive content check occurs for a video.

### Determining sensitivity

- [hasSensitiveContent()](videoanalysishandler/hassensitivecontent%28%29.md): Provides a result that indicates if the video file contains sensitive content.

## See Also

### Analyzing video

- [videoAnalysis(forFileAt:)](videoanalysis%28forfileat_%29.md): Analyzes a video file on disk at a URL for sensitive content.
