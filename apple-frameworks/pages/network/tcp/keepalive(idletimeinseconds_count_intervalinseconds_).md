> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/keepalive(idletimeinseconds:count:intervalinseconds:)](https://developer.apple.com/documentation/network/tcp/keepalive(idletimeinseconds:count:intervalinseconds:))

# keepalive(idleTimeInSeconds:count:intervalInSeconds:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Enable TCP keepalives.

## Declaration

```swift
func keepalive(idleTimeInSeconds: UInt32, count: UInt32, intervalInSeconds: UInt32) -> TCP
```

## Parameters

- `idleTimeInSeconds`: The number of seconds of idleness to wait before keepalive probes are sent by TCP (`TCP_KEEPALIVE`).
- `count`: The number of keepalive probes to send before terminating.
- `intervalInSeconds`: The number of seconds of to wait before resending TCP keepalive probes (`TCP_KEEPINTVL`).
