> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylater/validate(amount:currency:)](https://developer.apple.com/documentation/passkit/pkpaylater/validate(amount:currency:))

# validate(amount:currency:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS

Checks if the framework can display Apple Pay Later visual merchandising widget information for the given amount and currency.

> Apple Pay Later is deprecated.

## Declaration

```swift
static func validate(amount: Decimal, currency: Locale.Currency) async -> Bool
```

## Parameters

- `amount`: The customer’s cart price or item pricing.
- `currency`: The [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) currency code for the country or region of the merchant’s principle place of business.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the framework can display the requested information; otherwise, [false](https://developer.apple.com/documentation/swift/false).
