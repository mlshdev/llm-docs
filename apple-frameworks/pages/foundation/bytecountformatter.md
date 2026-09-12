> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter](https://developer.apple.com/documentation/foundation/bytecountformatter)

# ByteCountFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that converts a byte count value into a localized description that is formatted with the appropriate byte modifier (KB, MB, GB and so on).

## Declaration

```swift
class ByteCountFormatter
```

<a id="overview"></a>

## Overview

> **Tip**

>  In Swift, you can use [ByteCountFormatStyle](bytecountformatstyle.md) or [Measurement.FormatStyle.ByteCount](measurement/formatstyle/bytecount.md) rather than [ByteCountFormatter](bytecountformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

## Topics

### Creating Strings from Byte Count

- [string(fromByteCount:countStyle:)](bytecountformatter/string%28frombytecount_countstyle_%29.md): Converts a byte count into the specified string format without creating an `NSNumber` object.
- [string(fromByteCount:)](bytecountformatter/string%28frombytecount_%29.md): Converts a byte count into a string without creating an `NSNumber` object.

### Setting Formatting Styles

- [formattingContext](bytecountformatter/formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](bytecountformatter/countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](bytecountformatter/allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](bytecountformatter/includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [isAdaptive](bytecountformatter/isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](bytecountformatter/allowedunits.md): Specify the units that can be used in the output.
- [includesCount](bytecountformatter/includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](bytecountformatter/includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](bytecountformatter/zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

### Constants

- [ByteCountFormatter.Units](bytecountformatter/units.md): Specifies the units appropriate for the formatter to display. Specifying any units explicitly causes just those units to be used in showing the number.
- [ByteCountFormatter.CountStyle](bytecountformatter/countstyle-swift.enum.md): Specifies display of file or storage byte counts. The display style is platform specific.

### Instance Methods

- [string(for:)](bytecountformatter/string%28for_%29.md): Formats `obj` as a byte count (if `obj` is an `NSNumber`) or specific byte measurement (if `obj` is an `NSMeasurement`) using the receiver’s settings.
- [string(from:)](bytecountformatter/string%28from_%29.md): Formats the value of the given measurement using the receiver’s `countStyle`.

### Type Methods

- [string(from:countStyle:)](bytecountformatter/string%28from_countstyle_%29.md): Formats the value of the given measurement using the given `countStyle`.

## Relationships

### Inherits From

- [Formatter](formatter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# NSByteCountFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that converts a byte count value into a localized description that is formatted with the appropriate byte modifier (KB, MB, GB and so on).

## Declaration

```objectivec
@interface NSByteCountFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

> **Tip**

>  In Swift, you can use [ByteCountFormatStyle](bytecountformatstyle.md) or [Measurement.FormatStyle.ByteCount](measurement/formatstyle/bytecount.md) rather than [NSByteCountFormatter](bytecountformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

## Topics

### Creating Strings from Byte Count

- [stringFromByteCount:countStyle:](bytecountformatter/string%28frombytecount_countstyle_%29.md): Converts a byte count into the specified string format without creating an `NSNumber` object.
- [stringFromByteCount:](bytecountformatter/string%28frombytecount_%29.md): Converts a byte count into a string without creating an `NSNumber` object.

### Setting Formatting Styles

- [formattingContext](bytecountformatter/formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](bytecountformatter/countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](bytecountformatter/allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](bytecountformatter/includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [adaptive](bytecountformatter/isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](bytecountformatter/allowedunits.md): Specify the units that can be used in the output.
- [includesCount](bytecountformatter/includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](bytecountformatter/includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](bytecountformatter/zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

### Constants

- [NSByteCountFormatterUnits](bytecountformatter/units.md): Specifies the units appropriate for the formatter to display. Specifying any units explicitly causes just those units to be used in showing the number.
- [NSByteCountFormatterCountStyle](bytecountformatter/countstyle-swift.enum.md): Specifies display of file or storage byte counts. The display style is platform specific.

### Instance Methods

- [stringForObjectValue:](bytecountformatter/string%28for_%29.md): Formats `obj` as a byte count (if `obj` is an `NSNumber`) or specific byte measurement (if `obj` is an `NSMeasurement`) using the receiver’s settings.
- [stringFromMeasurement:](bytecountformatter/string%28from_%29.md): Formats the value of the given measurement using the receiver’s `countStyle`.

### Type Methods

- [stringFromMeasurement:countStyle:](bytecountformatter/string%28from_countstyle_%29.md): Formats the value of the given measurement using the given `countStyle`.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)
