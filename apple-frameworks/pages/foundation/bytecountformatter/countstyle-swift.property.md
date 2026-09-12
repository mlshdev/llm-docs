> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/countstyle-swift.property](https://developer.apple.com/documentation/foundation/bytecountformatter/countstyle-swift.property)

# countStyle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specify the number of bytes to be used for kilobytes.

## Declaration

```swift
var countStyle: ByteCountFormatter.CountStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The default setting is [ByteCountFormatter.CountStyle.file](countstyle-swift.enum/file.md), which is the system specific value for file and storage sizes.

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [isAdaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

# countStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specify the number of bytes to be used for kilobytes.

## Declaration

```objectivec
@property NSByteCountFormatterCountStyle countStyle;
```

<a id="Discussion"></a>

## Discussion

The default setting is [NSByteCountFormatterCountStyleFile](countstyle-swift.enum/file.md), which is the system specific value for file and storage sizes.

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [adaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.
