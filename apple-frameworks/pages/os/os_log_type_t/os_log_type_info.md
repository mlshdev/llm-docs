> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_log_type_t/os_log_type_info](https://developer.apple.com/documentation/os/os_log_type_t/os_log_type_info)

# OS_LOG_TYPE_INFO

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The informational log level.

## Declaration

```objectivec
OS_LOG_TYPE_INFO
```

<a id="Discussion"></a>

## Discussion

Logging a message of this type is equivalent to calling the [os_log_info](../os_log_info.md) function. Use this level to capture information that may be helpful, but not essential, for troubleshooting errors.

Info-level messages are initially stored in memory buffers. Without a configuration change, they are purged as memory buffers fill. They are, however, captured in the data store when faults and, optionally, errors occur. When info-level messages are added to the data store, they remain there until a storage quota is exceeded, at which point, the oldest messages are purged.
