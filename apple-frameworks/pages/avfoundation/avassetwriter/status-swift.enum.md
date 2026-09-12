> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/status-swift.enum](https://developer.apple.com/documentation/avfoundation/avassetwriter/status-swift.enum)

# AVAssetWriter.Status (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Values that indicate the state of an asset writer.

## Declaration

```swift
enum Status
```

## Topics

### Status values

- [AVAssetWriter.Status.unknown](status-swift.enum/unknown.md): The asset writer’s status isn’t known.
- [AVAssetWriter.Status.writing](status-swift.enum/writing.md): The asset writer is writing.
- [AVAssetWriter.Status.completed](status-swift.enum/completed.md): The asset writer finishes writing successfully.
- [AVAssetWriter.Status.failed](status-swift.enum/failed.md): The asset writer fails to write the output file.
- [AVAssetWriter.Status.cancelled](status-swift.enum/cancelled.md): The asset writer canceled the writing operation.

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

### Inspecting writing status

- [status](status-swift.property.md): The status of writing samples to the output file.
- [error](error.md): An error object that describes an asset-writing failure.

# AVAssetWriterStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that indicate the state of an asset writer.

## Declaration

```objectivec
enum AVAssetWriterStatus : NSInteger;
```

## Topics

### Status values

- [AVAssetWriterStatusUnknown](status-swift.enum/unknown.md): The asset writer’s status isn’t known.
- [AVAssetWriterStatusWriting](status-swift.enum/writing.md): The asset writer is writing.
- [AVAssetWriterStatusCompleted](status-swift.enum/completed.md): The asset writer finishes writing successfully.
- [AVAssetWriterStatusFailed](status-swift.enum/failed.md): The asset writer fails to write the output file.
- [AVAssetWriterStatusCancelled](status-swift.enum/cancelled.md): The asset writer canceled the writing operation.

## See Also

### Inspecting writing status

- [status](status-swift.property.md): The status of writing samples to the output file.
- [error](error.md): An error object that describes an asset-writing failure.
