> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/instance/async(execute:)](https://developer.apple.com/documentation/network/nwprotocolframer/instance/async(execute:))

# async(execute:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests that a block be executed on the connection’s internal scheduling context.

## Declaration

```swift
final func async(execute: @escaping () -> Void)
```

<a id="Discussion"></a>

## Discussion

You should call this if you need to call any framer functions but are in another scheduling context.

## See Also

### Handling Asynchronous Events

- [scheduleWakeup(wakeupTime:)](schedulewakeup%28wakeuptime_%29.md): Requests that [wakeup(framer:)](../../nwprotocolframerimplementation/wakeup%28framer_%29.md) be called on your protocol at a specific time in the future.
- [NWProtocolFramer.Instance.WakeupTime](wakeuptime.md): Times at which to schedule a protocol wakeup.
