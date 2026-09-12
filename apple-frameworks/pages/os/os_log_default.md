> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_log_default](https://developer.apple.com/documentation/os/os_log_default)

# OS_LOG_DEFAULT

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The shared default log.

## Declaration

```objectivec
#define OS_LOG_DEFAULT
```

<a id="Discussion"></a>

## Discussion

Passing this constant to an `os_log` function, such as [os_log](os_log.md), [os_log_info](os_log_info.md), [os_log_debug](os_log_debug.md), [os_log_error](os_log_error.md), or [os_log_fault](os_log_fault.md), causes the system to log a message with the system’s standard behavior.

## See Also

### Getting the Standard Log Objects

- [OS_LOG_DISABLED](os_log_disabled.md): The shared disabled log.
