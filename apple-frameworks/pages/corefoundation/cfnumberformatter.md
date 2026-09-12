> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformatter](https://developer.apple.com/documentation/corefoundation/cfnumberformatter)

# CFNumberFormatter (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFNumberFormatter
```

<a id="Overview"></a>

## Overview

CFNumberFormatter objects format the textual representations of CFNumber objects, and convert textual representations of numbers into CFNumber objects. The representation encompasses integers, floats, and doubles; floats and doubles can be formatted to a specified decimal position. You specify how strings are formatted and parsed by setting a format string and other properties of a CFNumberFormatter object.

The format of the format string is defined by Unicode Technical Standard #35; the version of the standard used varies with release of the operating system, and is described in [Introduction to Data Formatting Programming Guide For Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029).

> **Important**

>  `CFNumberFormatter` is not thread-safe.  Do not use a single instance from multiple threads.

Unlike some other Core Foundation opaque types with names similar to a corresponding Cocoa Foundation class (such as CFString and `NSString`), CFNumberFormatter objects cannot be cast (“toll-free bridged”) to `NSNumberFormatter` objects.

## Topics

### Creating a Number Formatter

- [CFNumberFormatterCreate(\_:\_:\_:)](cfnumberformattercreate%28______%29.md): Creates a new CFNumberFormatter object, localized to the given locale, which will format numbers to the given style.

### Configuring a Number Formatter

- [CFNumberFormatterSetFormat(\_:\_:)](cfnumberformattersetformat%28____%29.md): Sets the format string of a number formatter.
- [CFNumberFormatterSetProperty(\_:\_:\_:)](cfnumberformattersetproperty%28______%29.md): Sets a number formatter property using a key-value pair.

### Formatting Values

- [CFNumberFormatterCreateNumberFromString(\_:\_:\_:\_:\_:)](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithNumber(\_:\_:\_:)](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterCreateStringWithValue(\_:\_:\_:\_:)](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode(\_:\_:\_:)](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.
- [CFNumberFormatterGetValueFromString(\_:\_:\_:\_:\_:)](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.

### Examining a Number Formatter

- [CFNumberFormatterCopyProperty(\_:\_:)](cfnumberformattercopyproperty%28____%29.md): Returns a copy of a number formatter’s value for a given key.
- [CFNumberFormatterGetFormat(\_:)](cfnumberformattergetformat%28__%29.md): Returns a format string for the given number formatter object.
- [CFNumberFormatterGetLocale(\_:)](cfnumberformattergetlocale%28__%29.md): Returns the locale object used to create the given number formatter object.
- [CFNumberFormatterGetStyle(\_:)](cfnumberformattergetstyle%28__%29.md): Returns the number style used to create the given number formatter object.

### Getting the CFNumberFormatter Type ID

- [CFNumberFormatterGetTypeID()](cfnumberformattergettypeid%28%29.md): Returns the type identifier for the `CFNumberFormatter` opaque type.

### Data Types

- [CFNumberFormatterStyle](cfnumberformatterstyle.md): Type for constants specifying a formatter style.
- [CFNumberFormatterOptionFlags](cfnumberformatteroptionflags.md): Type for constants specifying how numbers should be parsed.
- [CFNumberFormatterPadPosition](cfnumberformatterpadposition.md): Type for constants specifying how numbers should be padded.

### Constants

- [Number Formatter Styles](number-formatter-styles.md): Predefined number format styles.
- [Number Formatter Property Keys](number-formatter-property-keys.md): The keys used in key-value pairs to specify the value of number formatter properties.
- [Number Format Options](number_format_options.md): These constants are used to specify how numbers should be parsed.
- [CFNumberFormatterRoundingMode](cfnumberformatterroundingmode.md): These constants are used to specify how numbers should be rounded.
- [Padding Positions](padding-positions.md): These constants are used to specify how numbers should be padded.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Data Formatting Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/CFDataFormatting.html#//apple_ref/doc/uid/10000176i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFNumberFormatterRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFNumberFormatter * CFNumberFormatterRef;
```

<a id="Overview"></a>

## Overview

CFNumberFormatter objects format the textual representations of CFNumber objects, and convert textual representations of numbers into CFNumber objects. The representation encompasses integers, floats, and doubles; floats and doubles can be formatted to a specified decimal position. You specify how strings are formatted and parsed by setting a format string and other properties of a CFNumberFormatter object.

The format of the format string is defined by Unicode Technical Standard #35; the version of the standard used varies with release of the operating system, and is described in [Introduction to Data Formatting Programming Guide For Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029).

> **Important**

>  `CFNumberFormatter` is not thread-safe.  Do not use a single instance from multiple threads.

Unlike some other Core Foundation opaque types with names similar to a corresponding Cocoa Foundation class (such as CFString and `NSString`), CFNumberFormatter objects cannot be cast (“toll-free bridged”) to `NSNumberFormatter` objects.

## Topics

### Creating a Number Formatter

- [CFNumberFormatterCreate](cfnumberformattercreate%28______%29.md): Creates a new CFNumberFormatter object, localized to the given locale, which will format numbers to the given style.

### Configuring a Number Formatter

- [CFNumberFormatterSetFormat](cfnumberformattersetformat%28____%29.md): Sets the format string of a number formatter.
- [CFNumberFormatterSetProperty](cfnumberformattersetproperty%28______%29.md): Sets a number formatter property using a key-value pair.

### Formatting Values

- [CFNumberFormatterCreateNumberFromString](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithNumber](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterCreateStringWithValue](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.
- [CFNumberFormatterGetValueFromString](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.

### Examining a Number Formatter

- [CFNumberFormatterCopyProperty](cfnumberformattercopyproperty%28____%29.md): Returns a copy of a number formatter’s value for a given key.
- [CFNumberFormatterGetFormat](cfnumberformattergetformat%28__%29.md): Returns a format string for the given number formatter object.
- [CFNumberFormatterGetLocale](cfnumberformattergetlocale%28__%29.md): Returns the locale object used to create the given number formatter object.
- [CFNumberFormatterGetStyle](cfnumberformattergetstyle%28__%29.md): Returns the number style used to create the given number formatter object.

### Getting the CFNumberFormatter Type ID

- [CFNumberFormatterGetTypeID](cfnumberformattergettypeid%28%29.md): Returns the type identifier for the `CFNumberFormatter` opaque type.

### Data Types

- [CFNumberFormatterStyle](cfnumberformatterstyle.md): Type for constants specifying a formatter style.
- [CFNumberFormatterOptionFlags](cfnumberformatteroptionflags.md): Type for constants specifying how numbers should be parsed.
- [CFNumberFormatterPadPosition](cfnumberformatterpadposition.md): Type for constants specifying how numbers should be padded.

### Constants

- [Number Formatter Styles](number-formatter-styles.md): Predefined number format styles.
- [Number Formatter Property Keys](number-formatter-property-keys.md): The keys used in key-value pairs to specify the value of number formatter properties.
- [Number Format Options](number_format_options.md): These constants are used to specify how numbers should be parsed.
- [CFNumberFormatterRoundingMode](cfnumberformatterroundingmode.md): These constants are used to specify how numbers should be rounded.
- [Padding Positions](padding-positions.md): These constants are used to specify how numbers should be padded.

## See Also

### Related Documentation

- [Data Formatting Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/CFDataFormatting.html#//apple_ref/doc/uid/10000176i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
