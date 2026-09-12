> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_log_info_enabled](https://developer.apple.com/documentation/os/os_log_info_enabled)

# os_log_info_enabled

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether info-level logging is in an enabled state for a specified log object.

## Declaration

```objectivec
#define os_log_info_enabled(log)
```

## Parameters

- `log`: The [OS_LOG_DEFAULT](os_log_default.md) constant or a custom log object that you create with the [os_log_create](os_log_create.md) function.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if info-level logging is in an enabled state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [OS_LOG_TYPE_INFO](https://developer.apple.com/documentation/kernel/os_log_type_t/os_log_type_info): Info-level messages are initially stored in memory buffers. Without a configuration change, they are not moved to the data store and are purged as memory buffers fill. They are, however, captured in the data store when faults and, optionally, errors occur. When info-level messages are added to the data store, they remain there until a storage quota is exceeded, at which point, the oldest messages are purged. Use this level to capture information that may be helpful, but isn't essential, for troubleshooting errors. Logging a message of this type is equivalent to calling the function.

### Getting Log Configuration

- [os_log_debug_enabled](os_log_debug_enabled.md): Returns a Boolean value that indicates whether debug-level logging is in an enabled state for a specified log object.
- [os_log_type_enabled](oslog/isenabled%28type_%29.md): Returns a Boolean value that indicates whether the log can write messages with the specified log type.
- [os_signpost_enabled](os_signpost_enabled.md): Returns a Boolean value that indicates whether signposts are in an enabled state for the specified log.
