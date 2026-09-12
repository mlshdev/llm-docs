> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/darwinnotify/notify_register_mach_port(_:_:_:_:)](https://developer.apple.com/documentation/darwinnotify/notify_register_mach_port(_:_:_:_:))

# notify_register_mach_port(\_:\_:\_:\_:) (Swift)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func notify_register_mach_port(_ name: UnsafePointer<CChar>!, _ notify_port: UnsafeMutablePointer<mach_port_t>!, _ flags: Int32, _ out_token: UnsafeMutablePointer<Int32>!) -> UInt32
```

## Parameters

- `name`: (Input) notification name
- `notify_port`: (Input/Output) pointer to a mach port
- `out_token`: (Output) notification token

<a id="return-value"></a>

## Return Value

Returns status.

<a id="Discussion"></a>

## Discussion

Request notification by mach message.

Notifications are delivered by an empty message sent to a mach port. By default, a new port is allocated and a pointer to it is returned as the value of “notify_port”. A mach port previously returned by a call to this routine may be used for notifications if a pointer to that port is passed in to the routine and NOTIFY_REUSE is set in the flags parameter. The notification service must be able to extract send rights to the port.

Note that the kernel limits the size of the message queue for any port. If it is important that notifications should not be lost due to queue overflow, clients should service messages quickly, and be careful about using the same port for notifications for more than one name.

A notification message has an empty message body. The msgh_id field in the mach message header will have the value of the notification token. If a port is reused for multiple notification registrations, the msgh_id value may be used to determine which name generated the notification.

## See Also

### Miscellaneous

- [notify_cancel(\_:)](notify_cancel%28__%29.md)
- [notify_check(\_:\_:)](notify_check%28____%29.md)
- [notify_get_state(\_:\_:)](notify_get_state%28____%29.md)
- [notify_post(\_:)](notify_post%28__%29.md)
- [notify_register_check(\_:\_:)](notify_register_check%28____%29.md)
- [notify_register_dispatch(\_:\_:\_:\_:)](notify_register_dispatch%28________%29.md): Request notification delivery to a dispatch queue.
- [notify_register_signal(\_:\_:\_:)](notify_register_signal%28______%29.md)
- [notify_resume(\_:)](notify_resume%28__%29.md)
- [notify_set_state(\_:\_:)](notify_set_state%28____%29.md)
- [notify_suspend(\_:)](notify_suspend%28__%29.md)

# notify_register_mach_port (Objective-C)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
extern uint32_t notify_register_mach_port(const char *name, mach_port_t *notify_port, int flags, int *out_token);
```

## Parameters

- `name`: (Input) notification name
- `notify_port`: (Input/Output) pointer to a mach port
- `out_token`: (Output) notification token

<a id="return-value"></a>

## Return Value

Returns status.

<a id="Discussion"></a>

## Discussion

Request notification by mach message.

Notifications are delivered by an empty message sent to a mach port. By default, a new port is allocated and a pointer to it is returned as the value of “notify_port”. A mach port previously returned by a call to this routine may be used for notifications if a pointer to that port is passed in to the routine and NOTIFY_REUSE is set in the flags parameter. The notification service must be able to extract send rights to the port.

Note that the kernel limits the size of the message queue for any port. If it is important that notifications should not be lost due to queue overflow, clients should service messages quickly, and be careful about using the same port for notifications for more than one name.

A notification message has an empty message body. The msgh_id field in the mach message header will have the value of the notification token. If a port is reused for multiple notification registrations, the msgh_id value may be used to determine which name generated the notification.

## See Also

### Miscellaneous

- [notify_cancel](notify_cancel%28__%29.md)
- [notify_check](notify_check%28____%29.md)
- [notify_get_state](notify_get_state%28____%29.md)
- [notify_post](notify_post%28__%29.md)
- [notify_register_check](notify_register_check%28____%29.md)
- [notify_register_dispatch](notify_register_dispatch%28________%29.md): Request notification delivery to a dispatch queue.
- [notify_register_signal](notify_register_signal%28______%29.md)
- [notify_resume](notify_resume%28__%29.md)
- [notify_set_state](notify_set_state%28____%29.md)
- [notify_suspend](notify_suspend%28__%29.md)
