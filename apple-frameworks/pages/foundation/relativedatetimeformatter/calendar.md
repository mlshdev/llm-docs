> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter/calendar](https://developer.apple.com/documentation/foundation/relativedatetimeformatter/calendar)

# calendar (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The calendar to use for formatting values that don’t have an inherent calendar of their own.

## Declaration

```swift
var calendar: Calendar! { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [autoupdatingCurrent](../nscalendar/autoupdatingcurrent.md). If you set this property to `nil`, the formatter resets to using [autoupdatingCurrent](../nscalendar/autoupdatingcurrent.md).

## See Also

### Configuring Formatter Options

- [locale](locale.md): The locale to use when formatting the date.
- [dateTimeStyle](datetimestyle-swift.property.md): The style to use when describing a relative date, for example “yesterday” or “1 day ago”.
- [RelativeDateTimeFormatter.DateTimeStyle](datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [RelativeDateTimeFormatter.UnitsStyle](unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.
- [formattingContext](formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.

# calendar (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The calendar to use for formatting values that don’t have an inherent calendar of their own.

## Declaration

```objectivec
@property (copy, null_resettable) NSCalendar * calendar;
```

<a id="Discussion"></a>

## Discussion

Defaults to [autoupdatingCurrentCalendar](../nscalendar/autoupdatingcurrent.md). If you set this property to `nil`, the formatter resets to using [autoupdatingCurrentCalendar](../nscalendar/autoupdatingcurrent.md).

## See Also

### Configuring Formatter Options

- [locale](locale.md): The locale to use when formatting the date.
- [dateTimeStyle](datetimestyle-swift.property.md): The style to use when describing a relative date, for example “yesterday” or “1 day ago”.
- [NSRelativeDateTimeFormatterStyle](datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [NSRelativeDateTimeFormatterUnitsStyle](unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.
- [formattingContext](formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.
