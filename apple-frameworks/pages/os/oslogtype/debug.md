> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogtype/debug](https://developer.apple.com/documentation/os/oslogtype/debug)

# debug

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

The debug log level.

## Declaration

```swift
static let debug: OSLogType
```

<a id="Discussion"></a>

## Discussion

Logging a message of this type is equivalent to calling the [os_log_debug](../os_log_debug.md) function. Use this level to capture information that may be useful during development or while troubleshooting a specific problem.

The system only captures debug-level messages in memory when you enable debug logging through a configuration change, and purges them in accordance with the configuration’s persistence setting.

## See Also

### Getting Log Types

- [info](info.md): The informative log level.
- [default](default.md): The default log level.
- [error](error.md): The error log level.
- [fault](fault.md): The fault log level.
