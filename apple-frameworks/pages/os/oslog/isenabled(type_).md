> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslog/isenabled(type:)](https://developer.apple.com/documentation/os/oslog/isenabled(type:))

# isEnabled(type:) (Swift)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean value that indicates whether the log can write messages with the specified log type.

## Declaration

```swift
func isEnabled(type: OSLogType) -> Bool
```

## Parameters

- `type`: A log type constant, such as [OS_LOG_TYPE_DEFAULT](../os_log_type_t/os_log_type_default.md), [OS_LOG_TYPE_INFO](../os_log_type_t/os_log_type_info.md), [OS_LOG_TYPE_DEBUG](../os_log_type_t/os_log_type_debug.md), [OS_LOG_TYPE_ERROR](../os_log_type_t/os_log_type_error.md), or [OS_LOG_TYPE_FAULT](../os_log_type_t/os_log_type_fault.md), that specifies the level of logging to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if logging at the specified level is in an enabled state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

# os_log_type_enabled (Objective-C)

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean value that indicates whether the log can write messages with the specified log type.

## Declaration

```objectivec
extern bool os_log_type_enabled(os_log_t oslog, os_log_type_t type);
```

## Parameters

- `oslog`: The [OS_LOG_DEFAULT](../os_log_default.md) constant or a custom log object that you create with the [os_log_create](../os_log_create.md) function.
- `type`: A log type constant, such as [OS_LOG_TYPE_DEFAULT](../os_log_type_t/os_log_type_default.md), [OS_LOG_TYPE_INFO](../os_log_type_t/os_log_type_info.md), [OS_LOG_TYPE_DEBUG](../os_log_type_t/os_log_type_debug.md), [OS_LOG_TYPE_ERROR](../os_log_type_t/os_log_type_error.md), or [OS_LOG_TYPE_FAULT](../os_log_type_t/os_log_type_fault.md), that specifies the level of logging to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if logging at the specified level is in an enabled state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Log Configuration

- [os_log_info_enabled](../os_log_info_enabled.md): Returns a Boolean value that indicates whether info-level logging is in an enabled state for a specified log object.
- [os_log_debug_enabled](../os_log_debug_enabled.md): Returns a Boolean value that indicates whether debug-level logging is in an enabled state for a specified log object.
- [os_signpost_enabled](../os_signpost_enabled.md): Returns a Boolean value that indicates whether signposts are in an enabled state for the specified log.
