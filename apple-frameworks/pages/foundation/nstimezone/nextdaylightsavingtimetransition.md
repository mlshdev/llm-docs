> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/nextdaylightsavingtimetransition](https://developer.apple.com/documentation/foundation/nstimezone/nextdaylightsavingtimetransition)

# nextDaylightSavingTimeTransition (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The date of the next daylight saving time transition for the receiver.

## Declaration

```swift
var nextDaylightSavingTimeTransition: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the date of the next (after the current instant) daylight saving time transition for the receiver. Depending on the time zone of the receiver, the value of this property may represent a change of the time zone’s offset from GMT. Returns `nil` if the time zone of the receiver does not currently observe daylight saving time.

## See Also

### Working with Daylight Savings

- [isDaylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [isDaylightSavingTime(for:)](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [daylightSavingTimeOffset(for:)](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition(after:)](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.

# nextDaylightSavingTimeTransition (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The date of the next daylight saving time transition for the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * nextDaylightSavingTimeTransition;
```

<a id="Discussion"></a>

## Discussion

This property contains the date of the next (after the current instant) daylight saving time transition for the receiver. Depending on the time zone of the receiver, the value of this property may represent a change of the time zone’s offset from GMT. Returns `nil` if the time zone of the receiver does not currently observe daylight saving time.

## See Also

### Working with Daylight Savings

- [daylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [isDaylightSavingTimeForDate:](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [daylightSavingTimeOffsetForDate:](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransitionAfterDate:](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.
