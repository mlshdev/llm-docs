> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenterrorkey](https://developer.apple.com/documentation/passkit/pkpaymenterrorkey)

# PKPaymentErrorKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Additional details about an error on the Apple Pay sheet.

## Declaration

```swift
struct PKPaymentErrorKey
```

<a id="Discussion"></a>

## Discussion

Use payment error keys if you are creating a payment error without using one of the convenience methods in [PKPaymentRequest](pkpaymentrequest.md) (such as [paymentBillingAddressInvalidError(withKey:localizedDescription:)](pkpaymentrequest/paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md) or others).

The payment error keys indicate a specific field that has an error, for example, the street field of an address.

## Topics

### Initializing a payment error key

- [init(rawValue:)](pkpaymenterrorkey/init%28rawvalue_%29.md): Create an error key given the raw value.

### Error keys

- [postalAddressUserInfoKey](pkpaymenterrorkey/postaladdressuserinfokey.md): Payment error key that indicates errors with the postal address.
- [contactFieldUserInfoKey](pkpaymenterrorkey/contactfielduserinfokey.md): Payment error key that indicates errors with the contact information.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [PKDisbursementError](pkdisbursementerror.md): A structure that describes errors that can occur while processing the disbursement.
- [PKDisbursementErrorKey](pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentError](pkpaymenterror.md): An error type that you create to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentError.Code](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKDisbursementError.Code](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.

# PKPaymentErrorKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Additional details about an error on the Apple Pay sheet.

## Declaration

```objectivec
typedef NSString * PKPaymentErrorKey;
```

<a id="Discussion"></a>

## Discussion

Use payment error keys if you are creating a payment error without using one of the convenience methods in [PKPaymentRequest](pkpaymentrequest.md) (such as [paymentBillingAddressInvalidErrorWithKey:localizedDescription:](pkpaymentrequest/paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md) or others).

The payment error keys indicate a specific field that has an error, for example, the street field of an address.

## Topics

### Error keys

- [PKPaymentErrorPostalAddressUserInfoKey](pkpaymenterrorkey/postaladdressuserinfokey.md): Payment error key that indicates errors with the postal address.
- [PKPaymentErrorContactFieldUserInfoKey](pkpaymenterrorkey/contactfielduserinfokey.md): Payment error key that indicates errors with the contact information.

## See Also

### Errors

- [PKDisbursementErrorKey](pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentErrorCode](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKDisbursementErrorCode](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.
