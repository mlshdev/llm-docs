> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/isdaylightsavingtime(for:)](https://developer.apple.com/documentation/foundation/timezone/isdaylightsavingtime(for:))

# isDaylightSavingTime(for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver uses daylight saving time at a given date.

## Declaration

```swift
func isDaylightSavingTime(for date: Date = Date()) -> Bool
```

## Parameters

- `date`: The date to use for the calculation. The default value is the current date.

## See Also

### Working with Daylight Savings

- [daylightSavingTimeOffset(for:)](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next (after the current instant) daylight saving time transition for the time zone.
- [nextDaylightSavingTimeTransition(after:)](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.
