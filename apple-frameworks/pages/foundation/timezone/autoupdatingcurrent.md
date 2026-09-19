> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/timezone/autoupdatingcurrent

# autoupdatingCurrent

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time zone currently used by the system, automatically updating to the user’s current preference.

## Declaration

```swift
static var autoupdatingCurrent: TimeZone { get }
```

<a id="Discussion"></a>

## Discussion

If this time zone is mutated, then it no longer tracks the system time zone.

The autoupdating time zone only compares equal to itself.

## See Also

### Getting the Current Time Zone

- [current](current.md): The time zone currently used by the system.
