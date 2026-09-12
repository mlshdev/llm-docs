> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocoltcp/options/keepaliveinterval](https://developer.apple.com/documentation/network/nwprotocoltcp/options/keepaliveinterval)

# keepaliveInterval

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The number of seconds that TCP waits between sending keepalive probes.

## Declaration

```swift
var keepaliveInterval: Int { get set }
```

## See Also

### Configuring Keepalives

- [enableKeepalive](enablekeepalive.md): A Boolean that enables TCP keepalives.
- [keepaliveIdle](keepaliveidle.md): The number of seconds of idleness that TCP waits before sending keepalive probes.
- [keepaliveCount](keepalivecount.md): The number of keepalive probes that TCP sends before terminating the connection.
