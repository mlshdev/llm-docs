> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/resumptionfailurereason/temporarydirectorydoesnotexist](https://developer.apple.com/documentation/avfoundation/avassetexportsession/resumptionfailurereason/temporarydirectorydoesnotexist)

# temporaryDirectoryDoesNotExist (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates that the specified temporary files directory doesn’t exist.

## Declaration

```swift
static let temporaryDirectoryDoesNotExist: AVAssetExportSession.ResumptionFailureReason
```

<a id="discussion"></a>

## Discussion

Create the temporary files directory and call [configureForResumableExportWithCompletionHandler:](../configureforresumableexportwithcompletionhandler_.md) again.

## See Also

### Failure reasons

- [incompatibleSessionSettings](incompatiblesessionsettings.md): Indicates the export session settings are incompatible with resumable export.
- [incompatibleTemporaryDirectoryContents](incompatibletemporarydirectorycontents.md): Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.
- [unsupportedForPresetOnPlatform](unsupportedforpresetonplatform.md): Indicates that resumption isn’t supported for this preset and platform combination.

# AVAssetExportSessionResumptionFailureReasonTemporaryDirectoryDoesNotExist (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates that the specified temporary files directory doesn’t exist.

## Declaration

```objectivec
extern AVAssetExportSessionResumptionFailureReason const AVAssetExportSessionResumptionFailureReasonTemporaryDirectoryDoesNotExist;
```

<a id="discussion"></a>

## Discussion

Create the temporary files directory and call [configureForResumableExportWithCompletionHandler:](../configureforresumableexportwithcompletionhandler_.md) again.

## See Also

### Failure reasons

- [AVAssetExportSessionResumptionFailureReasonIncompatibleSessionSettings](incompatiblesessionsettings.md): Indicates the export session settings are incompatible with resumable export.
- [AVAssetExportSessionResumptionFailureReasonIncompatibleTemporaryDirectoryContents](incompatibletemporarydirectorycontents.md): Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.
- [AVAssetExportSessionResumptionFailureReasonUnsupportedForPresetOnPlatform](unsupportedforpresetonplatform.md): Indicates that resumption isn’t supported for this preset and platform combination.
