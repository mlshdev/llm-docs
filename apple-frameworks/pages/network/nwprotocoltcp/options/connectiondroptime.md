> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocoltcp/options/connectiondroptime](https://developer.apple.com/documentation/network/nwprotocoltcp/options/connectiondroptime)

# connectionDropTime

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The timeout, in seconds, for TCP retransmission attempts.

## Declaration

```swift
var connectionDropTime: Int { get set }
```

## See Also

### Setting Timeouts

- [connectionTimeout](connectiontimeout.md): The number of seconds that TCP waits before timing out its handshake.
- [persistTimeout](persisttimeout.md): The TCP persist timeout, in seconds, as defined by RFC 6429.
