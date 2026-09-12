> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/autoupdatingcurrent](https://developer.apple.com/documentation/foundation/calendar/autoupdatingcurrent)

# autoupdatingCurrent

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A calendar that tracks changes to user’s preferred calendar.

## Declaration

```swift
static var autoupdatingCurrent: Calendar { get }
```

<a id="Discussion"></a>

## Discussion

If mutated, this calendar will no longer track the user’s preferred calendar.

> **Note**

>  The autoupdating Calendar will only compare equal to another autoupdating Calendar.

## See Also

### Getting the User’s Calendar

- [current](current.md): The user’s current calendar.
