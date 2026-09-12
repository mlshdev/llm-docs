> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationstatus](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationstatus)

# PKPaymentAuthorizationStatus (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

General success and failure status for payment authorization.

## Declaration

```swift
enum PKPaymentAuthorizationStatus
```

<a id="overview"></a>

## Overview

You pass the payment authorization status along with related [errors](pkpaymentauthorizationresult/errors.md), if any,  to the completion block in [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md).

Use the PIN status constants only when working in a region that requires 6-digit PIN numbers. To authorize a payment, follow this workflow:

1. The app sets up the payment request and displays the authorization view controller.
2. The user authorizes the payment.
3. If the purchase amount exceeds the user’s PIN limit or if the purchase uses a currency code other than the one expected by the bank, Apple Pay prompts the user for their PIN.
4. The user enters their PIN.
5. Apple Pay calls the delegate’s [paymentAuthorizationViewController(\_:didAuthorizePayment:completion:)](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md) method.
6. The app either processes the payment or uses a third-party SDK to process the payment. During this step, the PIN number is passed to the bank as part of the [PKPaymentToken](pkpaymenttoken.md) object.
7. As soon as the payment is processed, the app calls the completion block, passing the appropriate [PKPaymentAuthorizationStatus](pkpaymentauthorizationstatus.md) constant. If the bank reports a problem with the PIN, use the corresponding PIN status constant.

For more information on PIN requirements, check with your payment processor.

## Topics

### Payment authorization status constants

- [PKPaymentAuthorizationStatus.success](pkpaymentauthorizationstatus/success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatus.failure](pkpaymentauthorizationstatus/failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatus.invalidBillingPostalAddress](pkpaymentauthorizationstatus/invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatus.invalidShippingPostalAddress](pkpaymentauthorizationstatus/invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatus.invalidShippingContact](pkpaymentauthorizationstatus/invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatus.pinRequired](pkpaymentauthorizationstatus/pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatus.pinIncorrect](pkpaymentauthorizationstatus/pinincorrect.md): Incorrect PIN entered.
- [PKPaymentAuthorizationStatus.pinLockout](pkpaymentauthorizationstatus/pinlockout.md): PIN retry limit exceeded.

### Initializers

- [init(rawValue:)](pkpaymentauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting payment authorization status and errors

- [errors](pkpaymentauthorizationresult/errors.md): List of errors in the Apple Pay sheet.
- [status](pkpaymentauthorizationresult/status.md): Payment authorization general status.

# PKPaymentAuthorizationStatus (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

General success and failure status for payment authorization.

## Declaration

```objectivec
enum PKPaymentAuthorizationStatus : NSInteger;
```

<a id="overview"></a>

## Overview

You pass the payment authorization status along with related [errors](pkpaymentauthorizationresult/errors.md), if any,  to the completion block in [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md).

Use the PIN status constants only when working in a region that requires 6-digit PIN numbers. To authorize a payment, follow this workflow:

1. The app sets up the payment request and displays the authorization view controller.
2. The user authorizes the payment.
3. If the purchase amount exceeds the user’s PIN limit or if the purchase uses a currency code other than the one expected by the bank, Apple Pay prompts the user for their PIN.
4. The user enters their PIN.
5. Apple Pay calls the delegate’s [paymentAuthorizationViewController:didAuthorizePayment:completion:](pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md) method.
6. The app either processes the payment or uses a third-party SDK to process the payment. During this step, the PIN number is passed to the bank as part of the [PKPaymentToken](pkpaymenttoken.md) object.
7. As soon as the payment is processed, the app calls the completion block, passing the appropriate [PKPaymentAuthorizationStatus](pkpaymentauthorizationstatus.md) constant. If the bank reports a problem with the PIN, use the corresponding PIN status constant.

For more information on PIN requirements, check with your payment processor.

## Topics

### Payment authorization status constants

- [PKPaymentAuthorizationStatusSuccess](pkpaymentauthorizationstatus/success.md): Merchant successfully authorized the transaction, or the transaction is expected to succeed.
- [PKPaymentAuthorizationStatusFailure](pkpaymentauthorizationstatus/failure.md): Merchant failed to authorize the transaction.
- [PKPaymentAuthorizationStatusInvalidBillingPostalAddress](pkpaymentauthorizationstatus/invalidbillingpostaladdress.md): Deprecated. Invalid or unusable billing address.
- [PKPaymentAuthorizationStatusInvalidShippingPostalAddress](pkpaymentauthorizationstatus/invalidshippingpostaladdress.md): Deprecated. Invalid or unusable shipping address.
- [PKPaymentAuthorizationStatusInvalidShippingContact](pkpaymentauthorizationstatus/invalidshippingcontact.md): Deprecated. Invalid or incomplete shipping contact.
- [PKPaymentAuthorizationStatusPINRequired](pkpaymentauthorizationstatus/pinrequired.md): Transaction requires PIN entry.
- [PKPaymentAuthorizationStatusPINIncorrect](pkpaymentauthorizationstatus/pinincorrect.md): Incorrect PIN entered.
- [PKPaymentAuthorizationStatusPINLockout](pkpaymentauthorizationstatus/pinlockout.md): PIN retry limit exceeded.

## See Also

### Setting payment authorization status and errors

- [errors](pkpaymentauthorizationresult/errors.md): List of errors in the Apple Pay sheet.
- [status](pkpaymentauthorizationresult/status.md): Payment authorization general status.
