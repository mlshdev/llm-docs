> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/moneyamount](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/moneyamount)

# DataDetector.Match.SemanticDetails.MoneyAmount

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A match that the data detector determines represents an amount of money.

## Declaration

```swift
struct MoneyAmount
```

<a id="Discussion"></a>

## Discussion

The framework returns [currency](moneyamount/currency.md) as the match’s currency, though it may be a best guess. The [amount](moneyamount/amount.md) is the amount of money in the specified currency.

## Topics

### Properties that describe elements of the amount

- [amount](moneyamount/amount.md): A value that represents the amount of money in the specified currency.
- [currency](moneyamount/currency.md): A value that represents the currency the data detectors were able to match, though it may be a best guess.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
