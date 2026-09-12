> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic/initialmaxstreamdatabidirectionallocal(_:)](https://developer.apple.com/documentation/network/quic/initialmaxstreamdatabidirectionallocal(_:))

# initialMaxStreamDataBidirectionalLocal(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the initial_max_stream_data_bidi_local transport parameter on a QUIC connection.

## Declaration

```swift
func initialMaxStreamDataBidirectionalLocal(_ initialMaxStreamDataBidiLocal: Int) -> QUIC
```

## Parameters

- `initialMaxStreamDataBidiLocal`: The value to use for the `initial_max_stream_data_bidi_local` transport parameter on a QUIC connection.
