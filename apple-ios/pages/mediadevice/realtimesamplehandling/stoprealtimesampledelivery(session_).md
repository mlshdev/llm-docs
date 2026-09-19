> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/realtimesamplehandling/stoprealtimesampledelivery(session:)

# stopRealtimeSampleDelivery(session:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the extension should stop realtime sample delivery.

## Declaration

```swift
@MainActor func stopRealtimeSampleDelivery(session: MediaOutputSession)
```

## Parameters

- `session`: The session to stop delivering samples for.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)
