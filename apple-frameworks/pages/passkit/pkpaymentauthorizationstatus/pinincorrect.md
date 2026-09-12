> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationstatus/pinincorrect](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationstatus/pinincorrect)

# PKPaymentAuthorizationStatus.pinIncorrect (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Incorrect PIN entered.

## Declaration

```swift
case pinIncorrect
```

<a id="Discussion"></a>

## Discussion

Pass this constant to the completion block when the payment token includes an invalid PIN number. Apple Pay automatically prompts the user to reenter their PIN.

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatus.success](success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatus.failure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatus.invalidBillingPostalAddress](invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatus.invalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatus.invalidShippingContact](invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatus.pinRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatus.pinLockout](pinlockout.md): PIN retry limit exceeded.

# PKPaymentAuthorizationStatusPINIncorrect (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Incorrect PIN entered.

## Declaration

```objectivec
PKPaymentAuthorizationStatusPINIncorrect
```

<a id="Discussion"></a>

## Discussion

Pass this constant to the completion block when the payment token includes an invalid PIN number. Apple Pay automatically prompts the user to reenter their PIN.

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatusSuccess](success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatusFailure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatusInvalidBillingPostalAddress](invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatusInvalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatusInvalidShippingContact](invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatusPINRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatusPINLockout](pinlockout.md): PIN retry limit exceeded.
