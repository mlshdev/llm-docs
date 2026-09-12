> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/nextdaylightsavingtimetransition](https://developer.apple.com/documentation/foundation/timezone/nextdaylightsavingtimetransition)

# nextDaylightSavingTimeTransition

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The date of the next (after the current instant) daylight saving time transition for the time zone.

## Declaration

```swift
var nextDaylightSavingTimeTransition: Date? { get }
```

<a id="Discussion"></a>

## Discussion

Depending on the time zone, the value of this property may represent a change of the time zone’s offset from GMT. The value is `nil` if the time zone does not currently observe daylight saving time.

## See Also

### Working with Daylight Savings

- [isDaylightSavingTime(for:)](isdaylightsavingtime%28for_%29.md): Returns a Boolean value that indicates whether the receiver uses daylight saving time at a given date.
- [daylightSavingTimeOffset(for:)](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition(after:)](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.
