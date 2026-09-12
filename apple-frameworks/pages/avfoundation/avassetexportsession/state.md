> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/state](https://developer.apple.com/documentation/avfoundation/avassetexportsession/state)

# AVAssetExportSession.State

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Constants that indicate the state of an export operation.

## Declaration

```swift
enum State
```

## Topics

### States

- [AVAssetExportSession.State.pending](state/pending.md): An export operation is currently pending.
- [AVAssetExportSession.State.exporting(progress:)](state/exporting%28progress_%29.md): An export session is currently exporting media.
- [AVAssetExportSession.State.waiting](state/waiting.md): An export session is currently waiting.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring export progress

- [states(updateInterval:)](states%28updateinterval_%29.md): Monitors the progress state of an export operation.
- [AVAssetExportSession.Status](status-swift.enum.md): Values that indicate the state of an export session.
