> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/quic/maxudppayloadsize(_:)

# maxUDPPayloadSize(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the maximum length of a QUIC packet that you are willing to receive on a connection, in bytes.

## Declaration

```swift
func maxUDPPayloadSize(_ size: Int) -> QUIC
```

## Parameters

- `size`: The maximum length, in bytes.
