> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/videoanalyzer/analyze(_:for:)](https://developer.apple.com/documentation/mediaintelligence/videoanalyzer/analyze(_:for:))

# analyze(\_:for:)

**Framework:** Media Intelligence  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Analyzes a video asset using the specified requests.

## Declaration

```swift
final nonisolated(nonsending) func analyze<each T>(_ asset: MediaIntelligenceVideoAsset, for request: repeat each T) async throws -> (repeat Result<(each T).Result, any Error>) where repeat each T : VideoAnalyzer.Request
```

## Parameters

- `asset`: The video asset to analyze.
- `request`: One or more analysis requests to perform.

<a id="return-value"></a>

## Return Value

A tuple of [Result](https://developer.apple.com/documentation/swift/result) values, one per request.

## Mentioned In

- [Finding the best moments in a video](../finding-the-best-moments-in-a-video.md)

<a id="discussion"></a>

## Discussion

Pass one or more values of type [VideoAnalyzer.Request](request.md). The method returns a tuple containing one [Result](https://developer.apple.com/documentation/swift/result) per request, in the same order you provided them. Check each element individually because a failure in one request doesn’t affect the others.

## See Also

### Analyzing a video asset

- [shared](shared.md): The shared video analyzer.
- [VideoAnalyzer.Request](request.md): A type that describes a video analysis operation.
- [VideoAnalyzer.Result](result.md): A type that represents the output of a video analysis operation.
