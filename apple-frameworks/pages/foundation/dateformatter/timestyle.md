> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/timestyle](https://developer.apple.com/documentation/foundation/dateformatter/timestyle)

# timeStyle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time style of the receiver.

## Declaration

```swift
var timeStyle: DateFormatter.Style { get set }
```

## See Also

### Managing Formats and Styles

- [dateStyle](datestyle.md): The date style of the receiver.
- [dateFormat](dateformat.md): The date format string used by the receiver.
- [setLocalizedDateFormatFromTemplate(\_:)](setlocalizeddateformatfromtemplate%28__%29.md): Sets the date format from a template using the specified locale for the receiver.
- [dateFormat(fromTemplate:options:locale:)](dateformat%28fromtemplate_options_locale_%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.
- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a date.

# timeStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time style of the receiver.

## Declaration

```objectivec
@property NSDateFormatterStyle timeStyle;
```

## See Also

### Managing Formats and Styles

- [dateStyle](datestyle.md): The date style of the receiver.
- [dateFormat](dateformat.md): The date format string used by the receiver.
- [setLocalizedDateFormatFromTemplate:](setlocalizeddateformatfromtemplate%28__%29.md): Sets the date format from a template using the specified locale for the receiver.
- [dateFormatFromTemplate:options:locale:](dateformat%28fromtemplate_options_locale_%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.
- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a date.
