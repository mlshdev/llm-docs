> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/timezone/systemtimezonedidchangemessage/init(previoustimezone:)

# init(previousTimeZone:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a message for a change in the system time zone.

## Declaration

```swift
init(previousTimeZone: TimeZone?)
```

## Parameters

- `previousTimeZone`: The system’s time zone prior to the change.
