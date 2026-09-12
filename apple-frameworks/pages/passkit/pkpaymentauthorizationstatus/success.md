> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationstatus/success](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationstatus/success)

# PKPaymentAuthorizationStatus.success (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Merchant successfully authorized the transaction, or the transaction is expected to succeed.

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Use this value when the transaction is successful and no errors exist on the payment sheet.

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatus.failure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatus.invalidBillingPostalAddress](invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatus.invalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatus.invalidShippingContact](invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatus.pinRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatus.pinIncorrect](pinincorrect.md): Incorrect PIN entered.
- [PKPaymentAuthorizationStatus.pinLockout](pinlockout.md): PIN retry limit exceeded.

# PKPaymentAuthorizationStatusSuccess (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Merchant successfully authorized the transaction, or the transaction is expected to succeed.

## Declaration

```objectivec
PKPaymentAuthorizationStatusSuccess
```

<a id="Discussion"></a>

## Discussion

Use this value when the transaction is successful and no errors exist on the payment sheet.

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatusFailure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatusInvalidBillingPostalAddress](invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatusInvalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatusInvalidShippingContact](invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatusPINRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatusPINIncorrect](pinincorrect.md): Incorrect PIN entered.
- [PKPaymentAuthorizationStatusPINLockout](pinlockout.md): PIN retry limit exceeded.
