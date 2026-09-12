> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylaterview/initwithamount:currencycode:](https://developer.apple.com/documentation/passkit/pkpaylaterview/initwithamount:currencycode:)

# initWithAmount:currencyCode:

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

Creates a new Apple Pay Later visual merchandising widget view with the amount and currency code you specify.

> Apple Pay Later is deprecated.

## Declaration

```objectivec
- (instancetype) initWithAmount:(NSDecimalNumber *) amount currencyCode:(NSString *) currencyCode;
```

## Parameters

- `amount`: The customer’s shopping cart or item pricing.
- `currencyCode`: The string that represents the [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) currency code for the country or region of the merchant’s principle place of business.
