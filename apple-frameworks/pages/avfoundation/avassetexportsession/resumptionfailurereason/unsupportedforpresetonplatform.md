> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/resumptionfailurereason/unsupportedforpresetonplatform](https://developer.apple.com/documentation/avfoundation/avassetexportsession/resumptionfailurereason/unsupportedforpresetonplatform)

# unsupportedForPresetOnPlatform (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates that resumption isn’t supported for this preset and platform combination.

## Declaration

```swift
static let unsupportedForPresetOnPlatform: AVAssetExportSession.ResumptionFailureReason
```

<a id="discussion"></a>

## Discussion

You can continue the export, but it runs as a non-resumable (default) export.

## See Also

### Failure reasons

- [incompatibleSessionSettings](incompatiblesessionsettings.md): Indicates the export session settings are incompatible with resumable export.
- [incompatibleTemporaryDirectoryContents](incompatibletemporarydirectorycontents.md): Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.
- [temporaryDirectoryDoesNotExist](temporarydirectorydoesnotexist.md): Indicates that the specified temporary files directory doesn’t exist.

# AVAssetExportSessionResumptionFailureReasonUnsupportedForPresetOnPlatform (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates that resumption isn’t supported for this preset and platform combination.

## Declaration

```objectivec
extern AVAssetExportSessionResumptionFailureReason const AVAssetExportSessionResumptionFailureReasonUnsupportedForPresetOnPlatform;
```

<a id="discussion"></a>

## Discussion

You can continue the export, but it runs as a non-resumable (default) export.

## See Also

### Failure reasons

- [AVAssetExportSessionResumptionFailureReasonIncompatibleSessionSettings](incompatiblesessionsettings.md): Indicates the export session settings are incompatible with resumable export.
- [AVAssetExportSessionResumptionFailureReasonIncompatibleTemporaryDirectoryContents](incompatibletemporarydirectorycontents.md): Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.
- [AVAssetExportSessionResumptionFailureReasonTemporaryDirectoryDoesNotExist](temporarydirectorydoesnotexist.md): Indicates that the specified temporary files directory doesn’t exist.
