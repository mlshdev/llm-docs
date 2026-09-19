> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/quic/initialmaxstreamdatabidirectionalremote(_:)

# initialMaxStreamDataBidirectionalRemote(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the initial_max_stream_data_bidi_remote transport parameter on a QUIC connection.

## Declaration

```swift
func initialMaxStreamDataBidirectionalRemote(_ initialMaxStreamDataBidiRemote: Int) -> QUIC
```

## Parameters

- `initialMaxStreamDataBidiRemote`: The value to use for the `initial_max_stream_data_bidi_remote` transport parameter on a QUIC connection.
