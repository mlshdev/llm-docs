> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatstyleconfiguration/precision/integerandfractionlength(integerlimits:fractionlimits:)](https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration/precision/integerandfractionlength(integerlimits:fractionlimits:))

# integerAndFractionLength(integerLimits:fractionLimits:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a precision that constrains formatted values to ranges of allowed digits in the integer and fraction parts.

## Declaration

```swift
static func integerAndFractionLength<R1, R2>(integerLimits: R1, fractionLimits: R2) -> NumberFormatStyleConfiguration.Precision where R1 : RangeExpression, R2 : RangeExpression, R1.Bound == Int, R2.Bound == Int
```

## Parameters

- `integerLimits`: A range from the minimum to the maximum number of digits to use when formatting the integer part of a number.
- `fractionLimits`: A range from the minimum to the maximum number of digits to use when formatting the fraction part of a number.

<a id="return-value"></a>

## Return Value

A precision that constrains formatted values to ranges of digits in the integer and fraction parts.

<a id="Discussion"></a>

## Discussion

When using this precision, the formatter rounds values that have more digits than the maximum of the range, as seen in the following example:

```swift
let myNum = 12345.6789.formatted(.number
    .precision(.integerAndFractionLength(integerLimits: 2...,
                                         fractionLimits: 2...3))
    .rounded(rule: .down)) // "12,345.678"
```

## See Also

### Precision configurations

- [significantDigits(\_:)](significantdigits%28__%29-2rp7g.md): Returns a precision that constrains formatted values to a range of significant digits.
- [significantDigits(\_:)](significantdigits%28__%29-9dvpr.md): Returns a precision that constrains formatted values to a given number of significant digits.
- [integerAndFractionLength(integer:fraction:)](integerandfractionlength%28integer_fraction_%29.md): Returns a precision that constrains formatted values a given number of allowed digits in the integer and fraction parts.
- [integerLength(\_:)](integerlength%28__%29-u8ua.md): Returns a precision that constrains formatted values to a range of allowed digits in the integer part.
- [integerLength(\_:)](integerlength%28__%29-1njyz.md): Returns a precision that constrains formatted values to a given number of allowed digits in the integer part.
- [fractionLength(\_:)](fractionlength%28__%29-w6fk.md): Returns a precision that constrains formatted values to a range of allowed digits in the fraction part.
- [fractionLength(\_:)](fractionlength%28__%29-3wkd9.md): Returns a precision that constrains formatted values to a given number of allowed digits in the fraction part.
