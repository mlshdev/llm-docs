> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogtype/info](https://developer.apple.com/documentation/os/oslogtype/info)

# info

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

The informative log level.

## Declaration

```swift
static let info: OSLogType
```

<a id="Discussion"></a>

## Discussion

Logging a message of this type is equivalent to calling the [os_log_info](../os_log_info.md) function. Use this level to capture information that may be helpful, but not essential, for troubleshooting errors.

The system stores info-level messages in memory buffers and, without a configuration change, purges the oldest messages as those buffers fill up. However, the system writes the messages to the data store when faults and, optionally, errors occur. Info-level messages remain in the data store until the store’s size exceeds its storage quota, at which point, the system purges the oldest messages in the data store to free up space.

## See Also

### Getting Log Types

- [debug](debug.md): The debug log level.
- [default](default.md): The default log level.
- [error](error.md): The error log level.
- [fault](fault.md): The fault log level.
