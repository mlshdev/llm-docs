> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/iso8601dateformatter/options/withday](https://developer.apple.com/documentation/foundation/iso8601dateformatter/options/withday)

# withDay (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
static var withDay: ISO8601DateFormatter.Options { get }
```

<a id="Discussion"></a>

## Discussion

The date representation includes the day. The format for day is inferred based on provided options:

- If [withMonth](withmonth.md) is specified, `dd` is used.
- If [withWeekOfYear](withweekofyear.md) is specified, `ee` is used.
- Otherwise, `DDD` is used.

## See Also

### Constants

- [withYear](withyear.md)
- [withMonth](withmonth.md)
- [withWeekOfYear](withweekofyear.md)
- [withTime](withtime.md)
- [withTimeZone](withtimezone.md)
- [withSpaceBetweenDateAndTime](withspacebetweendateandtime.md)
- [withDashSeparatorInDate](withdashseparatorindate.md)
- [withColonSeparatorInTime](withcolonseparatorintime.md)
- [withColonSeparatorInTimeZone](withcolonseparatorintimezone.md)
- [withFullDate](withfulldate.md)
- [withFullTime](withfulltime.md)
- [withInternetDateTime](withinternetdatetime.md)

# NSISO8601DateFormatWithDay (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
NSISO8601DateFormatWithDay
```

<a id="Discussion"></a>

## Discussion

The date representation includes the day. The format for day is inferred based on provided options:

- If [NSISO8601DateFormatWithMonth](withmonth.md) is specified, `dd` is used.
- If [NSISO8601DateFormatWithWeekOfYear](withweekofyear.md) is specified, `ee` is used.
- Otherwise, `DDD` is used.

## See Also

### Constants

- [NSISO8601DateFormatWithYear](withyear.md)
- [NSISO8601DateFormatWithMonth](withmonth.md)
- [NSISO8601DateFormatWithWeekOfYear](withweekofyear.md)
- [NSISO8601DateFormatWithTime](withtime.md)
- [NSISO8601DateFormatWithTimeZone](withtimezone.md)
- [NSISO8601DateFormatWithSpaceBetweenDateAndTime](withspacebetweendateandtime.md)
- [NSISO8601DateFormatWithDashSeparatorInDate](withdashseparatorindate.md)
- [NSISO8601DateFormatWithColonSeparatorInTime](withcolonseparatorintime.md)
- [NSISO8601DateFormatWithColonSeparatorInTimeZone](withcolonseparatorintimezone.md)
- [NSISO8601DateFormatWithFullDate](withfulldate.md)
- [NSISO8601DateFormatWithFullTime](withfulltime.md)
- [NSISO8601DateFormatWithInternetDateTime](withinternetdatetime.md)
