> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateintervalformatter/datetemplate](https://developer.apple.com/documentation/foundation/dateintervalformatter/datetemplate)

# dateTemplate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The template for formatting one date and time value.

## Declaration

```swift
var dateTemplate: String! { get set }
```

<a id="Discussion"></a>

## Discussion

Use this string to specify a custom fixed format for each of the date and time values. The string you specify is based on the Unicode Technical Standard #35, which uses characters to represent the day, time, year, hour, minute, and other pieces of date or time information.

If you do not assign a value to this string, the formatter object automatically updates the string based on the values in the [dateStyle](datestyle.md) and [timeStyle](timestyle.md) properties.

For information about how to define a custom formatting string, see [Date Formatters](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/Articles/dfDateFormatting10_4.html#//apple_ref/doc/uid/TP40002369) in [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i).

## See Also

### Configuring the Formatter Options

- [dateStyle](datestyle.md): The style to use when formatting day, month, and year information.
- [timeStyle](timestyle.md): The style to use when formatting hour, minute, and second information.
- [calendar](calendar.md): The calendar to use for date values.
- [locale](locale.md): The locale to use when formatting date and time values.
- [timeZone](timezone.md): The time zone with which to specify time values.

# dateTemplate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The template for formatting one date and time value.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * dateTemplate;
```

<a id="Discussion"></a>

## Discussion

Use this string to specify a custom fixed format for each of the date and time values. The string you specify is based on the Unicode Technical Standard #35, which uses characters to represent the day, time, year, hour, minute, and other pieces of date or time information.

If you do not assign a value to this string, the formatter object automatically updates the string based on the values in the [dateStyle](datestyle.md) and [timeStyle](timestyle.md) properties.

For information about how to define a custom formatting string, see [Date Formatters](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/Articles/dfDateFormatting10_4.html#//apple_ref/doc/uid/TP40002369) in [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i).

## See Also

### Configuring the Formatter Options

- [dateStyle](datestyle.md): The style to use when formatting day, month, and year information.
- [timeStyle](timestyle.md): The style to use when formatting hour, minute, and second information.
- [calendar](calendar.md): The calendar to use for date values.
- [locale](locale.md): The locale to use when formatting date and time values.
- [timeZone](timezone.md): The time zone with which to specify time values.
