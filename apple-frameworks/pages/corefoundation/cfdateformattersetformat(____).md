> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattersetformat(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattersetformat(_:_:))

# CFDateFormatterSetFormat(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the format string of the given date formatter to the specified value.

## Declaration

```swift
func CFDateFormatterSetFormat(_ formatter: CFDateFormatter!, _ formatString: CFString!)
```

## Parameters

- `formatter`: The date formatter to modify.
- `formatString`: The format string for `formatter`. The syntax of this string is defined by [Unicode Technical Standard #35](http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns)..

<a id="Discussion"></a>

## Discussion

The format string may override other properties previously set using other functions. If this function is not called, the default value of the format string is derived from the date formatter’s date and time styles.

## See Also

### Configuring a Date Formatter

- [CFDateFormatterSetProperty(\_:\_:\_:)](cfdateformattersetproperty%28______%29.md): Sets a date formatter property using a key-value pair.

# CFDateFormatterSetFormat (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the format string of the given date formatter to the specified value.

## Declaration

```objectivec
extern void CFDateFormatterSetFormat(CFDateFormatterRef formatter, CFStringRef formatString);
```

## Parameters

- `formatter`: The date formatter to modify.
- `formatString`: The format string for `formatter`. The syntax of this string is defined by [Unicode Technical Standard #35](http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns)..

<a id="Discussion"></a>

## Discussion

The format string may override other properties previously set using other functions. If this function is not called, the default value of the format string is derived from the date formatter’s date and time styles.

## See Also

### Configuring a Date Formatter

- [CFDateFormatterSetProperty](cfdateformattersetproperty%28______%29.md): Sets a date formatter property using a key-value pair.
