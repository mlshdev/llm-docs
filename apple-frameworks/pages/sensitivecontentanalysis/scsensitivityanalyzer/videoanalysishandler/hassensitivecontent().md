> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalyzer/videoanalysishandler/hassensitivecontent()

# hasSensitiveContent()

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

Provides a result that indicates if the video file contains sensitive content.

## Declaration

```swift
final func hasSensitiveContent() async throws -> SCSensitivityAnalysis
```

<a id="return-value"></a>

## Return Value

An object that indicates if checked content contains nudity.
