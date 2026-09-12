> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/formattingcontext](https://developer.apple.com/documentation/foundation/dateformatter/formattingcontext)

# formattingContext (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The capitalization formatting context used when formatting a date.

## Declaration

```swift
var formattingContext: Formatter.Context { get set }
```

<a id="Discussion"></a>

## Discussion

The formatting context allows the formatter to apply appropriate capitalization depending on how the how the string will be used, and whether the locale makes capitalization distinctions.

## See Also

### Managing Formats and Styles

- [dateStyle](datestyle.md): The date style of the receiver.
- [timeStyle](timestyle.md): The time style of the receiver.
- [dateFormat](dateformat.md): The date format string used by the receiver.
- [setLocalizedDateFormatFromTemplate(\_:)](setlocalizeddateformatfromtemplate%28__%29.md): Sets the date format from a template using the specified locale for the receiver.
- [dateFormat(fromTemplate:options:locale:)](dateformat%28fromtemplate_options_locale_%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.

# formattingContext (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The capitalization formatting context used when formatting a date.

## Declaration

```objectivec
@property NSFormattingContext formattingContext;
```

<a id="Discussion"></a>

## Discussion

The formatting context allows the formatter to apply appropriate capitalization depending on how the how the string will be used, and whether the locale makes capitalization distinctions.

## See Also

### Managing Formats and Styles

- [dateStyle](datestyle.md): The date style of the receiver.
- [timeStyle](timestyle.md): The time style of the receiver.
- [dateFormat](dateformat.md): The date format string used by the receiver.
- [setLocalizedDateFormatFromTemplate:](setlocalizeddateformatfromtemplate%28__%29.md): Sets the date format from a template using the specified locale for the receiver.
- [dateFormatFromTemplate:options:locale:](dateformat%28fromtemplate_options_locale_%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.
