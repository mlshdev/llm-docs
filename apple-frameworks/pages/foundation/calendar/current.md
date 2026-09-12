> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/current](https://developer.apple.com/documentation/foundation/calendar/current)

# current

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user’s current calendar.

## Declaration

```swift
static var current: Calendar { get }
```

<a id="Discussion"></a>

## Discussion

This calendar does not track changes that the user makes to their preferences.

## See Also

### Getting the User’s Calendar

- [autoupdatingCurrent](autoupdatingcurrent.md): A calendar that tracks changes to user’s preferred calendar.
