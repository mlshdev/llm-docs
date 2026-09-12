> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylaterview/currency](https://developer.apple.com/documentation/passkit/pkpaylaterview/currency)

# currency

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS

The ISO-4217 currency code for the country or region of the merchant’s principle place of business.

> Apple Pay Later is deprecated.

## Declaration

```swift
@MainActor @preconcurrency var currency: Locale.Currency { get set }
```

<a id="Discussion"></a>

## Discussion

Use the [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) currency code that represents the location of the merchant’s principal place of business.

## See Also

### Accessing information about the transaction

- [amount](amount-f3gs.md): Deprecated. The decimal value that represents the amount of the customer’s shopping cart or item pricing.
