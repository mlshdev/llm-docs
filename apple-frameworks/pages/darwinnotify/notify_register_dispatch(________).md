> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/darwinnotify/notify_register_dispatch(_:_:_:_:)](https://developer.apple.com/documentation/darwinnotify/notify_register_dispatch(_:_:_:_:))

# notify_register_dispatch(\_:\_:\_:\_:) (Swift)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Request notification delivery to a dispatch queue.

## Declaration

```swift
func notify_register_dispatch(_ name: UnsafePointer<CChar>!, _ out_token: UnsafeMutablePointer<Int32>!, _ queue: dispatch_queue_t!, _ handler: notify_handler_t!) -> UInt32
```

## Parameters

- `name`: (Input) The notification name.
- `out_token`: (Output) The registration token.
- `queue`: (Input) The dispatch queue to which the Block is submitted. The dispatch queue is retained by the notify subsystem while the notification is registered, and will be released when notification is canceled.
- `handler`: (Input) The Block to invoke on the dispatch queue in response to a notification. The notification token is passed to the Block as an argument so that the callee can modify the state of the notification or cancel the registration.

<a id="return-value"></a>

## Return Value

Returns status.

<a id="Discussion"></a>

## Discussion

When notifications are received by the process, the notify subsystem will deliver the registered Block to the target dispatch queue. Notification blocks are not re-entrant, and subsequent notification Blocks will not be delivered for the same registration until the previous Block has returned.

## See Also

### Miscellaneous

- [notify_cancel(\_:)](notify_cancel%28__%29.md)
- [notify_check(\_:\_:)](notify_check%28____%29.md)
- [notify_get_state(\_:\_:)](notify_get_state%28____%29.md)
- [notify_post(\_:)](notify_post%28__%29.md)
- [notify_register_check(\_:\_:)](notify_register_check%28____%29.md)
- [notify_register_mach_port(\_:\_:\_:\_:)](notify_register_mach_port%28________%29.md)
- [notify_register_signal(\_:\_:\_:)](notify_register_signal%28______%29.md)
- [notify_resume(\_:)](notify_resume%28__%29.md)
- [notify_set_state(\_:\_:)](notify_set_state%28____%29.md)
- [notify_suspend(\_:)](notify_suspend%28__%29.md)

# notify_register_dispatch (Objective-C)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Request notification delivery to a dispatch queue.

## Declaration

```objectivec
extern uint32_t notify_register_dispatch(const char *name, int *out_token, dispatch_queue_t queue, notify_handler_t handler);
```

## Parameters

- `name`: (Input) The notification name.
- `out_token`: (Output) The registration token.
- `queue`: (Input) The dispatch queue to which the Block is submitted. The dispatch queue is retained by the notify subsystem while the notification is registered, and will be released when notification is canceled.
- `handler`: (Input) The Block to invoke on the dispatch queue in response to a notification. The notification token is passed to the Block as an argument so that the callee can modify the state of the notification or cancel the registration.

<a id="return-value"></a>

## Return Value

Returns status.

<a id="Discussion"></a>

## Discussion

When notifications are received by the process, the notify subsystem will deliver the registered Block to the target dispatch queue. Notification blocks are not re-entrant, and subsequent notification Blocks will not be delivered for the same registration until the previous Block has returned.

## See Also

### Miscellaneous

- [notify_cancel](notify_cancel%28__%29.md)
- [notify_check](notify_check%28____%29.md)
- [notify_get_state](notify_get_state%28____%29.md)
- [notify_post](notify_post%28__%29.md)
- [notify_register_check](notify_register_check%28____%29.md)
- [notify_register_mach_port](notify_register_mach_port%28________%29.md)
- [notify_register_signal](notify_register_signal%28______%29.md)
- [notify_resume](notify_resume%28__%29.md)
- [notify_set_state](notify_set_state%28____%29.md)
- [notify_suspend](notify_suspend%28__%29.md)
