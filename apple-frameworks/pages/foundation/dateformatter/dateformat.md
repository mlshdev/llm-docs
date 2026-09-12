> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/dateformat](https://developer.apple.com/documentation/foundation/dateformatter/dateformat)

# dateFormat (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The date format string used by the receiver.

## Declaration

```swift
var dateFormat: String! { get set }
```

<a id="Discussion"></a>

## Discussion

See [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i) for a list of the conversion specifiers permitted in date format strings.

You should only set this property when working with fixed format representations, as discussed in [Working With Fixed Format Date Representations](../dateformatter.md#Working-With-Fixed-Format-Date-Representations). For user-visible representations, you should use the [dateStyle](datestyle.md) and [timeStyle](timestyle.md) properties, or the [setLocalizedDateFormatFromTemplate(\_:)](setlocalizeddateformatfromtemplate%28__%29.md) method if your desired format cannot be achieved using the predefined styles; both of these properties and this method provide a localized date representation appropriate for display to the user.

## See Also

### Managing Formats and Styles

- [dateStyle](datestyle.md): The date style of the receiver.
- [timeStyle](timestyle.md): The time style of the receiver.
- [setLocalizedDateFormatFromTemplate(\_:)](setlocalizeddateformatfromtemplate%28__%29.md): Sets the date format from a template using the specified locale for the receiver.
- [dateFormat(fromTemplate:options:locale:)](dateformat%28fromtemplate_options_locale_%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.
- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a date.

# dateFormat (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The date format string used by the receiver.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * dateFormat;
```

<a id="Discussion"></a>

## Discussion

See [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i) for a list of the conversion specifiers permitted in date format strings.

You should only set this property when working with fixed format representations, as discussed in [Working With Fixed Format Date Representations](../dateformatter.md#Working-With-Fixed-Format-Date-Representations). For user-visible representations, you should use the [dateStyle](datestyle.md) and [timeStyle](timestyle.md) properties, or the [setLocalizedDateFormatFromTemplate:](setlocalizeddateformatfromtemplate%28__%29.md) method if your desired format cannot be achieved using the predefined styles; both of these properties and this method provide a localized date representation appropriate for display to the user.

## See Also

### Managing Formats and Styles

- [dateStyle](datestyle.md): The date style of the receiver.
- [timeStyle](timestyle.md): The time style of the receiver.
- [setLocalizedDateFormatFromTemplate:](setlocalizeddateformatfromtemplate%28__%29.md): Sets the date format from a template using the specified locale for the receiver.
- [dateFormatFromTemplate:options:locale:](dateformat%28fromtemplate_options_locale_%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.
- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a date.
