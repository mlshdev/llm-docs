> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/daylightsavingtimeoffset](https://developer.apple.com/documentation/foundation/nstimezone/daylightsavingtimeoffset)

# daylightSavingTimeOffset (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current daylight saving time offset of the receiver.

## Declaration

```swift
var daylightSavingTimeOffset: TimeInterval { get }
```

## See Also

### Working with Daylight Savings

- [isDaylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [isDaylightSavingTime(for:)](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffset(for:)](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.
- [nextDaylightSavingTimeTransition(after:)](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.

# daylightSavingTimeOffset (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current daylight saving time offset of the receiver.

## Declaration

```objectivec
@property (readonly) NSTimeInterval daylightSavingTimeOffset;
```

## See Also

### Working with Daylight Savings

- [daylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [isDaylightSavingTimeForDate:](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffsetForDate:](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.
- [nextDaylightSavingTimeTransitionAfterDate:](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.
