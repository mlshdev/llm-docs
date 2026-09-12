> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer/analysischangedhandler](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/analysischangedhandler)

# analysisChangedHandler

**Interface language:** Objective-C

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A handler that your app provides to react to sensitive content detection.

## Declaration

```objectivec
@property (copy, readwrite, nullable) SCVideoStreamAnalysisChangeHandler analysisChangedHandler;
```

<a id="discussion"></a>

## Discussion

The system invokes all analyzer handlers on the same conference call with the updated analysis or error.

## See Also

### Responding to sensitive content

- [analysis](analysis.md): The results of the first detected sensitive video frame.
- [SCVideoStreamAnalysisChangeHandler](../scvideostreamanalysischangehandler.md): A handler your app provides to receive video-stream analysis results.
- [continueStream](continuestream%28%29.md): Indicates that your app is ready to resume video stream analysis.
