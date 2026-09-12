> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/resumptionfailurereason/incompatiblesessionsettings](https://developer.apple.com/documentation/avfoundation/avassetexportsession/resumptionfailurereason/incompatiblesessionsettings)

# incompatibleSessionSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates the export session settings are incompatible with resumable export.

## Declaration

```swift
static let incompatibleSessionSettings: AVAssetExportSession.ResumptionFailureReason
```

## See Also

### Failure reasons

- [incompatibleTemporaryDirectoryContents](incompatibletemporarydirectorycontents.md): Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.
- [temporaryDirectoryDoesNotExist](temporarydirectorydoesnotexist.md): Indicates that the specified temporary files directory doesn’t exist.
- [unsupportedForPresetOnPlatform](unsupportedforpresetonplatform.md): Indicates that resumption isn’t supported for this preset and platform combination.

# AVAssetExportSessionResumptionFailureReasonIncompatibleSessionSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates the export session settings are incompatible with resumable export.

## Declaration

```objectivec
extern AVAssetExportSessionResumptionFailureReason const AVAssetExportSessionResumptionFailureReasonIncompatibleSessionSettings;
```

## See Also

### Failure reasons

- [AVAssetExportSessionResumptionFailureReasonIncompatibleTemporaryDirectoryContents](incompatibletemporarydirectorycontents.md): Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.
- [AVAssetExportSessionResumptionFailureReasonTemporaryDirectoryDoesNotExist](temporarydirectorydoesnotexist.md): Indicates that the specified temporary files directory doesn’t exist.
- [AVAssetExportSessionResumptionFailureReasonUnsupportedForPresetOnPlatform](unsupportedforpresetonplatform.md): Indicates that resumption isn’t supported for this preset and platform combination.
