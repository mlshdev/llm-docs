> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/addtimeinterval(_:)](https://developer.apple.com/documentation/foundation/nsdate/addtimeinterval(_:))

# addTimeInterval(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 4.0) · iPadOS 2.0+ (deprecated in 4.0) · Mac Catalyst 2.0+ (deprecated in 4.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a new date object that is set to a given number of seconds relative to the receiver.

> Use [addingTimeInterval(\_:)](addingtimeinterval%28__%29.md) instead.

## Declaration

```swift
func addTimeInterval(_ seconds: TimeInterval) -> Any
```

## Parameters

- `seconds`: The number of seconds to add to the receiver. Use a negative value for seconds to have the returned object specify a date before the receiver.

<a id="return-value"></a>

## Return Value

A new [NSDate](../nsdate.md) object that is set to `seconds` seconds relative to the receiver. The date returned might have a representation different from the receiver’s.

## See Also

### Related Documentation

- [addingTimeInterval(\_:)](addingtimeinterval%28__%29.md): Returns a new date object that is set to a given number of seconds relative to the receiver.
- [timeIntervalSince(\_:)](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.

### Legacy Operations

- [date(withNaturalLanguageString:)](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(withNaturalLanguageString:locale:)](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(with:)](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [init(string:)](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [date(withCalendarFormat:timeZone:)](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [description(withCalendarFormat:timeZone:locale:)](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.

# addTimeInterval: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 4.0) · iPadOS 2.0+ (deprecated in 4.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.6) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a new date object that is set to a given number of seconds relative to the receiver.

> Use [dateByAddingTimeInterval:](addingtimeinterval%28__%29.md) instead.

## Declaration

```objectivec
- (id) addTimeInterval:(NSTimeInterval) seconds;
```

## Parameters

- `seconds`: The number of seconds to add to the receiver. Use a negative value for seconds to have the returned object specify a date before the receiver.

<a id="return-value"></a>

## Return Value

A new [NSDate](../nsdate.md) object that is set to `seconds` seconds relative to the receiver. The date returned might have a representation different from the receiver’s.

## See Also

### Related Documentation

- [dateByAddingTimeInterval:](addingtimeinterval%28__%29.md): Returns a new date object that is set to a given number of seconds relative to the receiver.
- [timeIntervalSinceDate:](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.

### Legacy Operations

- [dateWithNaturalLanguageString:](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithNaturalLanguageString:locale:](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithString:](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [initWithString:](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [dateWithCalendarFormat:timeZone:](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [descriptionWithCalendarFormat:timeZone:locale:](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.
