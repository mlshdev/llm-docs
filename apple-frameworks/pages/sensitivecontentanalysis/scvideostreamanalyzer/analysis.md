> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer/analysis](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/analysis)

# analysis (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The results of the first detected sensitive video frame.

## Declaration

```swift
var analysis: SCSensitivityAnalysis? { get }
```

<a id="discussion"></a>

## Discussion

The analysis also includes suggestions for the app based on the nature of the sensitive content, including: [shouldInterruptVideo](../scsensitivityanalysis/shouldinterruptvideo.md), [shouldIndicateSensitivity](../scsensitivityanalysis/shouldindicatesensitivity.md) and [shouldMuteAudio](../scsensitivityanalysis/shouldmuteaudio.md).

## See Also

### Responding to sensitive content

- [continueStream()](continuestream%28%29.md): Indicates that your app is ready to resume video stream analysis.

# analysis (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The results of the first detected sensitive video frame.

## Declaration

```objectivec
@property (readonly, nullable) SCSensitivityAnalysis * analysis;
```

<a id="discussion"></a>

## Discussion

The analysis also includes suggestions for the app based on the nature of the sensitive content, including: [shouldInterruptVideo](../scsensitivityanalysis/shouldinterruptvideo.md), [shouldIndicateSensitivity](../scsensitivityanalysis/shouldindicatesensitivity.md) and [shouldMuteAudio](../scsensitivityanalysis/shouldmuteaudio.md).

## See Also

### Responding to sensitive content

- [analysisChangedHandler](analysischangedhandler.md): A handler that your app provides to react to sensitive content detection.
- [SCVideoStreamAnalysisChangeHandler](../scvideostreamanalysischangehandler.md): A handler your app provides to receive video-stream analysis results.
- [continueStream](continuestream%28%29.md): Indicates that your app is ready to resume video stream analysis.
