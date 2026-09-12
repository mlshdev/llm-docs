> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/connectiontimeout(_:)](https://developer.apple.com/documentation/network/tcp/connectiontimeout(_:))

# connectionTimeout(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the timeout for TCP connection establishment.

## Declaration

```swift
func connectionTimeout(_ timeout: UInt32) -> TCP
```

## Parameters

- `timeout`: The connection establishment timeout, in seconds.

<a id="discussion"></a>

## Discussion

A timeout for TCP connection establishment, in seconds. (`TCP_CONNECTIONTIMEOUT`).
