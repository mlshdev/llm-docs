> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocoltcp/options/persisttimeout](https://developer.apple.com/documentation/network/nwprotocoltcp/options/persisttimeout)

# persistTimeout

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The TCP persist timeout, in seconds, as defined by RFC 6429.

## Declaration

```swift
var persistTimeout: Int { get set }
```

## See Also

### Setting Timeouts

- [connectionTimeout](connectiontimeout.md): The number of seconds that TCP waits before timing out its handshake.
- [connectionDropTime](connectiondroptime.md): The timeout, in seconds, for TCP retransmission attempts.
