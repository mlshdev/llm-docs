> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformatter](https://developer.apple.com/documentation/corefoundation/cfdateformatter)

# CFDateFormatter (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFDateFormatter
```

<a id="Overview"></a>

## Overview

CFDateFormatter objects format the textual representations of CFDate and CFAbsoluteTime objects, and convert textual representations of dates and times into CFDate and CFAbsoluteTime objects. You can express the representation of dates and times very flexibly, for example “Thu 22 Dec 1994” is just as acceptable as “12/22/94.” You specify how strings are formatted and parsed by setting a format string and other properties of a CFDateFomatter object.

The format of the format string itself is defined by Unicode Technical Standard #35; the version of the standard used varies with release of the operating system, and is described in [Introduction to Data Formatting Programming Guide For Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029).

> **Note**

>  CFDateFormatter is not thread safe, so you must not mutate a given date formatter simultaneously from multiple threads.

## Topics

### Creating a Date Formatter

- [CFDateFormatterCreate(\_:\_:\_:\_:)](cfdateformattercreate%28________%29.md): Creates a new CFDateFormatter object, localized to the given locale, which will format dates to the given date and time styles.

### Configuring a Date Formatter

- [CFDateFormatterSetFormat(\_:\_:)](cfdateformattersetformat%28____%29.md): Sets the format string of the given date formatter to the specified value.
- [CFDateFormatterSetProperty(\_:\_:\_:)](cfdateformattersetproperty%28______%29.md): Sets a date formatter property using a key-value pair.

### Parsing Strings

- [CFDateFormatterCreateDateFromString(\_:\_:\_:\_:)](cfdateformattercreatedatefromstring%28________%29.md): Returns a date object representing a given string.
- [CFDateFormatterGetAbsoluteTimeFromString(\_:\_:\_:\_:)](cfdateformattergetabsolutetimefromstring%28________%29.md): Returns an absolute time object representing a given string.

### Creating Strings From Data

- [CFDateFormatterCreateStringWithAbsoluteTime(\_:\_:\_:)](cfdateformattercreatestringwithabsolutetime%28______%29.md): Returns a string representation of the given absolute time using the specified date formatter.
- [CFDateFormatterCreateStringWithDate(\_:\_:\_:)](cfdateformattercreatestringwithdate%28______%29.md): Returns a string representation of the given date using the specified date formatter.
- [CFDateFormatterCreateDateFormatFromTemplate(\_:\_:\_:\_:)](cfdateformattercreatedateformatfromtemplate%28________%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty(\_:\_:)](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetDateStyle(\_:)](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetFormat(\_:)](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetLocale(\_:)](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.
- [CFDateFormatterGetTimeStyle(\_:)](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.

### Getting the CFDateFormatter Type ID

- [CFDateFormatterGetTypeID()](cfdateformattergettypeid%28%29.md): Returns the type identifier for CFDateFormatter.

### Data Types

- [CFDateFormatterStyle](cfdateformatterstyle.md): Data type for predefined date and time format styles.

### Constants

- [Date Formatter Styles](date_formatter_styles.md): Predefined date and time format styles.
- [Date Formatter Property Keys](date-formatter-property-keys.md): Keys used in key-value pairs to discover and specify the value of date formatter properties—used in conjunction with [CFDateFormatterCopyProperty(\_:\_:)](cfdateformattercopyproperty%28____%29.md) and [CFDateFormatterSetProperty(\_:\_:\_:)](cfdateformattersetproperty%28______%29.md).
- [Calendar Names](calendar-names.md): Calendar names used by CFDateFormatter.

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
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)
- [CFFileDescriptor](cffiledescriptor.md)

# CFDateFormatterRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFDateFormatter * CFDateFormatterRef;
```

<a id="Overview"></a>

## Overview

CFDateFormatter objects format the textual representations of CFDate and CFAbsoluteTime objects, and convert textual representations of dates and times into CFDate and CFAbsoluteTime objects. You can express the representation of dates and times very flexibly, for example “Thu 22 Dec 1994” is just as acceptable as “12/22/94.” You specify how strings are formatted and parsed by setting a format string and other properties of a CFDateFomatter object.

The format of the format string itself is defined by Unicode Technical Standard #35; the version of the standard used varies with release of the operating system, and is described in [Introduction to Data Formatting Programming Guide For Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029).

> **Note**

>  CFDateFormatter is not thread safe, so you must not mutate a given date formatter simultaneously from multiple threads.

## Topics

### Creating a Date Formatter

- [CFDateFormatterCreate](cfdateformattercreate%28________%29.md): Creates a new CFDateFormatter object, localized to the given locale, which will format dates to the given date and time styles.

### Configuring a Date Formatter

- [CFDateFormatterSetFormat](cfdateformattersetformat%28____%29.md): Sets the format string of the given date formatter to the specified value.
- [CFDateFormatterSetProperty](cfdateformattersetproperty%28______%29.md): Sets a date formatter property using a key-value pair.

### Parsing Strings

- [CFDateFormatterCreateDateFromString](cfdateformattercreatedatefromstring%28________%29.md): Returns a date object representing a given string.
- [CFDateFormatterGetAbsoluteTimeFromString](cfdateformattergetabsolutetimefromstring%28________%29.md): Returns an absolute time object representing a given string.

### Creating Strings From Data

- [CFDateFormatterCreateStringWithAbsoluteTime](cfdateformattercreatestringwithabsolutetime%28______%29.md): Returns a string representation of the given absolute time using the specified date formatter.
- [CFDateFormatterCreateStringWithDate](cfdateformattercreatestringwithdate%28______%29.md): Returns a string representation of the given date using the specified date formatter.
- [CFDateFormatterCreateDateFormatFromTemplate](cfdateformattercreatedateformatfromtemplate%28________%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetDateStyle](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetFormat](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetLocale](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.
- [CFDateFormatterGetTimeStyle](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.

### Getting the CFDateFormatter Type ID

- [CFDateFormatterGetTypeID](cfdateformattergettypeid%28%29.md): Returns the type identifier for CFDateFormatter.

### Data Types

- [CFDateFormatterStyle](cfdateformatterstyle.md): Data type for predefined date and time format styles.

### Constants

- [Date Formatter Styles](date_formatter_styles.md): Predefined date and time format styles.
- [Date Formatter Property Keys](date-formatter-property-keys.md): Keys used in key-value pairs to discover and specify the value of date formatter properties—used in conjunction with [CFDateFormatterCopyProperty](cfdateformattercopyproperty%28____%29.md) and [CFDateFormatterSetProperty](cfdateformattersetproperty%28______%29.md).
- [Calendar Names](calendar-names.md): Calendar names used by CFDateFormatter.

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
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
- [CFFileDescriptorRef](cffiledescriptor.md)
