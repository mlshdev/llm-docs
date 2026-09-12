> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic/initialmaxstreamdatabidirectionalremote(_:)](https://developer.apple.com/documentation/network/quic/initialmaxstreamdatabidirectionalremote(_:))

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
