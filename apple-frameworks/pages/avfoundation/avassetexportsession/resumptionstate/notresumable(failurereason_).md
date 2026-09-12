> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/resumptionstate/notresumable(failurereason:)](https://developer.apple.com/documentation/avfoundation/avassetexportsession/resumptionstate/notresumable(failurereason:))

# AVAssetExportSession.ResumptionState.notResumable(failureReason:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The export session could not be configured for resumption.

## Declaration

```swift
case notResumable(failureReason: AVAssetExportSession.ResumptionFailureReason)
```

## Parameters

- `failureReason`: The reason why resumption was not successfully configured.

## See Also

### Resumption states

- [AVAssetExportSession.ResumptionState.resumable(isResumingFromPreviousState:)](resumable%28isresumingfrompreviousstate_%29.md): The export session is successfully configured for resumption.
