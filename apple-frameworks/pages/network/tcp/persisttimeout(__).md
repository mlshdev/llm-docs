> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/persisttimeout(_:)](https://developer.apple.com/documentation/network/tcp/persisttimeout(_:))

# persistTimeout(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the TCP persist timeout.

## Declaration

```swift
func persistTimeout(_ timeout: UInt32) -> TCP
```

## Parameters

- `timeout`: The persist timeout, in seconds.

<a id="discussion"></a>

## Discussion

The TCP persist timeout, in seconds (`PERSIST_TIMEOUT`). See RFC 6429.
