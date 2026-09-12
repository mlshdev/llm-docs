> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogfloatformatting](https://developer.apple.com/documentation/os/oslogfloatformatting)

# OSLogFloatFormatting

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The formatting options for double and floating-point numbers.

## Declaration

```swift
@frozen struct OSLogFloatFormatting
```

## Mentioned In

- [Generating Log Messages from Your Code](generating-log-messages-from-your-code.md)

<a id="overview"></a>

## Overview

An [OSLogFloatFormatting](oslogfloatformatting.md) structure encapsulates the formatting details for `double` and `float` values. Use the static [fixed](oslogfloatformatting/fixed.md), [hex](oslogfloatformatting/hex.md), [exponential](oslogfloatformatting/exponential.md), and [hybrid](oslogfloatformatting/hybrid.md) structures to apply default formatting for floating-point values. You can also create new [OSLogFloatFormatting](oslogfloatformatting.md) structures that customize the rules for handling a leading plus sign, precision information, and more.

## Topics

### Getting the Standard Formats

- [fixed](oslogfloatformatting/fixed.md): The standard fixed-point format option.
- [hex](oslogfloatformatting/hex.md): The standard hexadecimal format for floating-point values.
- [exponential](oslogfloatformatting/exponential.md): The standard exponential format option.
- [hybrid](oslogfloatformatting/hybrid.md): A hybrid option that changes the format according to the size of the number.

### Creating a Custom Formatting Object

- [exponential(explicitPositiveSign:uppercase:)](oslogfloatformatting/exponential%28explicitpositivesign_uppercase_%29.md): Creates a custom exponential format with a system-determined precision value.
- [exponential(precision:explicitPositiveSign:uppercase:)](oslogfloatformatting/exponential%28precision_explicitpositivesign_uppercase_%29.md): Creates a custom exponential format with the specified precision value.
- [fixed(explicitPositiveSign:uppercase:)](oslogfloatformatting/fixed%28explicitpositivesign_uppercase_%29.md): Creates a custom fixed-point format with a system-determined precision value.
- [fixed(precision:explicitPositiveSign:uppercase:)](oslogfloatformatting/fixed%28precision_explicitpositivesign_uppercase_%29.md): Creates a custom fixed-point format with the specified precision value.
- [hex(explicitPositiveSign:uppercase:)](oslogfloatformatting/hex%28explicitpositivesign_uppercase_%29.md): Creates a custom hexadecimal format.
- [hybrid(explicitPositiveSign:uppercase:)](oslogfloatformatting/hybrid%28explicitpositivesign_uppercase_%29.md): Creates a custom hybrid format with a system-determined precision value.
- [hybrid(precision:explicitPositiveSign:uppercase:)](oslogfloatformatting/hybrid%28precision_explicitpositivesign_uppercase_%29.md): Creates a custom hybrid format with the precision value.

## See Also

### Value Formatters

- [OSLogBoolFormat](oslogboolformat.md): The formatting options for Boolean values.
- [OSLogIntegerFormatting](oslogintegerformatting.md): The formatting options for integer values.
- [OSLogInt32ExtendedFormat](oslogint32extendedformat.md): The formatting options for 32-bit integer values.
- [OSLogPointerFormat](oslogpointerformat.md): The formatting options for pointer data.
