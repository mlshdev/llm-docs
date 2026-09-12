> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatstyleconfiguration/signdisplaystrategy](https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration/signdisplaystrategy)

# NumberFormatStyleConfiguration.SignDisplayStrategy

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A structure that an integer format style uses to configure a sign display strategy.

## Declaration

```swift
struct SignDisplayStrategy
```

## Topics

### Sign display strategies

- [automatic](signdisplaystrategy/automatic.md): A strategy to automatically configure locale-appropriate sign display behavior.
- [always(includingZero:)](signdisplaystrategy/always%28includingzero_%29.md): A strategy to always display sign symbols.
- [never](signdisplaystrategy/never.md): A strategy to never display sign symbols.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
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
- [NumberFormatStyleConfiguration.Precision](precision.md): A structure that an integer format style uses to configure precision.
- [NumberFormatStyleConfiguration.RoundingRule](roundingrule.md): The type used for rounding rule values.
- [NumberFormatStyleConfiguration.Notation](notation.md): A structure that an integer format style uses to configure notation.
