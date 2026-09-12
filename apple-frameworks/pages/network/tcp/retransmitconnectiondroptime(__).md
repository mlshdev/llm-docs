> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/retransmitconnectiondroptime(_:)](https://developer.apple.com/documentation/network/tcp/retransmitconnectiondroptime(_:))

# retransmitConnectionDropTime(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the TCP retransmission attempt timeout.

## Declaration

```swift
func retransmitConnectionDropTime(_ timeout: UInt32) -> TCP
```

## Parameters

- `timeout`: The retransmission attempt timeout, in seconds.

<a id="discussion"></a>

## Discussion

A timeout for TCP retransmission attempts, in seconds (`TCP_RXT_CONNDROPTIME`).
