> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/iso8601dateformatter/options](https://developer.apple.com/documentation/foundation/iso8601dateformatter/options)

# ISO8601DateFormatter.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options used to generate and parse ISO 8601 date representations.

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [withYear](options/withyear.md)
- [withMonth](options/withmonth.md)
- [withWeekOfYear](options/withweekofyear.md)
- [withDay](options/withday.md)
- [withTime](options/withtime.md)
- [withTimeZone](options/withtimezone.md)
- [withSpaceBetweenDateAndTime](options/withspacebetweendateandtime.md)
- [withDashSeparatorInDate](options/withdashseparatorindate.md)
- [withColonSeparatorInTime](options/withcolonseparatorintime.md)
- [withColonSeparatorInTimeZone](options/withcolonseparatorintimezone.md)
- [withFullDate](options/withfulldate.md)
- [withFullTime](options/withfulltime.md)
- [withInternetDateTime](options/withinternetdatetime.md)

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

### Type Properties

- [withFractionalSeconds](options/withfractionalseconds.md): The date representation uses the colon separator (`:`) in the time zone.

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

# NSISO8601DateFormatOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options used to generate and parse ISO 8601 date representations.

## Declaration

```objectivec
enum NSISO8601DateFormatOptions : NSUInteger;
```

## Topics

### Constants

- [NSISO8601DateFormatWithYear](options/withyear.md)
- [NSISO8601DateFormatWithMonth](options/withmonth.md)
- [NSISO8601DateFormatWithWeekOfYear](options/withweekofyear.md)
- [NSISO8601DateFormatWithDay](options/withday.md)
- [NSISO8601DateFormatWithTime](options/withtime.md)
- [NSISO8601DateFormatWithTimeZone](options/withtimezone.md)
- [NSISO8601DateFormatWithSpaceBetweenDateAndTime](options/withspacebetweendateandtime.md)
- [NSISO8601DateFormatWithDashSeparatorInDate](options/withdashseparatorindate.md)
- [NSISO8601DateFormatWithColonSeparatorInTime](options/withcolonseparatorintime.md)
- [NSISO8601DateFormatWithColonSeparatorInTimeZone](options/withcolonseparatorintimezone.md)
- [NSISO8601DateFormatWithFullDate](options/withfulldate.md)
- [NSISO8601DateFormatWithFullTime](options/withfulltime.md)
- [NSISO8601DateFormatWithInternetDateTime](options/withinternetdatetime.md)

### Enumeration Cases

- [NSISO8601DateFormatWithFractionalSeconds](options/withfractionalseconds.md): The date representation uses the colon separator (`:`) in the time zone.
