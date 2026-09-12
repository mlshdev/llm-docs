> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/description](https://developer.apple.com/documentation/foundation/nsdate/description)

# description (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string representation of the date object.

## Declaration

```swift
var description: String { get }
```

<a id="Discussion"></a>

## Discussion

The representation is useful for debugging only.

There are a number of options to acquire a formatted string for a date including: date formatters (see [DateFormatter](../dateformatter.md) and [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)), and the `NSDate` methods [description(with:)](description%28with_%29.md), [date(withCalendarFormat:timeZone:)](date%28withcalendarformat_timezone_%29.md), and [description(withCalendarFormat:timeZone:locale:)](description%28withcalendarformat_timezone_locale_%29.md)

## See Also

### Related Documentation

- [description(withCalendarFormat:timeZone:locale:)](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.
- [date(withCalendarFormat:timeZone:)](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.

### Describing Dates

- [description(with:)](description%28with_%29.md): Returns a string representation of the date using the given locale.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for this object.

# description (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string representation of the date object.

## Declaration

```objectivec
@property (copy, readonly) NSString * description;
```

<a id="Discussion"></a>

## Discussion

The representation is useful for debugging only.

There are a number of options to acquire a formatted string for a date including: date formatters (see [NSDateFormatter](../dateformatter.md) and [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)), and the `NSDate` methods [descriptionWithLocale:](description%28with_%29.md), [dateWithCalendarFormat:timeZone:](date%28withcalendarformat_timezone_%29.md), and [descriptionWithCalendarFormat:timeZone:locale:](description%28withcalendarformat_timezone_locale_%29.md)

## See Also

### Related Documentation

- [descriptionWithCalendarFormat:timeZone:locale:](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.
- [dateWithCalendarFormat:timeZone:](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.

### Describing Dates

- [descriptionWithLocale:](description%28with_%29.md): Returns a string representation of the date using the given locale.
