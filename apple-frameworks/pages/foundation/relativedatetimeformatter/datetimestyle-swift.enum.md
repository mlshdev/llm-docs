> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter/datetimestyle-swift.enum](https://developer.apple.com/documentation/foundation/relativedatetimeformatter/datetimestyle-swift.enum)

# RelativeDateTimeFormatter.DateTimeStyle (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.

## Declaration

```swift
enum DateTimeStyle
```

## Topics

### Formatting Dates and Times

- [RelativeDateTimeFormatter.DateTimeStyle.named](datetimestyle-swift.enum/named.md): A style that uses named styles to describe relative dates, such as “yesterday”, “last week”, or “next week”.
- [RelativeDateTimeFormatter.DateTimeStyle.numeric](datetimestyle-swift.enum/numeric.md): A style that uses a numeric style to describe relative dates, such as “1 day ago” or “in 3 weeks”.

### Initializers

- [init(rawValue:)](datetimestyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Formatter Options

- [calendar](calendar.md): The calendar to use for formatting values that don’t have an inherent calendar of their own.
- [locale](locale.md): The locale to use when formatting the date.
- [dateTimeStyle](datetimestyle-swift.property.md): The style to use when describing a relative date, for example “yesterday” or “1 day ago”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [RelativeDateTimeFormatter.UnitsStyle](unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.
- [formattingContext](formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.

# NSRelativeDateTimeFormatterStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.

## Declaration

```objectivec
enum NSRelativeDateTimeFormatterStyle : NSInteger;
```

## Topics

### Formatting Dates and Times

- [NSRelativeDateTimeFormatterStyleNamed](datetimestyle-swift.enum/named.md): A style that uses named styles to describe relative dates, such as “yesterday”, “last week”, or “next week”.
- [NSRelativeDateTimeFormatterStyleNumeric](datetimestyle-swift.enum/numeric.md): A style that uses a numeric style to describe relative dates, such as “1 day ago” or “in 3 weeks”.

## See Also

### Configuring Formatter Options

- [calendar](calendar.md): The calendar to use for formatting values that don’t have an inherent calendar of their own.
- [locale](locale.md): The locale to use when formatting the date.
- [dateTimeStyle](datetimestyle-swift.property.md): The style to use when describing a relative date, for example “yesterday” or “1 day ago”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [NSRelativeDateTimeFormatterUnitsStyle](unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.
- [formattingContext](formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.
