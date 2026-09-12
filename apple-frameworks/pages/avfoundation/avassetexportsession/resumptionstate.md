> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/resumptionstate](https://developer.apple.com/documentation/avfoundation/avassetexportsession/resumptionstate)

# AVAssetExportSession.ResumptionState

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Represents the resumption state of the export session.

## Declaration

```swift
enum ResumptionState
```

<a id="overview"></a>

## Overview

After calling `configureForResumableExport()`, this returned state details whether the export is successfully configured as resumable or not, and provides additional relevant information.

## Topics

### Resumption states

- [AVAssetExportSession.ResumptionState.resumable(isResumingFromPreviousState:)](resumptionstate/resumable%28isresumingfrompreviousstate_%29.md): The export session is successfully configured for resumption.
- [AVAssetExportSession.ResumptionState.notResumable(failureReason:)](resumptionstate/notresumable%28failurereason_%29.md): The export session could not be configured for resumption.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring resumable export

- [configureForResumableExport()](configureforresumableexport%28%29.md): Configures the export session for resumable export.
- [AVAssetExportSession.ResumptionFailureReason](resumptionfailurereason.md): The reason that configuring the export session for resumption failed.
