> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/oslog/disabled

# disabled

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

The shared disabled log.

## Declaration

```swift
static let disabled: OSLog
```

<a id="Discussion"></a>

## Discussion

Passing this constant to an `os_log` function prevents the system from logging a message.

## See Also

### Getting the Shared Logs

- [default](default.md): The shared default log.
