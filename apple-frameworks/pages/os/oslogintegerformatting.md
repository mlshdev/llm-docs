> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogintegerformatting](https://developer.apple.com/documentation/os/oslogintegerformatting)

# OSLogIntegerFormatting

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The formatting options for integer values.

## Declaration

```swift
@frozen struct OSLogIntegerFormatting
```

## Mentioned In

- [Generating Log Messages from Your Code](generating-log-messages-from-your-code.md)

<a id="overview"></a>

## Overview

An [OSLogIntegerFormatting](oslogintegerformatting.md) structure encapsulates the formatting details for integer numbers. Use the static [decimal](oslogintegerformatting/decimal.md), [hex](oslogintegerformatting/hex.md), and [octal](oslogintegerformatting/octal.md) structures to apply default formatting to integer values. You can also create new [OSLogIntegerFormatting](oslogintegerformatting.md) structures that customize the rules for handling a leading plus sign, special numerical prefixes, the minimum number of digits, and more.

## Topics

### Getting the Standard Formats

- [decimal](oslogintegerformatting/decimal.md): The standard decimal format option.
- [hex](oslogintegerformatting/hex.md): The standard hexadecimal format option.
- [octal](oslogintegerformatting/octal.md): The standard octal format option.

### Creating a Custom Integer Format

- [decimal(explicitPositiveSign:)](oslogintegerformatting/decimal%28explicitpositivesign_%29.md): Creates a decimal format with custom handling of the numerical sign.
- [decimal(explicitPositiveSign:minDigits:)](oslogintegerformatting/decimal%28explicitpositivesign_mindigits_%29.md): Creates a decimal format with custom handling of the numerical sign and the minimum number of digits.
- [hex(explicitPositiveSign:includePrefix:uppercase:)](oslogintegerformatting/hex%28explicitpositivesign_includeprefix_uppercase_%29.md): Creates a custom hexidecimal format that displays the exact number of digits in the number.
- [hex(explicitPositiveSign:includePrefix:uppercase:minDigits:)](oslogintegerformatting/hex%28explicitpositivesign_includeprefix_uppercase_mindigits_%29.md): Creates a custom hexidecimal format that includes a minimum number of digits.
- [octal(explicitPositiveSign:includePrefix:uppercase:)](oslogintegerformatting/octal%28explicitpositivesign_includeprefix_uppercase_%29.md): Creates a custom octal format that displays the exact number of digits in the number.
- [octal(explicitPositiveSign:includePrefix:uppercase:minDigits:)](oslogintegerformatting/octal%28explicitpositivesign_includeprefix_uppercase_mindigits_%29.md): Creates a custom octal format that includes a minimum number of digits.

## See Also

### Value Formatters

- [OSLogBoolFormat](oslogboolformat.md): The formatting options for Boolean values.
- [OSLogInt32ExtendedFormat](oslogint32extendedformat.md): The formatting options for 32-bit integer values.
- [OSLogFloatFormatting](oslogfloatformatting.md): The formatting options for double and floating-point numbers.
- [OSLogPointerFormat](oslogpointerformat.md): The formatting options for pointer data.
