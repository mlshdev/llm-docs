> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/includesactualbytecount](https://developer.apple.com/documentation/foundation/bytecountformatter/includesactualbytecount)

# includesActualByteCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether to include the number of bytes after the formatted string.

## Declaration

```swift
var includesActualByteCount: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this value to [true](https://developer.apple.com/documentation/swift/true) causes the byte count to be displayed parenthetically (localized as appropriate), for instance `723 KB (722,842 bytes)`.  This will happen only if needed, that is, the first part is already not showing the exact byte count.

If [includesUnit](includesunit.md) or [includesCount](includescount.md) are [false](https://developer.apple.com/documentation/swift/false), then this setting has no effect.

Default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [isAdaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

# includesActualByteCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether to include the number of bytes after the formatted string.

## Declaration

```objectivec
@property BOOL includesActualByteCount;
```

<a id="Discussion"></a>

## Discussion

Setting this value to [true](https://developer.apple.com/documentation/swift/true) causes the byte count to be displayed parenthetically (localized as appropriate), for instance `723 KB (722,842 bytes)`.  This will happen only if needed, that is, the first part is already not showing the exact byte count.

If [includesUnit](includesunit.md) or [includesCount](includescount.md) are [false](https://developer.apple.com/documentation/swift/false), then this setting has no effect.

Default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [adaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesCount](includescount.md): Determines whether to include the count in the resulting formatted string.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.
