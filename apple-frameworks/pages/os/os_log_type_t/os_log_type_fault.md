> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_log_type_t/os_log_type_fault](https://developer.apple.com/documentation/os/os_log_type_t/os_log_type_fault)

# OS_LOG_TYPE_FAULT

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The fault log level.

## Declaration

```objectivec
OS_LOG_TYPE_FAULT
```

<a id="Discussion"></a>

## Discussion

Logging a message at this level is equivalent to calling the [os_log_fault](../os_log_fault.md) function. Use this level only to capture system-level or multi-process information when reporting system errors.

Fault-level messages are always saved in the data store. They remain there until a storage quota is exceeded, at which point, the oldest messages are purged. If an activity object exists, logging at this level captures information for the entire process chain.
