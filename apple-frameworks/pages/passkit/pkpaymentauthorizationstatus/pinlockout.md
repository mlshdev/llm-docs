> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationstatus/pinlockout](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationstatus/pinlockout)

# PKPaymentAuthorizationStatus.pinLockout (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

PIN retry limit exceeded.

## Declaration

```swift
case pinLockout
```

<a id="Discussion"></a>

## Discussion

Pass this constant to the completion block when the bank informs you that the user has exceeded the allowed number of attempts to enter their PIN.

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatus.success](success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatus.failure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatus.invalidBillingPostalAddress](invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatus.invalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatus.invalidShippingContact](invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatus.pinRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatus.pinIncorrect](pinincorrect.md): Incorrect PIN entered.

# PKPaymentAuthorizationStatusPINLockout (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

PIN retry limit exceeded.

## Declaration

```objectivec
PKPaymentAuthorizationStatusPINLockout
```

<a id="Discussion"></a>

## Discussion

Pass this constant to the completion block when the bank informs you that the user has exceeded the allowed number of attempts to enter their PIN.

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatusSuccess](success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatusFailure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatusInvalidBillingPostalAddress](invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatusInvalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatusInvalidShippingContact](invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatusPINRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatusPINIncorrect](pinincorrect.md): Incorrect PIN entered.
