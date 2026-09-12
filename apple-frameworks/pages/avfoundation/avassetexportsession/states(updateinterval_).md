> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/states(updateinterval:)](https://developer.apple.com/documentation/avfoundation/avassetexportsession/states(updateinterval:))

# states(updateInterval:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Monitors the progress state of an export operation.

## Declaration

```swift
func states(updateInterval: TimeInterval = .infinity) -> some Sendable & AsyncSequence<AVAssetExportSession.State, Never>

```

## Parameters

- `updateInterval`: The time interval between updates. The value must be greater than `0`.

<a id="return-value"></a>

## Return Value

An asynchronous sequence of states.

## See Also

### Monitoring export progress

- [AVAssetExportSession.State](state.md): Constants that indicate the state of an export operation.
- [AVAssetExportSession.Status](status-swift.enum.md): Values that indicate the state of an export session.
