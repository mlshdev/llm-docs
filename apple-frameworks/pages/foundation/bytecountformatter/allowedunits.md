> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/allowedunits](https://developer.apple.com/documentation/foundation/bytecountformatter/allowedunits)

# allowedUnits (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specify the units that can be used in the output.

## Declaration

```swift
var allowedUnits: ByteCountFormatter.Units { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is [NSByteCountFormatterUseDefault](../nsbytecountformatterunits/nsbytecountformatterusedefault.md), the formatter uses platform-appropriate settings; otherwise will only the specified units are used.

[ByteCountFormatter.Units](units.md) values can be combined using the C `OR` operator to specify complex formatting strings. The [NSByteCountFormatterUseDefault](../nsbytecountformatterunits/nsbytecountformatterusedefault.md) or [useAll](units/useall.md) constants can be used with the C `AND` or the C `NOT` operators to create custom formats as well.

This is the default value if [NSByteCountFormatterUseDefault](../nsbytecountformatterunits/nsbytecountformatterusedefault.md).

> **Note**

>  ZB and YB cannot be covered by the range of possible values, but you can still choose to use these units to get fractional display (`0.0035 ZB` for instance).

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [isAdaptive](isadaptive.md): Determines the display style of the size representation.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

# allowedUnits (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specify the units that can be used in the output.

## Declaration

```objectivec
@property NSByteCountFormatterUnits allowedUnits;
```

<a id="Discussion"></a>

## Discussion

If the value is [NSByteCountFormatterUseDefault](../nsbytecountformatterunits/nsbytecountformatterusedefault.md), the formatter uses platform-appropriate settings; otherwise will only the specified units are used.

[NSByteCountFormatterUnits](units.md) values can be combined using the C `OR` operator to specify complex formatting strings. The [NSByteCountFormatterUseDefault](../nsbytecountformatterunits/nsbytecountformatterusedefault.md) or [NSByteCountFormatterUseAll](units/useall.md) constants can be used with the C `AND` or the C `NOT` operators to create custom formats as well.

This is the default value if [NSByteCountFormatterUseDefault](../nsbytecountformatterunits/nsbytecountformatterusedefault.md).

> **Note**

>  ZB and YB cannot be covered by the range of possible values, but you can still choose to use these units to get fractional display (`0.0035 ZB` for instance).

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [adaptive](isadaptive.md): Determines the display style of the size representation.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.
