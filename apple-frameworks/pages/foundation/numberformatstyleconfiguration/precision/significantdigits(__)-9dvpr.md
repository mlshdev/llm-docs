> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatstyleconfiguration/precision/significantdigits(_:)-9dvpr](https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration/precision/significantdigits(_:)-9dvpr)

# significantDigits(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a precision that constrains formatted values to a given number of significant digits.

## Declaration

```swift
static func significantDigits(_ digits: Int) -> NumberFormatStyleConfiguration.Precision
```

## Parameters

- `digits`: The maximum number of significant digits to use when formatting values.

<a id="return-value"></a>

## Return Value

A precision that constrains formatted values to a given number of significant digits.

<a id="Discussion"></a>

## Discussion

When using this precision, the formatter rounds values that have more sigificant digits than the maximum of the range, as seen in the following example:

```swift
let myNum = 123456.formatted(.number
    .precision(.significantDigits(4))
    .rounded(rule: .down)) // "123,400"
```

## See Also

### Precision configurations

- [significantDigits(\_:)](significantdigits%28__%29-2rp7g.md): Returns a precision that constrains formatted values to a range of significant digits.
- [integerAndFractionLength(integerLimits:fractionLimits:)](integerandfractionlength%28integerlimits_fractionlimits_%29.md): Returns a precision that constrains formatted values to ranges of allowed digits in the integer and fraction parts.
- [integerAndFractionLength(integer:fraction:)](integerandfractionlength%28integer_fraction_%29.md): Returns a precision that constrains formatted values a given number of allowed digits in the integer and fraction parts.
- [integerLength(\_:)](integerlength%28__%29-u8ua.md): Returns a precision that constrains formatted values to a range of allowed digits in the integer part.
- [integerLength(\_:)](integerlength%28__%29-1njyz.md): Returns a precision that constrains formatted values to a given number of allowed digits in the integer part.
- [fractionLength(\_:)](fractionlength%28__%29-w6fk.md): Returns a precision that constrains formatted values to a range of allowed digits in the fraction part.
- [fractionLength(\_:)](fractionlength%28__%29-3wkd9.md): Returns a precision that constrains formatted values to a given number of allowed digits in the fraction part.
