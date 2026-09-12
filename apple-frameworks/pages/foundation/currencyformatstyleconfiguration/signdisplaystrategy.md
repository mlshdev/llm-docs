> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/currencyformatstyleconfiguration/signdisplaystrategy](https://developer.apple.com/documentation/foundation/currencyformatstyleconfiguration/signdisplaystrategy)

# CurrencyFormatStyleConfiguration.SignDisplayStrategy

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A structure used to configure sign display strategies for currency format styles.

## Declaration

```swift
struct SignDisplayStrategy
```

## Topics

### Specifying sign display strategy

- [never](signdisplaystrategy/never.md): A strategy to never show the sign.
- [automatic](signdisplaystrategy/automatic.md): A strategy to automatically configure sign display.
- [accounting](signdisplaystrategy/accounting.md): A sign display strategy to use accounting principles.
- [accountingAlways(showZero:)](signdisplaystrategy/accountingalways%28showzero_%29.md): A sign display strategy to use accounting principles, with a configurable behavior for handling zero values.
- [always(showZero:)](signdisplaystrategy/always%28showzero_%29.md): A sign display strategy to always show the sign, with a configurable behavior for handling zero values.

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

- [CurrencyFormatStyleConfiguration.Grouping](grouping.md): The type used to configure grouping for currency format styles.
- [CurrencyFormatStyleConfiguration.Precision](precision.md): The type used to configure precision for currency format styles.
- [CurrencyFormatStyleConfiguration.DecimalSeparatorDisplayStrategy](decimalseparatordisplaystrategy.md): The type used to configure decimal separator display strategies for currency format styles.
- [CurrencyFormatStyleConfiguration.RoundingRule](roundingrule.md): The type used to configure rounding rules for currency format styles.
- [CurrencyFormatStyleConfiguration.Presentation](presentation.md): A structure used to configure the presentation of currency format styles.
