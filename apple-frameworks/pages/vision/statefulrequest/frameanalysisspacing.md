> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/statefulrequest/frameanalysisspacing

# frameAnalysisSpacing

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The reciprocal of the maximum rate to process buffers.

## Declaration

```swift
var frameAnalysisSpacing: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

The request won’t process buffers that fall within the [frameAnalysisSpacing](frameanalysisspacing.md) since the previously performed analysis. The analysis isn’t done by wall time but by analysis of the time stamps of the sample buffers the request processes.

## See Also

### Inspecting the request

- [minimumLatencyFrameCount](minimumlatencyframecount.md): The minimum number of frames that the request has to process before reporting any observations.
