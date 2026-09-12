> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/darwinnotify/notify_post(_:)](https://developer.apple.com/documentation/darwinnotify/notify_post(_:))

# notify_post(\_:) (Swift)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func notify_post(_ name: UnsafePointer<CChar>!) -> UInt32
```

<a id="Discussion"></a>

## Discussion

Post a notification for a name.

This is the only call that is required for a notification producer. Returns status.

## See Also

### Miscellaneous

- [notify_cancel(\_:)](notify_cancel%28__%29.md)
- [notify_check(\_:\_:)](notify_check%28____%29.md)
- [notify_get_state(\_:\_:)](notify_get_state%28____%29.md)
- [notify_register_check(\_:\_:)](notify_register_check%28____%29.md)
- [notify_register_dispatch(\_:\_:\_:\_:)](notify_register_dispatch%28________%29.md): Request notification delivery to a dispatch queue.
- [notify_register_mach_port(\_:\_:\_:\_:)](notify_register_mach_port%28________%29.md)
- [notify_register_signal(\_:\_:\_:)](notify_register_signal%28______%29.md)
- [notify_resume(\_:)](notify_resume%28__%29.md)
- [notify_set_state(\_:\_:)](notify_set_state%28____%29.md)
- [notify_suspend(\_:)](notify_suspend%28__%29.md)

# notify_post (Objective-C)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
extern uint32_t notify_post(const char *name);
```

<a id="Discussion"></a>

## Discussion

Post a notification for a name.

This is the only call that is required for a notification producer. Returns status.

## See Also

### Miscellaneous

- [notify_cancel](notify_cancel%28__%29.md)
- [notify_check](notify_check%28____%29.md)
- [notify_get_state](notify_get_state%28____%29.md)
- [notify_register_check](notify_register_check%28____%29.md)
- [notify_register_dispatch](notify_register_dispatch%28________%29.md): Request notification delivery to a dispatch queue.
- [notify_register_mach_port](notify_register_mach_port%28________%29.md)
- [notify_register_signal](notify_register_signal%28______%29.md)
- [notify_resume](notify_resume%28__%29.md)
- [notify_set_state](notify_set_state%28____%29.md)
- [notify_suspend](notify_suspend%28__%29.md)
