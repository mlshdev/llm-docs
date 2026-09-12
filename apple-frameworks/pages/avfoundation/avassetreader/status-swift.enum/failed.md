> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/status-swift.enum/failed](https://developer.apple.com/documentation/avfoundation/avassetreader/status-swift.enum/failed)

# AVAssetReader.Status.failed (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The asset reader can no longer read samples from its asset because of an error.

## Declaration

```swift
case failed
```

<a id="Discussion"></a>

## Discussion

Query the asset reader’s [error](../error.md) property to determine the reason for the failure.

## See Also

### Status values

- [AVAssetReader.Status.unknown](unknown.md): The asset reader is in an unknown state.
- [AVAssetReader.Status.reading](reading.md): The asset reader is successfully reading samples from its asset.
- [AVAssetReader.Status.completed](completed.md): The asset reader completes reading all samples within its specified time range.
- [AVAssetReader.Status.cancelled](cancelled.md): The asset reader can no longer read samples because you canceled reading.

# AVAssetReaderStatusFailed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The asset reader can no longer read samples from its asset because of an error.

## Declaration

```objectivec
AVAssetReaderStatusFailed
```

<a id="Discussion"></a>

## Discussion

Query the asset reader’s [error](../error.md) property to determine the reason for the failure.

## See Also

### Status values

- [AVAssetReaderStatusUnknown](unknown.md): The asset reader is in an unknown state.
- [AVAssetReaderStatusReading](reading.md): The asset reader is successfully reading samples from its asset.
- [AVAssetReaderStatusCompleted](completed.md): The asset reader completes reading all samples within its specified time range.
- [AVAssetReaderStatusCancelled](cancelled.md): The asset reader can no longer read samples because you canceled reading.
