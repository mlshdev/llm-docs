> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/logger/isenabled(type:)

# isEnabled(type:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Checks if the Logger can emit log messages for a given log type. This allows for more granular control over logging based on the log level.

## Declaration

```swift
func isEnabled(type: OSLogType) -> Bool
```

## Parameters

- `type`: The log type to check (e.g., .default, .info, .debug, .error, .fault)

<a id="return-value"></a>

## Return Value

True if logging is enabled for the specified log type, false otherwise
