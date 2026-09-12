> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/zeropadsfractiondigits](https://developer.apple.com/documentation/foundation/bytecountformatter/zeropadsfractiondigits)

# zeroPadsFractionDigits (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

## Declaration

```swift
var zeroPadsFractionDigits: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Displaying values using  zero pad fraction digits causes a consistent number of fraction digits are displayed, causing updating displays to remain more stable. For instance, if the [isAdaptive](isadaptive.md) algorithm is used, this option formats 1.19 and 1.2 GB as `1.19 GB` and `1.20 GB`, respectively, while without the option the latter would be displayed as `1.2 GB`.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [isAdaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.

# zeroPadsFractionDigits (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

## Declaration

```objectivec
@property BOOL zeroPadsFractionDigits;
```

<a id="Discussion"></a>

## Discussion

Displaying values using  zero pad fraction digits causes a consistent number of fraction digits are displayed, causing updating displays to remain more stable. For instance, if the [adaptive](isadaptive.md) algorithm is used, this option formats 1.19 and 1.2 GB as `1.19 GB` and `1.20 GB`, respectively, while without the option the latter would be displayed as `1.2 GB`.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [adaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
