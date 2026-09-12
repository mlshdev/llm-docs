> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic/initialmaxbidirectionalstreams(_:)](https://developer.apple.com/documentation/network/quic/initialmaxbidirectionalstreams(_:))

# initialMaxBidirectionalStreams(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the initial_max_streams_bidi transport parameter on a QUIC connection.

## Declaration

```swift
func initialMaxBidirectionalStreams(_ initialMaxStreamsBidi: Int) -> QUIC
```

## Parameters

- `initialMaxStreamsBidi`: The value to use for the `initial_max_streams_bidi` transport parameter on a QUIC connection.
