> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/removereceiver(_:at:)-3yxub

# removeReceiver(\_:at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes a receiver and its renderer from the synchronizer.

## Declaration

```swift
func removeReceiver(_ receiver: sending AVSampleBufferVideoRenderer.Receiver, at time: CMTime) async -> Bool
```

## Parameters

- `receiver`: The receiver to be removed.
- `time`: The time on the timebase’s timeline at which the renderer should be removed. If the time is in the past, the renderer is immediately removed.
