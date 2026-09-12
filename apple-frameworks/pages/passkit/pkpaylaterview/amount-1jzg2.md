> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylaterview/amount-1jzg2](https://developer.apple.com/documentation/passkit/pkpaylaterview/amount-1jzg2)

# amount

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

The decimal value that represents the amount of the customer’s shopping cart or item pricing.

> Apple Pay Later is deprecated.

## Declaration

```objectivec
@property (nonatomic, copy) NSDecimalNumber * amount;
```

## See Also

### Accessing information about the transaction

- [currencyCode](currencycode.md): Deprecated. A string that represents the ISO-4217 currency code for the country or region of the merchant’s principle place of business.
