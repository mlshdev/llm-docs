> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/analysischanges

# analysisChanges

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A stream your app uses to receive video-stream analysis results.

## Declaration

```swift
var analysisChanges: some AsyncSequence<SCSensitivityAnalysis, any Error> { get }
```

## See Also

### Analyzing a video stream

- [analyze(\_:)](analyze%28__%29.md): Analyzes individual video-stream frames for sensitive content.
- [beginAnalysis(of:)](beginanalysis%28of_%29-78qm.md): Analyzes video frames for the given capture device input.
- [beginAnalysis(of:)](beginanalysis%28of_%29-9ehkx.md): Analyzes video frames for the given decompression session.
- [endAnalysis()](endanalysis%28%29.md): Stops stream analysis.
