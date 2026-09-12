> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_log_type_t/os_log_type_default](https://developer.apple.com/documentation/os/os_log_type_t/os_log_type_default)

# OS_LOG_TYPE_DEFAULT

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The default log level.

## Declaration

```objectivec
OS_LOG_TYPE_DEFAULT
```

<a id="Discussion"></a>

## Discussion

Logging a message of this type is equivalent to calling the [os_log](../os_log.md) function. Use this level to capture information about things that might result in a failure.

Default-level messages are initially stored in memory buffers. Without a configuration change, they are compressed and moved to the data store as memory buffers fill. They remain there until a storage quota is exceeded, at which point, the oldest messages are purged.
