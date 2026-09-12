> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogtype/default](https://developer.apple.com/documentation/os/oslogtype/default)

# default

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

The default log level.

## Declaration

```swift
static let `default`: OSLogType
```

<a id="Discussion"></a>

## Discussion

Logging a message of this type is equivalent to calling the [os_log](../os_log.md) function. Use this level to capture information about things that might result in a failure.

The system stores default-level messages in memory buffers and, without a configuration change, compresses the messages and writes them to the data store as those buffers fill up. They remain in the data store until the store’s size exceeds its storage quota, at which point, the system purges the oldest messages in the store to free up space.

## See Also

### Getting Log Types

- [debug](debug.md): The debug log level.
- [info](info.md): The informative log level.
- [error](error.md): The error log level.
- [fault](fault.md): The fault log level.
