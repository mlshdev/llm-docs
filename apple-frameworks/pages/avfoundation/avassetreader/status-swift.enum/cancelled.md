> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/status-swift.enum/cancelled](https://developer.apple.com/documentation/avfoundation/avassetreader/status-swift.enum/cancelled)

# AVAssetReader.Status.cancelled (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The asset reader can no longer read samples because you canceled reading.

## Declaration

```swift
case cancelled
```

## See Also

### Status values

- [AVAssetReader.Status.unknown](unknown.md): The asset reader is in an unknown state.
- [AVAssetReader.Status.reading](reading.md): The asset reader is successfully reading samples from its asset.
- [AVAssetReader.Status.completed](completed.md): The asset reader completes reading all samples within its specified time range.
- [AVAssetReader.Status.failed](failed.md): The asset reader can no longer read samples from its asset because of an error.

# AVAssetReaderStatusCancelled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The asset reader can no longer read samples because you canceled reading.

## Declaration

```objectivec
AVAssetReaderStatusCancelled
```

## See Also

### Status values

- [AVAssetReaderStatusUnknown](unknown.md): The asset reader is in an unknown state.
- [AVAssetReaderStatusReading](reading.md): The asset reader is successfully reading samples from its asset.
- [AVAssetReaderStatusCompleted](completed.md): The asset reader completes reading all samples within its specified time range.
- [AVAssetReaderStatusFailed](failed.md): The asset reader can no longer read samples from its asset because of an error.
