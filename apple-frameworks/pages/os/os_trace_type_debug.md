> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_trace_type_debug](https://developer.apple.com/documentation/os/os_trace_type_debug)

# OS_TRACE_TYPE_DEBUG (Swift)

**Framework:** os  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Trace messages that occur when a debugger is attached.

> Use logging instead.

## Declaration

```swift
var OS_TRACE_TYPE_DEBUG: UInt32 { get }
```

## See Also

### Deprecated Macros

- [OS_TRACE_TYPE_INFO](os_trace_type_info.md): Deprecated. Trace messages that occur when a debugger is attached and additional info is requested.
- [OS_TRACE_TYPE_RELEASE](os_trace_type_release.md): Deprecated. Trace messages to be captured on your app when instealled on a user’s device.

# OS_TRACE_TYPE_DEBUG (Objective-C)

**Framework:** os  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Trace messages that occur when a debugger is attached.

> Use logging instead.

## Declaration

```objectivec
#define OS_TRACE_TYPE_DEBUG
```

## See Also

### Deprecated Macros

- [os_activity_start](os_activity_start.md): Deprecated.
- [os_activity_set_breadcrumb](os_activity_set_breadcrumb.md): Deprecated. Flags the current activity as a breadcrumb, to signify an interesting event.
- [OS_TRACE_TYPE_INFO](os_trace_type_info.md): Deprecated. Trace messages that occur when a debugger is attached and additional info is requested.
- [OS_TRACE_TYPE_RELEASE](os_trace_type_release.md): Deprecated. Trace messages to be captured on your app when instealled on a user’s device.
