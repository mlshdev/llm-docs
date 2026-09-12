> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/calendar](https://developer.apple.com/documentation/foundation/dateformatter/calendar)

# calendar (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The calendar for the receiver.

## Declaration

```swift
var calendar: Calendar! { get set }
```

<a id="Discussion"></a>

## Discussion

If unspecified, the logical calendar for the current user is used.

## See Also

### Managing Attributes

- [defaultDate](defaultdate.md): The default date for the receiver.
- [locale](locale.md): The locale for the receiver.
- [timeZone](timezone.md): The time zone for the receiver.
- [twoDigitStartDate](twodigitstartdate.md): The earliest date that can be denoted by a two-digit year specifier.
- [gregorianStartDate](gregorianstartdate.md): The start date of the Gregorian calendar for the receiver.

# calendar (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The calendar for the receiver.

## Declaration

```objectivec
@property (copy, null_resettable) NSCalendar * calendar;
```

<a id="Discussion"></a>

## Discussion

If unspecified, the logical calendar for the current user is used.

## See Also

### Managing Attributes

- [defaultDate](defaultdate.md): The default date for the receiver.
- [locale](locale.md): The locale for the receiver.
- [timeZone](timezone.md): The time zone for the receiver.
- [twoDigitStartDate](twodigitstartdate.md): The earliest date that can be denoted by a two-digit year specifier.
- [gregorianStartDate](gregorianstartdate.md): The start date of the Gregorian calendar for the receiver.
