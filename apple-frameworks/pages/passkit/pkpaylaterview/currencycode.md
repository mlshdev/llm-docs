> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylaterview/currencycode](https://developer.apple.com/documentation/passkit/pkpaylaterview/currencycode)

# currencyCode

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

A string that represents the ISO-4217 currency code for the country or region of the merchant’s principle place of business.

> Apple Pay Later is deprecated.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * currencyCode;
```

<a id="Discussion"></a>

## Discussion

Use the [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) currency code string that represents the location of the merchant’s principal place of business.

## See Also

### Accessing information about the transaction

- [amount](amount-1jzg2.md): Deprecated. The decimal value that represents the amount of the customer’s shopping cart or item pricing.
