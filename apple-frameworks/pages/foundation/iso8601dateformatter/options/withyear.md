> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/iso8601dateformatter/options/withyear](https://developer.apple.com/documentation/foundation/iso8601dateformatter/options/withyear)

# withYear (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
static var withYear: ISO8601DateFormatter.Options { get }
```

<a id="Discussion"></a>

## Discussion

The date representation includes the year. The format for year is inferred based on the other specified options.

- If [withWeekOfYear](withweekofyear.md) is specified, `YYYY` is used.
- Otherwise, `yyyy` is used.

## See Also

### Constants

- [withMonth](withmonth.md)
- [withWeekOfYear](withweekofyear.md)
- [withDay](withday.md)
- [withTime](withtime.md)
- [withTimeZone](withtimezone.md)
- [withSpaceBetweenDateAndTime](withspacebetweendateandtime.md)
- [withDashSeparatorInDate](withdashseparatorindate.md)
- [withColonSeparatorInTime](withcolonseparatorintime.md)
- [withColonSeparatorInTimeZone](withcolonseparatorintimezone.md)
- [withFullDate](withfulldate.md)
- [withFullTime](withfulltime.md)
- [withInternetDateTime](withinternetdatetime.md)

# NSISO8601DateFormatWithYear (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
NSISO8601DateFormatWithYear
```

<a id="Discussion"></a>

## Discussion

The date representation includes the year. The format for year is inferred based on the other specified options.

- If [NSISO8601DateFormatWithWeekOfYear](withweekofyear.md) is specified, `YYYY` is used.
- Otherwise, `yyyy` is used.

## See Also

### Constants

- [NSISO8601DateFormatWithMonth](withmonth.md)
- [NSISO8601DateFormatWithWeekOfYear](withweekofyear.md)
- [NSISO8601DateFormatWithDay](withday.md)
- [NSISO8601DateFormatWithTime](withtime.md)
- [NSISO8601DateFormatWithTimeZone](withtimezone.md)
- [NSISO8601DateFormatWithSpaceBetweenDateAndTime](withspacebetweendateandtime.md)
- [NSISO8601DateFormatWithDashSeparatorInDate](withdashseparatorindate.md)
- [NSISO8601DateFormatWithColonSeparatorInTime](withcolonseparatorintime.md)
- [NSISO8601DateFormatWithColonSeparatorInTimeZone](withcolonseparatorintimezone.md)
- [NSISO8601DateFormatWithFullDate](withfulldate.md)
- [NSISO8601DateFormatWithFullTime](withfulltime.md)
- [NSISO8601DateFormatWithInternetDateTime](withinternetdatetime.md)
