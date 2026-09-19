> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/os_log_type_t/os_log_type_debug

# OS_LOG_TYPE_DEBUG

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The debug log level.

## Declaration

```objectivec
OS_LOG_TYPE_DEBUG
```

<a id="Discussion"></a>

## Discussion

Logging a message of this type is equivalent to calling the [os_log_debug](../os_log_debug.md) function. Use this level to capture information that may be useful during development or while troubleshooting a specific problem.

Debug-level messages are only captured in memory when debug logging is enabled through a configuration change. They’re purged in accordance with the configuration’s persistence setting.
