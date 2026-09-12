> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslog/default](https://developer.apple.com/documentation/os/oslog/default)

# default

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

The shared default log.

## Declaration

```swift
static let `default`: OSLog
```

<a id="Discussion"></a>

## Discussion

Passing this constant to an `os_log` function causes the system to log a message with the system’s standard behavior.

## See Also

### Getting the Shared Logs

- [disabled](disabled.md): The shared disabled log.
