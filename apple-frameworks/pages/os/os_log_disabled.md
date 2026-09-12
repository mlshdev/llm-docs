> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_log_disabled](https://developer.apple.com/documentation/os/os_log_disabled)

# OS_LOG_DISABLED

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The shared disabled log.

## Declaration

```objectivec
#define OS_LOG_DISABLED
```

<a id="Discussion"></a>

## Discussion

Passing this constant to an `os_log` function, such as `os_log`, `os_log_info`, `os_log_debug`, `os_log_error`, or `os_log_fault`, prevents the system from logging a message.

## See Also

### Getting the Standard Log Objects

- [OS_LOG_DEFAULT](os_log_default.md): The shared default log.
