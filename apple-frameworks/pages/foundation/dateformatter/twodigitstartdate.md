> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/twodigitstartdate](https://developer.apple.com/documentation/foundation/dateformatter/twodigitstartdate)

# twoDigitStartDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The earliest date that can be denoted by a two-digit year specifier.

## Declaration

```swift
var twoDigitStartDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

If the two-digit start date is set to January 6, 1976, then “January 1, 76” is interpreted as New Year’s Day in 2076, whereas “February 14, 76” is interpreted as Valentine’s Day in 1976.

By default, this property is equal to December 31, 1949.

## See Also

### Managing Attributes

- [calendar](calendar.md): The calendar for the receiver.
- [defaultDate](defaultdate.md): The default date for the receiver.
- [locale](locale.md): The locale for the receiver.
- [timeZone](timezone.md): The time zone for the receiver.
- [gregorianStartDate](gregorianstartdate.md): The start date of the Gregorian calendar for the receiver.

# twoDigitStartDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The earliest date that can be denoted by a two-digit year specifier.

## Declaration

```objectivec
@property (copy, nullable) NSDate * twoDigitStartDate;
```

<a id="Discussion"></a>

## Discussion

If the two-digit start date is set to January 6, 1976, then “January 1, 76” is interpreted as New Year’s Day in 2076, whereas “February 14, 76” is interpreted as Valentine’s Day in 1976.

By default, this property is equal to December 31, 1949.

## See Also

### Managing Attributes

- [calendar](calendar.md): The calendar for the receiver.
- [defaultDate](defaultdate.md): The default date for the receiver.
- [locale](locale.md): The locale for the receiver.
- [timeZone](timezone.md): The time zone for the receiver.
- [gregorianStartDate](gregorianstartdate.md): The start date of the Gregorian calendar for the receiver.
