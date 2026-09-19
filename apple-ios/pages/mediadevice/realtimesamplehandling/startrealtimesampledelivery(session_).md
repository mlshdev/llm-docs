> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/realtimesamplehandling/startrealtimesampledelivery(session:)

# startRealtimeSampleDelivery(session:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the extension can receive realtime samples.

## Declaration

```swift
@MainActor func startRealtimeSampleDelivery(session: MediaOutputSession)
```

## Parameters

- `session`: The session associated with the sample delivery.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)
