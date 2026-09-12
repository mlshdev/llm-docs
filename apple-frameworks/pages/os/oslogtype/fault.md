> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogtype/fault](https://developer.apple.com/documentation/os/oslogtype/fault)

# fault

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

The fault log level.

## Declaration

```swift
static let fault: OSLogType
```

<a id="Discussion"></a>

## Discussion

Logging a message at this level is equivalent to calling the [os_log_fault](../os_log_fault.md) function. Use this level only to capture system-level or multiprocess information when reporting system errors.

The system always writes fault-level messages to the data store. They remain in the store until its size exceeds its storage quota, at which point, the system purges the oldest messages in the store to free up space. If an activity object exists, logging at this level captures information for the entire process chain.

## See Also

### Getting Log Types

- [debug](debug.md): The debug log level.
- [info](info.md): The informative log level.
- [default](default.md): The default log level.
- [error](error.md): The error log level.
