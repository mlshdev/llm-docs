> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/daylightsavingtimeoffset(for:)](https://developer.apple.com/documentation/foundation/nstimezone/daylightsavingtimeoffset(for:))

# daylightSavingTimeOffset(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the daylight saving time offset for a given date.

## Declaration

```swift
func daylightSavingTimeOffset(for aDate: Date) -> TimeInterval
```

## Parameters

- `aDate`: A date.

<a id="return-value"></a>

## Return Value

The daylight saving time offset for `aDate`.

## See Also

### Working with Daylight Savings

- [isDaylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [isDaylightSavingTime(for:)](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.
- [nextDaylightSavingTimeTransition(after:)](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.

# daylightSavingTimeOffsetForDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the daylight saving time offset for a given date.

## Declaration

```objectivec
- (NSTimeInterval) daylightSavingTimeOffsetForDate:(NSDate *) aDate;
```

## Parameters

- `aDate`: A date.

<a id="return-value"></a>

## Return Value

The daylight saving time offset for `aDate`.

## See Also

### Working with Daylight Savings

- [daylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [isDaylightSavingTimeForDate:](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.
- [nextDaylightSavingTimeTransitionAfterDate:](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.
