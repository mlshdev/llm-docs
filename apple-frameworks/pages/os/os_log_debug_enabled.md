> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_log_debug_enabled](https://developer.apple.com/documentation/os/os_log_debug_enabled)

# os_log_debug_enabled

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether debug-level logging is in an enabled state for a specified log object.

## Declaration

```objectivec
#define os_log_debug_enabled(log)
```

## Parameters

- `log`: The [OS_LOG_DEFAULT](os_log_default.md) constant or a custom log object that you create with the [os_log_create](os_log_create.md) function.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if debug-level logging is in an enabled state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [OS_LOG_TYPE_DEBUG](https://developer.apple.com/documentation/kernel/os_log_type_t/os_log_type_debug): Debug-level messages are only captured in memory when debug logging is enabled through a configuration change. They're purged in accordance with the configuration's persistence setting. Messages logged at this level contain information that may be useful during development or while troubleshooting a specific problem. Debug logging is intended for use in a development environment and not in shipping software. Logging a message of this type is equivalent to calling the function.

### Getting Log Configuration

- [os_log_info_enabled](os_log_info_enabled.md): Returns a Boolean value that indicates whether info-level logging is in an enabled state for a specified log object.
- [os_log_type_enabled](oslog/isenabled%28type_%29.md): Returns a Boolean value that indicates whether the log can write messages with the specified log type.
- [os_signpost_enabled](os_signpost_enabled.md): Returns a Boolean value that indicates whether signposts are in an enabled state for the specified log.
