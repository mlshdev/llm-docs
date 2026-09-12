> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/status-swift.enum](https://developer.apple.com/documentation/avfoundation/avassetreader/status-swift.enum)

# AVAssetReader.Status (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Values that represent the possible states of an asset reader.

## Declaration

```swift
enum Status
```

<a id="overview"></a>

## Overview

You determine an asset reader’s status using its [status](status-swift.property.md) property.

## Topics

### Status values

- [AVAssetReader.Status.unknown](status-swift.enum/unknown.md): The asset reader is in an unknown state.
- [AVAssetReader.Status.reading](status-swift.enum/reading.md): The asset reader is successfully reading samples from its asset.
- [AVAssetReader.Status.completed](status-swift.enum/completed.md): The asset reader completes reading all samples within its specified time range.
- [AVAssetReader.Status.failed](status-swift.enum/failed.md): The asset reader can no longer read samples from its asset because of an error.
- [AVAssetReader.Status.cancelled](status-swift.enum/cancelled.md): The asset reader can no longer read samples because you canceled reading.

### Initializers

- [init(rawValue:)](status-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring reading

- [timeRange](timerange.md): The time range within the asset to read.
- [status](status-swift.property.md): The status of reading sample buffers from the asset.
- [error](error.md): An error that describes the reason for a failure.

# AVAssetReaderStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that represent the possible states of an asset reader.

## Declaration

```objectivec
enum AVAssetReaderStatus : NSInteger;
```

<a id="overview"></a>

## Overview

You determine an asset reader’s status using its [status](status-swift.property.md) property.

## Topics

### Status values

- [AVAssetReaderStatusUnknown](status-swift.enum/unknown.md): The asset reader is in an unknown state.
- [AVAssetReaderStatusReading](status-swift.enum/reading.md): The asset reader is successfully reading samples from its asset.
- [AVAssetReaderStatusCompleted](status-swift.enum/completed.md): The asset reader completes reading all samples within its specified time range.
- [AVAssetReaderStatusFailed](status-swift.enum/failed.md): The asset reader can no longer read samples from its asset because of an error.
- [AVAssetReaderStatusCancelled](status-swift.enum/cancelled.md): The asset reader can no longer read samples because you canceled reading.

## See Also

### Configuring reading

- [timeRange](timerange.md): The time range within the asset to read.
- [status](status-swift.property.md): The status of reading sample buffers from the asset.
- [error](error.md): An error that describes the reason for a failure.
