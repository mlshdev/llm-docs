> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationstatus/invalidbillingpostaladdress](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationstatus/invalidbillingpostaladdress)

# PKPaymentAuthorizationStatus.invalidBillingPostalAddress (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Invalid or unusable billing address.

> Use [PKPaymentAuthorizationResult](../pkpaymentauthorizationresult.md) with the [PKPaymentAuthorizationStatus.failure](failure.md) status instead.  Include the result of [paymentBillingAddressInvalidError(withKey:localizedDescription:)](../pkpaymentrequest/paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md) in the errors array.

## Declaration

```swift
case invalidBillingPostalAddress
```

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatus.success](success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatus.failure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatus.invalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatus.invalidShippingContact](invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatus.pinRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatus.pinIncorrect](pinincorrect.md): Incorrect PIN entered.
- [PKPaymentAuthorizationStatus.pinLockout](pinlockout.md): PIN retry limit exceeded.

# PKPaymentAuthorizationStatusInvalidBillingPostalAddress (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Invalid or unusable billing address.

> Use [PKPaymentAuthorizationResult](../pkpaymentauthorizationresult.md) with the [PKPaymentAuthorizationStatusFailure](failure.md) status instead.  Include the result of [paymentBillingAddressInvalidErrorWithKey:localizedDescription:](../pkpaymentrequest/paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md) in the errors array.

## Declaration

```objectivec
PKPaymentAuthorizationStatusInvalidBillingPostalAddress
```

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatusSuccess](success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatusFailure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatusInvalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatusInvalidShippingContact](invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatusPINRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatusPINIncorrect](pinincorrect.md): Incorrect PIN entered.
- [PKPaymentAuthorizationStatusPINLockout](pinlockout.md): PIN retry limit exceeded.
