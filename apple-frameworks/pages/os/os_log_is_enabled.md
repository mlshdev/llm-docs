> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_log_is_enabled](https://developer.apple.com/documentation/os/os_log_is_enabled)

# os_log_is_enabled

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

> This function always returns [true](https://developer.apple.com/documentation/swift/true). Use [os_log_type_enabled](oslog/isenabled%28type_%29.md) instead.

## Declaration

```objectivec
extern bool os_log_is_enabled(os_log_t log);
```

## See Also

### Deprecated Functions

- [os_log_is_debug_enabled](os_log_is_debug_enabled.md): Deprecated.
- [os_activity_get_active](os_activity_get_active.md): Deprecated. Returns the stack of nested activities associated with the current thread.
- [os_activity_end](os_activity_end.md): Deprecated. Ends the specified activity on the current thread.
- [os_trace_debug_enabled](os_trace_debug_enabled%28%29.md): Deprecated. Returns whether debug level trace information is enabled.
- [os_trace_info_enabled](os_trace_info_enabled%28%29.md): Deprecated. Returns whether info level trace information is enabled.
- [os_trace_type_enabled](os_trace_type_enabled%28__%29.md): Deprecated. Returns whether the specified info level trace information is enabled.
