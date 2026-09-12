> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_wakeup_time_forever](https://developer.apple.com/documentation/network/nw_framer_wakeup_time_forever)

# NW_FRAMER_WAKEUP_TIME_FOREVER (Swift)

**Framework:** Network  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A sentinel value that indicates that no wakeup should be delivered.

## Declaration

```swift
var NW_FRAMER_WAKEUP_TIME_FOREVER: UInt64 { get }
```

## See Also

### Handling Asynchronous Events

- [nw_framer_schedule_wakeup(\_:\_:)](nw_framer_schedule_wakeup%28____%29.md): Requests that the [nw_framer_wakeup_handler_t](nw_framer_wakeup_handler_t.md) be called on your protocol at a specific time in the future.
- [nw_framer_set_wakeup_handler(\_:\_:)](nw_framer_set_wakeup_handler%28____%29.md): Sets a handler to receive scheduled wakeup events.
- [nw_framer_wakeup_handler_t](nw_framer_wakeup_handler_t.md): A handler that delivers a scheduled wakeup event.
- [nw_framer_async(\_:\_:)](nw_framer_async%28____%29.md): Requests that a block be executed on the connection’s internal scheduling context.
- [nw_framer_block_t](nw_framer_block_t.md): A block to be invoked asynchronously on your framer protocol’s scheduling context.

# NW_FRAMER_WAKEUP_TIME_FOREVER (Objective-C)

**Framework:** Network  
**Kind:** Macro  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A sentinel value that indicates that no wakeup should be delivered.

## Declaration

```objectivec
#define NW_FRAMER_WAKEUP_TIME_FOREVER
```

## See Also

### Handling Asynchronous Events

- [nw_framer_schedule_wakeup](nw_framer_schedule_wakeup%28____%29.md): Requests that the [nw_framer_wakeup_handler_t](nw_framer_wakeup_handler_t.md) be called on your protocol at a specific time in the future.
- [nw_framer_set_wakeup_handler](nw_framer_set_wakeup_handler%28____%29.md): Sets a handler to receive scheduled wakeup events.
- [nw_framer_wakeup_handler_t](nw_framer_wakeup_handler_t.md): A handler that delivers a scheduled wakeup event.
- [nw_framer_async](nw_framer_async%28____%29.md): Requests that a block be executed on the connection’s internal scheduling context.
- [nw_framer_block_t](nw_framer_block_t.md): A block to be invoked asynchronously on your framer protocol’s scheduling context.
