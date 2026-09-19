> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchtime/uptimenanoseconds

# uptimeNanoseconds

**Framework:** Dispatch  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of nanoseconds since boot, excluding any time the system spent asleep.

## Declaration

```swift
var uptimeNanoseconds: UInt64 { get }
```

## See Also

### Getting the Time

- [rawValue](rawvalue.md): Returns the underlying time value.
