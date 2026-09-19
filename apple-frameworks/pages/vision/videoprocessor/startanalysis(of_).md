> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/videoprocessor/startanalysis(of:)

# startAnalysis(of:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Begins analyzing video frames.

## Declaration

```swift
final func startAnalysis(of timeRange: CMTimeRange? = nil)
```

## Parameters

- `timeRange`: The range of video timestamps to process.

<a id="Discussion"></a>

## Discussion

By default the framework processes the entire video.
