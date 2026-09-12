> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/includescount](https://developer.apple.com/documentation/foundation/bytecountformatter/includescount)

# includesCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether to include the count in the resulting formatted string.

## Declaration

```swift
var includesCount: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If set to [true](https://developer.apple.com/documentation/swift/true) and [includesUnit](includesunit.md) is set to [false](https://developer.apple.com/documentation/swift/false), no unit is displayed. For example, a value of 723 KB is formatted as `723`.

You can get the set this property to [true](https://developer.apple.com/documentation/swift/true) and the [includesUnit](includesunit.md) to [true](https://developer.apple.com/documentation/swift/true) individually to get both parts, separately. Note that putting them together yourself via string concatenation may be incorrect for some locales.

The default value is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  Setting this value to [false](https://developer.apple.com/documentation/swift/false) and [allowedUnits](allowedunits.md) to [false](https://developer.apple.com/documentation/swift/false) results in an empty string.

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [isAdaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.

# includesCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether to include the count in the resulting formatted string.

## Declaration

```objectivec
@property BOOL includesCount;
```

<a id="Discussion"></a>

## Discussion

If set to [true](https://developer.apple.com/documentation/swift/true) and [includesUnit](includesunit.md) is set to [false](https://developer.apple.com/documentation/swift/false), no unit is displayed. For example, a value of 723 KB is formatted as `723`.

You can get the set this property to [true](https://developer.apple.com/documentation/swift/true) and the [includesUnit](includesunit.md) to [true](https://developer.apple.com/documentation/swift/true) individually to get both parts, separately. Note that putting them together yourself via string concatenation may be incorrect for some locales.

The default value is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  Setting this value to [false](https://developer.apple.com/documentation/swift/false) and [allowedUnits](allowedunits.md) to [false](https://developer.apple.com/documentation/swift/false) results in an empty string.

## See Also

### Setting Formatting Styles

- [formattingContext](formattingcontext.md): Specify the formatting context for the formatted string.
- [countStyle](countstyle-swift.property.md): Specify the number of bytes to be used for kilobytes.
- [allowsNonnumericFormatting](allowsnonnumericformatting.md): Determines whether to allow more natural display of some values.
- [includesActualByteCount](includesactualbytecount.md): Determines whether to include the number of bytes after the formatted string.
- [adaptive](isadaptive.md): Determines the display style of the size representation.
- [allowedUnits](allowedunits.md): Specify the units that can be used in the output.
- [includesUnit](includesunit.md): Determines whether to include the units in the resulting formatted string.
- [zeroPadsFractionDigits](zeropadsfractiondigits.md): Determines whether to zero pad fraction digits so a consistent number of characters is displayed in a representation.
