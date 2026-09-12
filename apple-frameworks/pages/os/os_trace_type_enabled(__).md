> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_trace_type_enabled(_:)](https://developer.apple.com/documentation/os/os_trace_type_enabled(_:))

# os_trace_type_enabled(\_:) (Swift)

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.13) · tvOS 8.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Returns whether the specified info level trace information is enabled.

> Use [isEnabled(type:)](oslog/isenabled%28type_%29.md) instead.

## Declaration

```swift
func os_trace_type_enabled(_ type: UInt8) -> Bool
```

## Parameters

- `type`: The type of trace to check. Possible values are [OS_TRACE_TYPE_DEBUG](os_trace_type_debug.md) and [OS_TRACE_TYPE_INFO](os_trace_type_info.md).

<a id="Discussion"></a>

## Discussion

Generally, trace points should not involve expensive operations, however some circumstances warrant it. Use this function to do expensive work only when a given level of trace messages are enabled.

## See Also

### Deprecated Functions

- [os_trace_debug_enabled()](os_trace_debug_enabled%28%29.md): Deprecated. Returns whether debug level trace information is enabled.
- [os_trace_info_enabled()](os_trace_info_enabled%28%29.md): Deprecated. Returns whether info level trace information is enabled.

# os_trace_type_enabled (Objective-C)

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.13) · tvOS 8.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Returns whether the specified info level trace information is enabled.

> Use [os_log_type_enabled](oslog/isenabled%28type_%29.md) instead.

## Declaration

```objectivec
static bool os_trace_type_enabled(uint8_t type);
```

## Parameters

- `type`: The type of trace to check. Possible values are [OS_TRACE_TYPE_DEBUG](os_trace_type_debug.md) and [OS_TRACE_TYPE_INFO](os_trace_type_info.md).

<a id="Discussion"></a>

## Discussion

Generally, trace points should not involve expensive operations, however some circumstances warrant it. Use this function to do expensive work only when a given level of trace messages are enabled.

## See Also

### Deprecated Functions

- [os_log_is_enabled](os_log_is_enabled.md): Deprecated.
- [os_log_is_debug_enabled](os_log_is_debug_enabled.md): Deprecated.
- [os_activity_get_active](os_activity_get_active.md): Deprecated. Returns the stack of nested activities associated with the current thread.
- [os_activity_end](os_activity_end.md): Deprecated. Ends the specified activity on the current thread.
- [os_trace_debug_enabled](os_trace_debug_enabled%28%29.md): Deprecated. Returns whether debug level trace information is enabled.
- [os_trace_info_enabled](os_trace_info_enabled%28%29.md): Deprecated. Returns whether info level trace information is enabled.
