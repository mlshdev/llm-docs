> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/instance/wakeuptime](https://developer.apple.com/documentation/network/nwprotocolframer/instance/wakeuptime)

# NWProtocolFramer.Instance.WakeupTime

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Times at which to schedule a protocol wakeup.

## Declaration

```swift
enum WakeupTime
```

## Topics

### Time Values

- [NWProtocolFramer.Instance.WakeupTime.milliseconds(\_:)](wakeuptime/milliseconds%28__%29.md): A specific number of milliseconds from now.
- [NWProtocolFramer.Instance.WakeupTime.forever](wakeuptime/forever.md): A sentinel value to indicate that no wakeup should be delivered.

## See Also

### Handling Asynchronous Events

- [async(execute:)](async%28execute_%29.md): Requests that a block be executed on the connection’s internal scheduling context.
- [scheduleWakeup(wakeupTime:)](schedulewakeup%28wakeuptime_%29.md): Requests that [wakeup(framer:)](../../nwprotocolframerimplementation/wakeup%28framer_%29.md) be called on your protocol at a specific time in the future.
