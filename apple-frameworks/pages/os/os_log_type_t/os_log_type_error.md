> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_log_type_t/os_log_type_error](https://developer.apple.com/documentation/os/os_log_type_t/os_log_type_error)

# OS_LOG_TYPE_ERROR

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The error log level.

## Declaration

```objectivec
OS_LOG_TYPE_ERROR
```

<a id="Discussion"></a>

## Discussion

Logging a message of this type is equivalent to calling the [os_log_error](../os_log_error.md) function. Use this log level to report process-level errors.

Error-level messages are always saved in the data store. They remain there until a storage quota is exceeded, at which point, the oldest messages are purged. If an activity object exists, logging at this level captures information for the entire process chain.
