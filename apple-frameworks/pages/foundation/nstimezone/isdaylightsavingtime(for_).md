> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/isdaylightsavingtime(for:)](https://developer.apple.com/documentation/foundation/nstimezone/isdaylightsavingtime(for:))

# isDaylightSavingTime(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the receiver uses daylight saving time on a given date.

## Declaration

```swift
func isDaylightSavingTime(for aDate: Date) -> Bool
```

## Parameters

- `aDate`: The date against which to test the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses daylight saving time at `aDate`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with Daylight Savings

- [isDaylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [daylightSavingTimeOffset(for:)](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.
- [nextDaylightSavingTimeTransition(after:)](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.

# isDaylightSavingTimeForDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the receiver uses daylight saving time on a given date.

## Declaration

```objectivec
- (BOOL) isDaylightSavingTimeForDate:(NSDate *) aDate;
```

## Parameters

- `aDate`: The date against which to test the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses daylight saving time at `aDate`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with Daylight Savings

- [daylightSavingTime](isdaylightsavingtime.md): A Boolean value that indicates whether the receiver is currently using daylight saving time.
- [daylightSavingTimeOffset](daylightsavingtimeoffset.md): The current daylight saving time offset of the receiver.
- [daylightSavingTimeOffsetForDate:](daylightsavingtimeoffset%28for_%29.md): Returns the daylight saving time offset for a given date.
- [nextDaylightSavingTimeTransition](nextdaylightsavingtimetransition.md): The date of the next daylight saving time transition for the receiver.
- [nextDaylightSavingTimeTransitionAfterDate:](nextdaylightsavingtimetransition%28after_%29.md): Returns the next daylight saving time transition after a given date.
