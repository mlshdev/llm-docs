> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter/formattingcontext](https://developer.apple.com/documentation/foundation/relativedatetimeformatter/formattingcontext)

# formattingContext (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.

## Declaration

```swift
var formattingContext: Formatter.Context { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [Formatter.Context.unknown](../formatter/context/unknown.md). For additional details about specifying contexts, see [Formatter.Context](../formatter/context.md).

## See Also

### Configuring Formatter Options

- [calendar](calendar.md): The calendar to use for formatting values that don’t have an inherent calendar of their own.
- [locale](locale.md): The locale to use when formatting the date.
- [dateTimeStyle](datetimestyle-swift.property.md): The style to use when describing a relative date, for example “yesterday” or “1 day ago”.
- [RelativeDateTimeFormatter.DateTimeStyle](datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [RelativeDateTimeFormatter.UnitsStyle](unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.

# formattingContext (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.

## Declaration

```objectivec
@property NSFormattingContext formattingContext;
```

<a id="Discussion"></a>

## Discussion

The default value is [NSFormattingContextUnknown](../formatter/context/unknown.md). For additional details about specifying contexts, see [NSFormattingContext](../formatter/context.md).

## See Also

### Configuring Formatter Options

- [calendar](calendar.md): The calendar to use for formatting values that don’t have an inherent calendar of their own.
- [locale](locale.md): The locale to use when formatting the date.
- [dateTimeStyle](datetimestyle-swift.property.md): The style to use when describing a relative date, for example “yesterday” or “1 day ago”.
- [NSRelativeDateTimeFormatterStyle](datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [NSRelativeDateTimeFormatterUnitsStyle](unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.
