> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/darwinnotify/notify_register_signal(_:_:_:)](https://developer.apple.com/documentation/darwinnotify/notify_register_signal(_:_:_:))

# notify_register_signal(\_:\_:\_:) (Swift)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func notify_register_signal(_ name: UnsafePointer<CChar>!, _ sig: Int32, _ out_token: UnsafeMutablePointer<Int32>!) -> UInt32
```

## Parameters

- `name`: (Input) notification name
- `sig`: (Input) signal number (see signal(3))
- `out_token`: (Output) notification token

<a id="return-value"></a>

## Return Value

Returns status.

<a id="Discussion"></a>

## Discussion

Request notification delivery by UNIX signal.

A client may request signal notification for multiple names. After a signal is delivered, the notify_check() routine may be called with each notification token to determine which name (if any) generated the signal notification.

## See Also

### Miscellaneous

- [notify_cancel(\_:)](notify_cancel%28__%29.md)
- [notify_check(\_:\_:)](notify_check%28____%29.md)
- [notify_get_state(\_:\_:)](notify_get_state%28____%29.md)
- [notify_post(\_:)](notify_post%28__%29.md)
- [notify_register_check(\_:\_:)](notify_register_check%28____%29.md)
- [notify_register_dispatch(\_:\_:\_:\_:)](notify_register_dispatch%28________%29.md): Request notification delivery to a dispatch queue.
- [notify_register_mach_port(\_:\_:\_:\_:)](notify_register_mach_port%28________%29.md)
- [notify_resume(\_:)](notify_resume%28__%29.md)
- [notify_set_state(\_:\_:)](notify_set_state%28____%29.md)
- [notify_suspend(\_:)](notify_suspend%28__%29.md)

# notify_register_signal (Objective-C)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
extern uint32_t notify_register_signal(const char *name, int sig, int *out_token);
```

## Parameters

- `name`: (Input) notification name
- `sig`: (Input) signal number (see signal(3))
- `out_token`: (Output) notification token

<a id="return-value"></a>

## Return Value

Returns status.

<a id="Discussion"></a>

## Discussion

Request notification delivery by UNIX signal.

A client may request signal notification for multiple names. After a signal is delivered, the notify_check() routine may be called with each notification token to determine which name (if any) generated the signal notification.

## See Also

### Miscellaneous

- [notify_cancel](notify_cancel%28__%29.md)
- [notify_check](notify_check%28____%29.md)
- [notify_get_state](notify_get_state%28____%29.md)
- [notify_post](notify_post%28__%29.md)
- [notify_register_check](notify_register_check%28____%29.md)
- [notify_register_dispatch](notify_register_dispatch%28________%29.md): Request notification delivery to a dispatch queue.
- [notify_register_mach_port](notify_register_mach_port%28________%29.md)
- [notify_resume](notify_resume%28__%29.md)
- [notify_set_state](notify_set_state%28____%29.md)
- [notify_suspend](notify_suspend%28__%29.md)
