> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/allowsnonnumericformatting](https://developer.apple.com/documentation/foundation/bytecountformatter/allowsnonnumericformatting)

# allowsNonnumericFormatting (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether to allow more natural display of some values.

## Declaration

```swift
var allowsNonnumericFormatting: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Displays a more natural display of some values, such as zero, where it may be displayed as `Zero KB`, ignoring all other flags or options (with the exception of [useBytes](units/usebytes.md), which would generate `Zero bytes`).The result is appropriate for standalone output.

Special handling of certain values such as zero is especially important in some languages, so it’s highly recommended that this property be left in its default state.

Default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [isAdaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

# allowsNonnumericFormatting (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether to allow more natural display of some values.

## Declaration

```objectivec
@property BOOL allowsNonnumericFormatting;
```

<a id="Discussion"></a>

## Discussion

Displays a more natural display of some values, such as zero, where it may be displayed as `Zero KB`, ignoring all other flags or options (with the exception of [NSByteCountFormatterUseBytes](units/usebytes.md), which would generate `Zero bytes`).The result is appropriate for standalone output.

Special handling of certain values such as zero is especially important in some languages, so it’s highly recommended that this property be left in its default state.

Default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [adaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.
