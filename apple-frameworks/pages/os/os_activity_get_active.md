> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_get_active](https://developer.apple.com/documentation/os/os_activity_get_active)

# os_activity_get_active

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Returns the stack of nested activities associated with the current thread.

> This function is no longer supported, and there is no replacement.

## Declaration

```objectivec
extern unsigned int os_activity_get_active(os_activity_id_t *entries, unsigned int *count);
```

## Parameters

- `entries`: A buffer sized to hold the the number of activities being requested.
- `count`: The number of activities requested.

<a id="return-value"></a>

## Return Value

The number of activities written to `entries`.

<a id="Discussion"></a>

## Discussion

Because activities can be nested, there can be more than one activity involved on the current thread.

This function should be used only by diagnostic tools for making additional determinations about a situation.

## See Also

### Deprecated Functions

- [os_log_is_enabled](os_log_is_enabled.md): Deprecated.
- [os_log_is_debug_enabled](os_log_is_debug_enabled.md): Deprecated.
- [os_activity_end](os_activity_end.md): Deprecated. Ends the specified activity on the current thread.
- [os_trace_debug_enabled](os_trace_debug_enabled%28%29.md): Deprecated. Returns whether debug level trace information is enabled.
- [os_trace_info_enabled](os_trace_info_enabled%28%29.md): Deprecated. Returns whether info level trace information is enabled.
- [os_trace_type_enabled](os_trace_type_enabled%28__%29.md): Deprecated. Returns whether the specified info level trace information is enabled.
