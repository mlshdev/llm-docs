> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2deadpeerdetectionrate/high](https://developer.apple.com/documentation/networkextension/nevpnikev2deadpeerdetectionrate/high)

# NEVPNIKEv2DeadPeerDetectionRate.high (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Run dead peer detection once every 1 minute. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.

## Declaration

```swift
case high
```

## See Also

### Detection rates

- [NEVPNIKEv2DeadPeerDetectionRate.none](none.md): Do not perform dead peer detection.
- [NEVPNIKEv2DeadPeerDetectionRate.low](low.md): Run dead peer detection once every 30 minutes. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.
- [NEVPNIKEv2DeadPeerDetectionRate.medium](medium.md): Run dead peer detection once every 10 minutes. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.

# NEVPNIKEv2DeadPeerDetectionRateHigh (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Run dead peer detection once every 1 minute. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.

## Declaration

```objectivec
NEVPNIKEv2DeadPeerDetectionRateHigh
```

## See Also

### Detection rates

- [NEVPNIKEv2DeadPeerDetectionRateNone](none.md): Do not perform dead peer detection.
- [NEVPNIKEv2DeadPeerDetectionRateLow](low.md): Run dead peer detection once every 30 minutes. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.
- [NEVPNIKEv2DeadPeerDetectionRateMedium](medium.md): Run dead peer detection once every 10 minutes. If the peer does not respond, retry 5 times at 1 second intervals before declaring the peer dead and terminating the session.
