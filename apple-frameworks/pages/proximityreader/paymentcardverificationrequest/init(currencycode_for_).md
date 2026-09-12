> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardverificationrequest/init(currencycode:for:)](https://developer.apple.com/documentation/proximityreader/paymentcardverificationrequest/init(currencycode:for:))

# init(currencyCode:for:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

Creates a new verification request using the specified currency and reason information.

## Declaration

```swift
init(currencyCode: String, for reason: PaymentCardVerificationRequest.Reason = .other)
```

## Parameters

- `currencyCode`: The ISO 4217 code for the requested currency type. Specify the currency you intend to verify. If you specify an empty string, the system throws [PaymentCardReaderSession.ReadError.invalidCurrencyCode](../paymentcardreadersession/readerror/invalidcurrencycode.md).
- `reason`: The reason for the verification request. Based on the reason you select, the system displays an appropriate message in the system UI to inform the user about the purpose of the verification process.
