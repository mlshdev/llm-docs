> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/options](https://developer.apple.com/documentation/foundation/nscalendar/options)

# NSCalendar.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The options for arithmetic operations involving calendars.

## Declaration

```swift
struct Options
```

## Topics

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

### Constants

- [wrapComponents](options/wrapcomponents.md): Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.
- [matchStrictly](options/matchstrictly.md): Specifies that the operation should travel as far forward or backward as necessary looking for a match.
- [searchBackwards](options/searchbackwards.md): Specifies that the operation should travel backwards to find the previous match before the given date.
- [matchPreviousTimePreservingSmallerUnits](options/matchprevioustimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *previous* existing value of the missing unit and preserves the lower units’ values.
- [matchNextTimePreservingSmallerUnits](options/matchnexttimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and preserves the lower units’ values.
- [matchNextTime](options/matchnexttime.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and *does not* preserve the lower units’ values.
- [matchFirst](options/matchfirst.md): Specifies that, if there are two or more matching times, the operation should return the first occurrence.
- [matchLast](options/matchlast.md): Specifies that, if there are two or more matching times, the operation should return the last occurrence.
- [NSWrapCalendarComponents](../nswrapcalendarcomponents.md): Deprecated. Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Scanning Dates

- [startOfDay(for:)](startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDates(startingAfter:matching:options:using:)](enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDate(after:matching:options:)](nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDate(after:matchingHour:minute:second:options:)](nextdate%28after_matchinghour_minute_second_options_%29.md): Returns the next date after a given date that matches the given hour, minute, and second, component values.
- [nextDate(after:matching:value:options:)](nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [NSWrapCalendarComponents](../nswrapcalendarcomponents-api.md): A legacy constant used to control overflow in date calculations.

# NSCalendarOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The options for arithmetic operations involving calendars.

## Declaration

```objectivec
enum NSCalendarOptions : NSUInteger;
```

## Topics

### Constants

- [NSCalendarWrapComponents](options/wrapcomponents.md): Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.
- [NSCalendarMatchStrictly](options/matchstrictly.md): Specifies that the operation should travel as far forward or backward as necessary looking for a match.
- [NSCalendarSearchBackwards](options/searchbackwards.md): Specifies that the operation should travel backwards to find the previous match before the given date.
- [NSCalendarMatchPreviousTimePreservingSmallerUnits](options/matchprevioustimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *previous* existing value of the missing unit and preserves the lower units’ values.
- [NSCalendarMatchNextTimePreservingSmallerUnits](options/matchnexttimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and preserves the lower units’ values.
- [NSCalendarMatchNextTime](options/matchnexttime.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and *does not* preserve the lower units’ values.
- [NSCalendarMatchFirst](options/matchfirst.md): Specifies that, if there are two or more matching times, the operation should return the first occurrence.
- [NSCalendarMatchLast](options/matchlast.md): Specifies that, if there are two or more matching times, the operation should return the last occurrence.
- [NSWrapCalendarComponents](../nswrapcalendarcomponents.md): Deprecated. Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.

## See Also

### Scanning Dates

- [startOfDayForDate:](startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDatesStartingAfterDate:matchingComponents:options:usingBlock:](enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDateAfterDate:matchingComponents:options:](nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDateAfterDate:matchingHour:minute:second:options:](nextdate%28after_matchinghour_minute_second_options_%29.md): Returns the next date after a given date that matches the given hour, minute, and second, component values.
- [nextDateAfterDate:matchingUnit:value:options:](nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [NSWrapCalendarComponents](../nswrapcalendarcomponents-api.md): A legacy constant used to control overflow in date calculations.
