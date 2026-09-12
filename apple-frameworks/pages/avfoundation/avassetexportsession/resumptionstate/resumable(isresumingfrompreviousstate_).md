> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/resumptionstate/resumable(isresumingfrompreviousstate:)](https://developer.apple.com/documentation/avfoundation/avassetexportsession/resumptionstate/resumable(isresumingfrompreviousstate:))

# AVAssetExportSession.ResumptionState.resumable(isResumingFromPreviousState:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The export session is successfully configured for resumption.

## Declaration

```swift
case resumable(isResumingFromPreviousState: Bool)
```

## Parameters

- `isResumingFromPreviousState`: `true` if the export will continue from a previously interrupted state; `false` if starting/restarting from beginning.

## See Also

### Resumption states

- [AVAssetExportSession.ResumptionState.notResumable(failureReason:)](notresumable%28failurereason_%29.md): The export session could not be configured for resumption.
