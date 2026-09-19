> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaintelligence/highlightanalysisrequest/result/levels

# levels

**Framework:** Media Intelligence  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The engagement level of each segment in the video.

## Declaration

```swift
let levels: [(timeRange: CMTimeRange, level: Float)]
```

## Mentioned In

- [Finding the best moments in a video](../../finding-the-best-moments-in-a-video.md)

<a id="discussion"></a>

## Discussion

Each element pairs a [CMTimeRange](../../../coremedia/cmtimerange.md) with a floating-point level value from `0` (least engaging) to `9` (most engaging). The array covers every segment in the video, not just the highlights.

## See Also

### Inspecting the result

- [highlights](highlights.md): The time ranges the framework identifies as highlights.
