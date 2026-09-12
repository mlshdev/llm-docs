> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/status-swift.enum](https://developer.apple.com/documentation/avfoundation/avassetexportsession/status-swift.enum)

# AVAssetExportSession.Status (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Values that indicate the state of an export session.

## Declaration

```swift
enum Status
```

## Topics

### Status values

- [AVAssetExportSession.Status.unknown](status-swift.enum/unknown.md): The session status is unknown.
- [AVAssetExportSession.Status.waiting](status-swift.enum/waiting.md): The session is waiting to export more data.
- [AVAssetExportSession.Status.exporting](status-swift.enum/exporting.md): The export is in progress.
- [AVAssetExportSession.Status.completed](status-swift.enum/completed.md): The export completes successfully.
- [AVAssetExportSession.Status.failed](status-swift.enum/failed.md): The export fails.
- [AVAssetExportSession.Status.cancelled](status-swift.enum/cancelled.md): You canceled the export.

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

### Monitoring export progress

- [states(updateInterval:)](states%28updateinterval_%29.md): Monitors the progress state of an export operation.
- [AVAssetExportSession.State](state.md): Constants that indicate the state of an export operation.

# AVAssetExportSessionStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that indicate the state of an export session.

## Declaration

```objectivec
enum AVAssetExportSessionStatus : NSInteger;
```

## Topics

### Status values

- [AVAssetExportSessionStatusUnknown](status-swift.enum/unknown.md): The session status is unknown.
- [AVAssetExportSessionStatusWaiting](status-swift.enum/waiting.md): The session is waiting to export more data.
- [AVAssetExportSessionStatusExporting](status-swift.enum/exporting.md): The export is in progress.
- [AVAssetExportSessionStatusCompleted](status-swift.enum/completed.md): The export completes successfully.
- [AVAssetExportSessionStatusFailed](status-swift.enum/failed.md): The export fails.
- [AVAssetExportSessionStatusCancelled](status-swift.enum/cancelled.md): You canceled the export.
