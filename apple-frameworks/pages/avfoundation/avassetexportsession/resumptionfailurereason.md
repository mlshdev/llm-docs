> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/resumptionfailurereason](https://developer.apple.com/documentation/avfoundation/avassetexportsession/resumptionfailurereason)

# AVAssetExportSession.ResumptionFailureReason (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The reason that configuring the export session for resumption failed.

## Declaration

```swift
struct ResumptionFailureReason
```

## Topics

### Creating a failure reason

- [init(\_:)](resumptionfailurereason/init%28__%29.md)
- [init(rawValue:)](resumptionfailurereason/init%28rawvalue_%29.md)

### Failure reasons

- [incompatibleSessionSettings](resumptionfailurereason/incompatiblesessionsettings.md): Indicates the export session settings are incompatible with resumable export.
- [incompatibleTemporaryDirectoryContents](resumptionfailurereason/incompatibletemporarydirectorycontents.md): Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.
- [temporaryDirectoryDoesNotExist](resumptionfailurereason/temporarydirectorydoesnotexist.md): Indicates that the specified temporary files directory doesn’t exist.
- [unsupportedForPresetOnPlatform](resumptionfailurereason/unsupportedforpresetonplatform.md): Indicates that resumption isn’t supported for this preset and platform combination.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring resumable export

- [configureForResumableExport()](configureforresumableexport%28%29.md): Configures the export session for resumable export.
- [AVAssetExportSession.ResumptionState](resumptionstate.md): Represents the resumption state of the export session.

# AVAssetExportSessionResumptionFailureReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The reason that configuring the export session for resumption failed.

## Declaration

```objectivec
typedef NSString * AVAssetExportSessionResumptionFailureReason;
```

## Topics

### Failure reasons

- [AVAssetExportSessionResumptionFailureReasonIncompatibleSessionSettings](resumptionfailurereason/incompatiblesessionsettings.md): Indicates the export session settings are incompatible with resumable export.
- [AVAssetExportSessionResumptionFailureReasonIncompatibleTemporaryDirectoryContents](resumptionfailurereason/incompatibletemporarydirectorycontents.md): Indicates that the contents of the specified temporary files directory are inconsistent with the current resuming export.
- [AVAssetExportSessionResumptionFailureReasonTemporaryDirectoryDoesNotExist](resumptionfailurereason/temporarydirectorydoesnotexist.md): Indicates that the specified temporary files directory doesn’t exist.
- [AVAssetExportSessionResumptionFailureReasonUnsupportedForPresetOnPlatform](resumptionfailurereason/unsupportedforpresetonplatform.md): Indicates that resumption isn’t supported for this preset and platform combination.

## See Also

### Configuring resumable export

- [configureForResumableExportWithCompletionHandler:](configureforresumableexportwithcompletionhandler_.md): Attempts to configure the export session into resumption mode.
- [AVAssetExportSessionResumptionState](../avassetexportsessionresumptionstate.md): The current resumption state of the export session.
