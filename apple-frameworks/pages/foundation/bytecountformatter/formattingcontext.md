> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/formattingcontext](https://developer.apple.com/documentation/foundation/bytecountformatter/formattingcontext)

# formattingContext (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specify the formatting context for the formatted string.

## Declaration

```swift
var formattingContext: Formatter.Context { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `NSFormattingContextUnknown`. See [Formatter](../formatter.md) for possible values.

## See Also

### Setting Formatting Styles

- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [isAdaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

# formattingContext (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specify the formatting context for the formatted string.

## Declaration

```objectivec
@property NSFormattingContext formattingContext;
```

<a id="Discussion"></a>

## Discussion

The default value is `NSFormattingContextUnknown`. See [NSFormatter](../formatter.md) for possible values.

## See Also

### Setting Formatting Styles

- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [adaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.
