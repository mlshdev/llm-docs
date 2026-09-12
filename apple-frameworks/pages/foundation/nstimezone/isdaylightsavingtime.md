> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/isdaylightsavingtime](https://developer.apple.com/documentation/foundation/nstimezone/isdaylightsavingtime)

# isDaylightSavingTime (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is currently using daylight saving time.

## Declaration

```swift
var isDaylightSavingTime: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the receiver is currently using daylight saving time, otherwise [false](https://developer.apple.com/documentation/swift/false). This property invokes [isDaylightSavingTime(for:)](isdaylightsavingtime%28for_%29.md) with the current date as the argument.

## See Also

### Working with Daylight Savings

- [isDaylightSavingTime(for:)](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [daylightSavingTimeOffset(for:)](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.
- [nextDaylightSavingTimeTransition(after:)](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.

# daylightSavingTime (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is currently using daylight saving time.

## Declaration

```objectivec
@property (readonly, getter=isDaylightSavingTime) BOOL daylightSavingTime;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the receiver is currently using daylight saving time, otherwise [false](https://developer.apple.com/documentation/swift/false). This property invokes [isDaylightSavingTimeForDate:](isdaylightsavingtime%28for_%29.md) with the current date as the argument.

## See Also

### Working with Daylight Savings

- [isDaylightSavingTimeForDate:](isdaylightsavingtime%28for_%29.md): Indicates whether the receiver uses daylight saving time on a given date.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [daylightSavingTimeOffsetForDate:](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.
- [nextDaylightSavingTimeTransitionAfterDate:](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.
