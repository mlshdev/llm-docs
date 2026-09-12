> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_start](https://developer.apple.com/documentation/os/os_activity_start)

# os_activity_start

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

> Use [os_activity_create](os_activity_create.md) and [os_activity_apply](os_activity_apply.md) instead.

## Declaration

```objectivec
#define os_activity_start(description, flags)
```

## See Also

### Deprecated Macros

- [os_activity_set_breadcrumb](os_activity_set_breadcrumb.md): Deprecated. Flags the current activity as a breadcrumb, to signify an interesting event.
- [OS_TRACE_TYPE_DEBUG](os_trace_type_debug.md): Deprecated. Trace messages that occur when a debugger is attached.
- [OS_TRACE_TYPE_INFO](os_trace_type_info.md): Deprecated. Trace messages that occur when a debugger is attached and additional info is requested.
- [OS_TRACE_TYPE_RELEASE](os_trace_type_release.md): Deprecated. Trace messages to be captured on your app when instealled on a user’s device.
