> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/retransmitfindrop(_:)](https://developer.apple.com/documentation/network/tcp/retransmitfindrop(_:))

# retransmitFinDrop(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configure TCP to drop the connection after a FIN does not receive an ACK.

## Declaration

```swift
func retransmitFinDrop(_ drop: Bool) -> TCP
```

## Parameters

- `drop`: True to drop, false otherwise.

<a id="discussion"></a>

## Discussion

A boolean to cause TCP to drop its connection after not receiving an ACK after a FIN (`TCP_RXT_FINDROP`).
