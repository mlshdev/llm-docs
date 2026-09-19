> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/quic/maxdatagramframesize(_:)

# maxDatagramFrameSize(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the max_datagram_frame_size transport parameter on a QUIC connection.

## Declaration

```swift
func maxDatagramFrameSize(_ size: Int) -> QUIC
```

## Parameters

- `size`: The value to use for the `max_datagram_frame_size` transport parameter on a QUIC connection.
