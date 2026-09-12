> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalyzer/analyzevideofile:completionhandler:](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalyzer/analyzevideofile:completionhandler:)

# analyzeVideoFile:completionHandler:

**Interface language:** Objective-C

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

Analyzes a video file on disk at the given URL and runs the given code on completion.

## Declaration

```objectivec
- (NSProgress *) analyzeVideoFile:(NSURL *) fileURL completionHandler:(void (^)(SCSensitivityAnalysis *results, NSError *error)) completionHandler;
```

## Parameters

- `fileURL`: A URL to a video file on disk.

<a id="return-value"></a>

## Return Value

An object that indicates how far analysis progresses while the system checks the video for sensitive content.

## Mentioned In

- [Testing your app’s response to sensitive media](../testing-your-app-s-response-to-sensitive-media.md)

<a id="discussion"></a>

## Discussion

The completion handler:

- Runs on an unspecified queue
- Provides a `results` parameter that indicates whether checked content contains nudity.
