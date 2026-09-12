> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatstyleconfiguration/precision/integerlength(_:)-1njyz](https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration/precision/integerlength(_:)-1njyz)

# integerLength(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a precision that constrains formatted values to a given number of allowed digits in the integer part.

## Declaration

```swift
static func integerLength(_ length: Int) -> NumberFormatStyleConfiguration.Precision
```

## Parameters

- `length`: The number of digits to use when formatting the integer part of a number.

<a id="return-value"></a>

## Return Value

A precision that constrains formatted values to a given number of allowed digits in the integer part.

## See Also

### Precision configurations

- [significantDigits(\_:)](significantdigits%28__%29-2rp7g.md): Returns a precision that constrains formatted values to a range of significant digits.
- [significantDigits(\_:)](significantdigits%28__%29-9dvpr.md): Returns a precision that constrains formatted values to a given number of significant digits.
- [integerAndFractionLength(integerLimits:fractionLimits:)](integerandfractionlength%28integerlimits_fractionlimits_%29.md): Returns a precision that constrains formatted values to ranges of allowed digits in the integer and fraction parts.
- [integerAndFractionLength(integer:fraction:)](integerandfractionlength%28integer_fraction_%29.md): Returns a precision that constrains formatted values a given number of allowed digits in the integer and fraction parts.
- [integerLength(\_:)](integerlength%28__%29-u8ua.md): Returns a precision that constrains formatted values to a range of allowed digits in the integer part.
- [fractionLength(\_:)](fractionlength%28__%29-w6fk.md): Returns a precision that constrains formatted values to a range of allowed digits in the fraction part.
- [fractionLength(\_:)](fractionlength%28__%29-3wkd9.md): Returns a precision that constrains formatted values to a given number of allowed digits in the fraction part.
