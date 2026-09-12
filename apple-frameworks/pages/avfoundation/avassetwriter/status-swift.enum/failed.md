> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/status-swift.enum/failed](https://developer.apple.com/documentation/avfoundation/avassetwriter/status-swift.enum/failed)

# AVAssetWriter.Status.failed (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The asset writer fails to write the output file.

## Declaration

```swift
case failed
```

<a id="Discussion"></a>

## Discussion

Query the [error](../error.md) property value to determine the cause of the failure.

## See Also

### Status values

- [AVAssetWriter.Status.unknown](unknown.md): The asset writer’s status isn’t known.
- [AVAssetWriter.Status.writing](writing.md): The asset writer is writing.
- [AVAssetWriter.Status.completed](completed.md): The asset writer finishes writing successfully.
- [AVAssetWriter.Status.cancelled](cancelled.md): The asset writer canceled the writing operation.

# AVAssetWriterStatusFailed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The asset writer fails to write the output file.

## Declaration

```objectivec
AVAssetWriterStatusFailed
```

<a id="Discussion"></a>

## Discussion

Query the [error](../error.md) property value to determine the cause of the failure.

## See Also

### Status values

- [AVAssetWriterStatusUnknown](unknown.md): The asset writer’s status isn’t known.
- [AVAssetWriterStatusWriting](writing.md): The asset writer is writing.
- [AVAssetWriterStatusCompleted](completed.md): The asset writer finishes writing successfully.
- [AVAssetWriterStatusCancelled](cancelled.md): The asset writer canceled the writing operation.
