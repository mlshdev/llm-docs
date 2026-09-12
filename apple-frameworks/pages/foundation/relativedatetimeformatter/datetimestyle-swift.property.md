> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter/datetimestyle-swift.property](https://developer.apple.com/documentation/foundation/relativedatetimeformatter/datetimestyle-swift.property)

# dateTimeStyle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The style to use when describing a relative date, for example “yesterday” or “1 day ago”.

## Declaration

```swift
var dateTimeStyle: RelativeDateTimeFormatter.DateTimeStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Default is `numeric`.

```swift
let components = DateComponents(weekOfMonth: -1)
let formatter = RelativeDateTimeFormatter()
formatter.dateTimeStyle = .numeric
print(formatter.localizedString(from: components))
// Outputs:  1 week ago
```

To display relative dates using named styles, set this property to `named`.

```swift
let components = DateComponents(weekOfMonth: -1)
let formatter = RelativeDateTimeFormatter()
formatter.dateTimeStyle = .named
print(formatter.localizedString(from: components))
// Outputs:  last week
```

## See Also

### Configuring Formatter Options

- [calendar](calendar.md): The calendar to use for formatting values that don’t have an inherent calendar of their own.
- [locale](locale.md): The locale to use when formatting the date.
- [RelativeDateTimeFormatter.DateTimeStyle](datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [RelativeDateTimeFormatter.UnitsStyle](unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.
- [formattingContext](formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.

# dateTimeStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The style to use when describing a relative date, for example “yesterday” or “1 day ago”.

## Declaration

```objectivec
@property NSRelativeDateTimeFormatterStyle dateTimeStyle;
```

<a id="Discussion"></a>

## Discussion

Default is `numeric`.

```swift
let components = DateComponents(weekOfMonth: -1)
let formatter = RelativeDateTimeFormatter()
formatter.dateTimeStyle = .numeric
print(formatter.localizedString(from: components))
// Outputs:  1 week ago
```

To display relative dates using named styles, set this property to `named`.

```swift
let components = DateComponents(weekOfMonth: -1)
let formatter = RelativeDateTimeFormatter()
formatter.dateTimeStyle = .named
print(formatter.localizedString(from: components))
// Outputs:  last week
```

## See Also

### Configuring Formatter Options

- [calendar](calendar.md): The calendar to use for formatting values that don’t have an inherent calendar of their own.
- [locale](locale.md): The locale to use when formatting the date.
- [NSRelativeDateTimeFormatterStyle](datetimestyle-swift.enum.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [NSRelativeDateTimeFormatterUnitsStyle](unitsstyle-swift.enum.md): A type that represents the style to use when formatting the units of relative dates.
- [formattingContext](formattingcontext.md): A description of where the formatted string will appear, allowing the formatter to capitalize the output appropriately.
