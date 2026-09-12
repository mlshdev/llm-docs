> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter/unitsstyle-swift.enum](https://developer.apple.com/documentation/foundation/relativedatetimeformatter/unitsstyle-swift.enum)

# RelativeDateTimeFormatter.UnitsStyle (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that represents the style to use when formatting the units of relative dates.

## Declaration

```swift
enum UnitsStyle
```

## Topics

### Formatting Date and Time Units

- [RelativeDateTimeFormatter.UnitsStyle.abbreviated](unitsstyle-swift.enum/abbreviated.md): A style that uses abbreviated units, such as “2 mo. ago”.
- [RelativeDateTimeFormatter.UnitsStyle.full](unitsstyle-swift.enum/full.md): A style that uses full units, such as “2 months ago”.
- [RelativeDateTimeFormatter.UnitsStyle.short](unitsstyle-swift.enum/short.md): A style that uses shortened units, such as “2 mo. ago”.
- [RelativeDateTimeFormatter.UnitsStyle.spellOut](unitsstyle-swift.enum/spellout.md): A style that spells out units such as “two months ago”.

### Initializers

- [init(rawValue:)](unitsstyle-swift.enum/init%28rawvalue_%29.md)

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
- [RelativeDateTimeFormatter.DateTimeStyle](datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [formattingContext](formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.

# NSRelativeDateTimeFormatterUnitsStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that represents the style to use when formatting the units of relative dates.

## Declaration

```objectivec
enum NSRelativeDateTimeFormatterUnitsStyle : NSInteger;
```

## Topics

### Formatting Date and Time Units

- [NSRelativeDateTimeFormatterUnitsStyleAbbreviated](unitsstyle-swift.enum/abbreviated.md): A style that uses abbreviated units, such as “2 mo. ago”.
- [NSRelativeDateTimeFormatterUnitsStyleFull](unitsstyle-swift.enum/full.md): A style that uses full units, such as “2 months ago”.
- [NSRelativeDateTimeFormatterUnitsStyleShort](unitsstyle-swift.enum/short.md): A style that uses shortened units, such as “2 mo. ago”.
- [NSRelativeDateTimeFormatterUnitsStyleSpellOut](unitsstyle-swift.enum/spellout.md): A style that spells out units such as “two months ago”.

## See Also

### Configuring Formatter Options

- [calendar](calendar.md): The calendar to use for formatting values that don’t have an inherent calendar of their own.
- [locale](locale.md): The locale to use when formatting the date.
- [dateTimeStyle](datetimestyle-swift.property.md): The style to use when describing a relative date, for example “yesterday” or “1 day ago”.
- [NSRelativeDateTimeFormatterStyle](datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [formattingContext](formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.
