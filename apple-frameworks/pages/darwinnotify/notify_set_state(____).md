> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/darwinnotify/notify_set_state(_:_:)](https://developer.apple.com/documentation/darwinnotify/notify_set_state(_:_:))

# notify_set_state(\_:\_:) (Swift)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
func notify_set_state(_ token: Int32, _ state64: UInt64) -> UInt32
```

## Parameters

- `token`: (Input) notification token
- `state64`: (Input) 64-bit unsigned integer value

<a id="return-value"></a>

## Return Value

Returns status.

<a id="Discussion"></a>

## Discussion

Set or get a state value associated with a notification token. Each key in the notification namespace has an associated integer value available for use by clients as for application-specific purposes. A common usage is to allow two processes or threads to synchronize their activities. For example, a server process may need send a notification when a resource becomes available. A client process can register for the notification, but when it starts up it will not know whether the resource is available. The server can set the state value, and the client can check the value at startup time to synchronize with the server.

Set the 64-bit integer state value.

## See Also

### Miscellaneous

- [notify_cancel(\_:)](notify_cancel%28__%29.md)
- [notify_check(\_:\_:)](notify_check%28____%29.md)
- [notify_get_state(\_:\_:)](notify_get_state%28____%29.md)
- [notify_post(\_:)](notify_post%28__%29.md)
- [notify_register_check(\_:\_:)](notify_register_check%28____%29.md)
- [notify_register_dispatch(\_:\_:\_:\_:)](notify_register_dispatch%28________%29.md): Request notification delivery to a dispatch queue.
- [notify_register_mach_port(\_:\_:\_:\_:)](notify_register_mach_port%28________%29.md)
- [notify_register_signal(\_:\_:\_:)](notify_register_signal%28______%29.md)
- [notify_resume(\_:)](notify_resume%28__%29.md)
- [notify_suspend(\_:)](notify_suspend%28__%29.md)

# notify_set_state (Objective-C)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern uint32_t notify_set_state(int token, uint64_t state64);
```

## Parameters

- `token`: (Input) notification token
- `state64`: (Input) 64-bit unsigned integer value

<a id="return-value"></a>

## Return Value

Returns status.

<a id="Discussion"></a>

## Discussion

Set or get a state value associated with a notification token. Each key in the notification namespace has an associated integer value available for use by clients as for application-specific purposes. A common usage is to allow two processes or threads to synchronize their activities. For example, a server process may need send a notification when a resource becomes available. A client process can register for the notification, but when it starts up it will not know whether the resource is available. The server can set the state value, and the client can check the value at startup time to synchronize with the server.

Set the 64-bit integer state value.

## See Also

### Miscellaneous

- [notify_cancel](notify_cancel%28__%29.md)
- [notify_check](notify_check%28____%29.md)
- [notify_get_state](notify_get_state%28____%29.md)
- [notify_post](notify_post%28__%29.md)
- [notify_register_check](notify_register_check%28____%29.md)
- [notify_register_dispatch](notify_register_dispatch%28________%29.md): Request notification delivery to a dispatch queue.
- [notify_register_mach_port](notify_register_mach_port%28________%29.md)
- [notify_register_signal](notify_register_signal%28______%29.md)
- [notify_resume](notify_resume%28__%29.md)
- [notify_suspend](notify_suspend%28__%29.md)
