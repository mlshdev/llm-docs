> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/resumptionfailurereason/incompatibletemporarydirectorycontents](https://developer.apple.com/documentation/avfoundation/avassetexportsession/resumptionfailurereason/incompatibletemporarydirectorycontents)

# incompatibleTemporaryDirectoryContents (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.

## Declaration

```swift
static let incompatibleTemporaryDirectoryContents: AVAssetExportSession.ResumptionFailureReason
```

<a id="discussion"></a>

## Discussion

You’re likely aliasing two distinct exports together. Use a unique temporary files directory for each export, or clear the directory before resuming.

## See Also

### Failure reasons

- [incompatibleSessionSettings](incompatiblesessionsettings.md): Indicates the export session settings are incompatible with resumable export.
- [temporaryDirectoryDoesNotExist](temporarydirectorydoesnotexist.md): Indicates that the specified temporary files directory doesn’t exist.
- [unsupportedForPresetOnPlatform](unsupportedforpresetonplatform.md): Indicates that resumption isn’t supported for this preset and platform combination.

# AVAssetExportSessionResumptionFailureReasonIncompatibleTemporaryDirectoryContents (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.

## Declaration

```objectivec
extern AVAssetExportSessionResumptionFailureReason const AVAssetExportSessionResumptionFailureReasonIncompatibleTemporaryDirectoryContents;
```

<a id="discussion"></a>

## Discussion

You’re likely aliasing two distinct exports together. Use a unique temporary files directory for each export, or clear the directory before resuming.

## See Also

### Failure reasons

- [AVAssetExportSessionResumptionFailureReasonIncompatibleSessionSettings](incompatiblesessionsettings.md): Indicates the export session settings are incompatible with resumable export.
- [AVAssetExportSessionResumptionFailureReasonTemporaryDirectoryDoesNotExist](temporarydirectorydoesnotexist.md): Indicates that the specified temporary files directory doesn’t exist.
- [AVAssetExportSessionResumptionFailureReasonUnsupportedForPresetOnPlatform](unsupportedforpresetonplatform.md): Indicates that resumption isn’t supported for this preset and platform combination.
