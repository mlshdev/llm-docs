> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/gregorianstartdate](https://developer.apple.com/documentation/foundation/dateformatter/gregorianstartdate)

# gregorianStartDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The start date of the Gregorian calendar for the receiver.

## Declaration

```swift
var gregorianStartDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

This is used to specify the start date for the Gregorian calendar switch from the Julian calendar. Different locales switched at different times. Normally you should just accept the locale’s default date for the switch.

See [NSCalendar](../nscalendar.md) for more information.

## See Also

### Managing Attributes

- [calendar](calendar.md): The calendar for the receiver.
- [defaultDate](defaultdate.md): The default date for the receiver.
- [locale](locale.md): The locale for the receiver.
- [timeZone](timezone.md): The time zone for the receiver.
- [twoDigitStartDate](twodigitstartdate.md): The earliest date that can be denoted by a two-digit year specifier.

# gregorianStartDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The start date of the Gregorian calendar for the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSDate * gregorianStartDate;
```

<a id="Discussion"></a>

## Discussion

This is used to specify the start date for the Gregorian calendar switch from the Julian calendar. Different locales switched at different times. Normally you should just accept the locale’s default date for the switch.

See [NSCalendar](../nscalendar.md) for more information.

## See Also

### Managing Attributes

- [calendar](calendar.md): The calendar for the receiver.
- [defaultDate](defaultdate.md): The default date for the receiver.
- [locale](locale.md): The locale for the receiver.
- [timeZone](timezone.md): The time zone for the receiver.
- [twoDigitStartDate](twodigitstartdate.md): The earliest date that can be denoted by a two-digit year specifier.
