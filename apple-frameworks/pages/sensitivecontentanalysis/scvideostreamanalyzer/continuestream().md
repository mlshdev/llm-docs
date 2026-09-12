> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer/continuestream()](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/continuestream())

# continueStream() (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Indicates that your app is ready to resume video stream analysis.

## Declaration

```swift
func continueStream()
```

<a id="discussion"></a>

## Discussion

When the framework detects sensitive content in the video stream, it pauses analysis and begins censoring the stream’s video frames. Call this method to resume analysis and stop censoring video frames when your app is ready to show the stream again.

## See Also

### Responding to sensitive content

- [analysis](analysis.md): The results of the first detected sensitive video frame.

# continueStream (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Indicates that your app is ready to resume video stream analysis.

## Declaration

```objectivec
- (void) continueStream;
```

<a id="discussion"></a>

## Discussion

When the framework detects sensitive content in the video stream, it pauses analysis and begins censoring the stream’s video frames. Call this method to resume analysis and stop censoring video frames when your app is ready to show the stream again.

## See Also

### Responding to sensitive content

- [analysis](analysis.md): The results of the first detected sensitive video frame.
- [analysisChangedHandler](analysischangedhandler.md): A handler that your app provides to react to sensitive content detection.
- [SCVideoStreamAnalysisChangeHandler](../scvideostreamanalysischangehandler.md): A handler your app provides to receive video-stream analysis results.
