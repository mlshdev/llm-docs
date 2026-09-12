> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatstyleconfiguration/precision](https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration/precision)

# NumberFormatStyleConfiguration.Precision

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A structure that an integer format style uses to configure precision.

## Declaration

```swift
struct Precision
```

## Topics

### Precision configurations

- [significantDigits(\_:)](precision/significantdigits%28__%29-2rp7g.md): Returns a precision that constrains formatted values to a range of significant digits.
- [significantDigits(\_:)](precision/significantdigits%28__%29-9dvpr.md): Returns a precision that constrains formatted values to a given number of significant digits.
- [integerAndFractionLength(integerLimits:fractionLimits:)](precision/integerandfractionlength%28integerlimits_fractionlimits_%29.md): Returns a precision that constrains formatted values to ranges of allowed digits in the integer and fraction parts.
- [integerAndFractionLength(integer:fraction:)](precision/integerandfractionlength%28integer_fraction_%29.md): Returns a precision that constrains formatted values a given number of allowed digits in the integer and fraction parts.
- [integerLength(\_:)](precision/integerlength%28__%29-u8ua.md): Returns a precision that constrains formatted values to a range of allowed digits in the integer part.
- [integerLength(\_:)](precision/integerlength%28__%29-1njyz.md): Returns a precision that constrains formatted values to a given number of allowed digits in the integer part.
- [fractionLength(\_:)](precision/fractionlength%28__%29-w6fk.md): Returns a precision that constrains formatted values to a range of allowed digits in the fraction part.
- [fractionLength(\_:)](precision/fractionlength%28__%29-3wkd9.md): Returns a precision that constrains formatted values to a given number of allowed digits in the fraction part.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Configuration

- [NumberFormatStyleConfiguration.DecimalSeparatorDisplayStrategy](decimalseparatordisplaystrategy.md): A structure that an integer format style uses to configure a decimal separator display strategy.
- [NumberFormatStyleConfiguration.Grouping](grouping.md): A structure that an integer format style uses to configure grouping.
- [NumberFormatStyleConfiguration.RoundingRule](roundingrule.md): The type used for rounding rule values.
- [NumberFormatStyleConfiguration.SignDisplayStrategy](signdisplaystrategy.md): A structure that an integer format style uses to configure a sign display strategy.
- [NumberFormatStyleConfiguration.Notation](notation.md): A structure that an integer format style uses to configure notation.
