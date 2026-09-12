> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylaterview/amount-f3gs](https://developer.apple.com/documentation/passkit/pkpaylaterview/amount-f3gs)

# amount

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS

The decimal value that represents the amount of the customer’s shopping cart or item pricing.

> Apple Pay Later is deprecated.

## Declaration

```swift
@MainActor @preconcurrency var amount: Decimal { get set }
```

## See Also

### Accessing information about the transaction

- [currency](currency.md): Deprecated. The ISO-4217 currency code for the country or region of the merchant’s principle place of business.
