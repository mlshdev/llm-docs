> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/instance/schedulewakeup(wakeuptime:)](https://developer.apple.com/documentation/network/nwprotocolframer/instance/schedulewakeup(wakeuptime:))

# scheduleWakeup(wakeupTime:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests that [wakeup(framer:)](../../nwprotocolframerimplementation/wakeup%28framer_%29.md) be called on your protocol at a specific time in the future.

## Declaration

```swift
final func scheduleWakeup(wakeupTime: NWProtocolFramer.Instance.WakeupTime)
```

## See Also

### Handling Asynchronous Events

- [async(execute:)](async%28execute_%29.md): Requests that a block be executed on the connection’s internal scheduling context.
- [NWProtocolFramer.Instance.WakeupTime](wakeuptime.md): Times at which to schedule a protocol wakeup.
