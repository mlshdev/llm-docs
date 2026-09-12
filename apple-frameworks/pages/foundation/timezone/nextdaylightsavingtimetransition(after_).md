> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/nextdaylightsavingtimetransition(after:)](https://developer.apple.com/documentation/foundation/timezone/nextdaylightsavingtimetransition(after:))

# nextDaylightSavingTimeTransition(after:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next daylight saving time transition after a given date.

## Declaration

```swift
func nextDaylightSavingTimeTransition(after date: Date) -> Date?
```

## Parameters

- `date`: A date.

<a id="return-value"></a>

## Return Value

The next daylight saving time transition after `date`. Depending on the time zone, this function may return a change of the time zone’s offset from GMT. Returns `nil` if the time zone of the receiver does not observe daylight savings time as of `date`.

## See Also

### Working with Daylight Savings

- [isDaylightSavingTime(for:)](isdaylightsavingtime%28for_%29.md): Returns a Boolean value that indicates whether the receiver uses daylight saving time at a given date.
- [daylightSavingTimeOffset(for:)](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next (after the current instant) daylight saving time transition for the time zone.
