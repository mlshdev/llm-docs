> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogtype/error](https://developer.apple.com/documentation/os/oslogtype/error)

# error

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

The error log level.

## Declaration

```swift
static let error: OSLogType
```

<a id="Discussion"></a>

## Discussion

Logging a message of this type is equivalent to calling the [os_log_error](../os_log_error.md) function. Use this log level to report process-level errors.

The system always writes error-level messages to the data store. They remain in the store until its size exceeds its storage quota, at which point, the system purges the oldest messages in the store to free up space. If an activity object exists, logging at this level captures information for the entire process chain.

## See Also

### Getting Log Types

- [debug](debug.md): The debug log level.
- [info](info.md): The informative log level.
- [default](default.md): The default log level.
- [fault](fault.md): The fault log level.
