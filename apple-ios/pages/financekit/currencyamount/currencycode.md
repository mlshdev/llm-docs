> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/currencyamount/currencycode](https://developer.apple.com/documentation/financekit/currencyamount/currencycode)

# currencyCode

**Framework:** FinanceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The currency of the amount.

## Declaration

```swift
let currencyCode: String
```

<a id="Discussion"></a>

## Discussion

FinanceKit expresses currencies as three character strings. These are usually ISO 4217 compliant, but aren’t guaranteed to be since not all currencies are expressible by the ISO 4217 standard.

## See Also

### Instance Properties

- [amount](amount.md): The numeric value of the amount.
