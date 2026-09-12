> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_set_breadcrumb](https://developer.apple.com/documentation/os/os_activity_set_breadcrumb)

# os_activity_set_breadcrumb

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flags the current activity as a breadcrumb, to signify an interesting event.

> Use [os_activity_label_useraction](os_activity_label_useraction.md) instead.

## Declaration

```objectivec
#define os_activity_set_breadcrumb(name)
```

## Parameters

- `name`: A label that describes the breadcrumb.

<a id="Discussion"></a>

## Discussion

Use breadcrumbs to track interactions that span across multiple activities. Keep in mind that not all activities are interesting events.

This function can only be called once per activity;  subsequent calls are ignored.

## See Also

### Deprecated Macros

- [os_activity_start](os_activity_start.md): Deprecated.
- [OS_TRACE_TYPE_DEBUG](os_trace_type_debug.md): Deprecated. Trace messages that occur when a debugger is attached.
- [OS_TRACE_TYPE_INFO](os_trace_type_info.md): Deprecated. Trace messages that occur when a debugger is attached and additional info is requested.
- [OS_TRACE_TYPE_RELEASE](os_trace_type_release.md): Deprecated. Trace messages to be captured on your app when instealled on a user’s device.
