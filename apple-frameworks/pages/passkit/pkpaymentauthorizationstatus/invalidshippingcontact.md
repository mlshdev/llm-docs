> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationstatus/invalidshippingcontact](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationstatus/invalidshippingcontact)

# PKPaymentAuthorizationStatus.invalidShippingContact (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Invalid or incomplete shipping contact.

> Use [PKPaymentAuthorizationResult](../pkpaymentauthorizationresult.md) with the [PKPaymentAuthorizationStatus.failure](failure.md) status instead.  Include the result of [paymentContactInvalidError(withContactField:localizedDescription:)](../pkpaymentrequest/paymentcontactinvaliderror%28withcontactfield_localizeddescription_%29.md) in the errors array.

## Declaration

```swift
case invalidShippingContact
```

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatus.success](success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatus.failure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatus.invalidBillingPostalAddress](invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatus.invalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatus.pinRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatus.pinIncorrect](pinincorrect.md): Incorrect PIN entered.
- [PKPaymentAuthorizationStatus.pinLockout](pinlockout.md): PIN retry limit exceeded.

# PKPaymentAuthorizationStatusInvalidShippingContact (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Invalid or incomplete shipping contact.

> Use [PKPaymentAuthorizationResult](../pkpaymentauthorizationresult.md) with the [PKPaymentAuthorizationStatusFailure](failure.md) status instead.  Include the result of [paymentContactInvalidErrorWithContactField:localizedDescription:](../pkpaymentrequest/paymentcontactinvaliderror%28withcontactfield_localizeddescription_%29.md) in the errors array.

## Declaration

```objectivec
PKPaymentAuthorizationStatusInvalidShippingContact
```

## See Also

### Payment authorization status constants

- [PKPaymentAuthorizationStatusSuccess](success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatusFailure](failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatusInvalidBillingPostalAddress](invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatusInvalidShippingPostalAddress](invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatusPINRequired](pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatusPINIncorrect](pinincorrect.md): Incorrect PIN entered.
- [PKPaymentAuthorizationStatusPINLockout](pinlockout.md): PIN retry limit exceeded.
