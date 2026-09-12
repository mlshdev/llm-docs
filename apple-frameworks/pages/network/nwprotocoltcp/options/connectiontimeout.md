> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocoltcp/options/connectiontimeout](https://developer.apple.com/documentation/network/nwprotocoltcp/options/connectiontimeout)

# connectionTimeout

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The number of seconds that TCP waits before timing out its handshake.

## Declaration

```swift
var connectionTimeout: Int { get set }
```

## See Also

### Setting Timeouts

- [connectionDropTime](connectiondroptime.md): The timeout, in seconds, for TCP retransmission attempts.
- [persistTimeout](persisttimeout.md): The TCP persist timeout, in seconds, as defined by RFC 6429.
