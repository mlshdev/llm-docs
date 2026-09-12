> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/nextdaylightsavingtimetransition(after:)](https://developer.apple.com/documentation/foundation/nstimezone/nextdaylightsavingtimetransition(after:))

# nextDaylightSavingTimeTransition(after:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next daylight saving time transition after a given date.

## Declaration

```swift
func nextDaylightSavingTimeTransition(after aDate: Date) -> Date?
```

## Parameters

- `aDate`: A date.

<a id="return-value"></a>

## Return Value

The next daylight saving time transition after `aDate`. Depending on the time zone of the receiver, this method may return a change of the time zone’s offset from GMT. Returns `nil` if the time zone of the receiver does not observe daylight savings time as of `aDate`.

## See Also

### Working with Daylight Savings

- [isDaylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [isDaylightSavingTime(for:)](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [daylightSavingTimeOffset(for:)](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.

# nextDaylightSavingTimeTransitionAfterDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next daylight saving time transition after a given date.

## Declaration

```objectivec
- (NSDate *) nextDaylightSavingTimeTransitionAfterDate:(NSDate *) aDate;
```

## Parameters

- `aDate`: A date.

<a id="return-value"></a>

## Return Value

The next daylight saving time transition after `aDate`. Depending on the time zone of the receiver, this method may return a change of the time zone’s offset from GMT. Returns `nil` if the time zone of the receiver does not observe daylight savings time as of `aDate`.

## See Also

### Working with Daylight Savings

- [daylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [isDaylightSavingTimeForDate:](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [daylightSavingTimeOffsetForDate:](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.
