> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementerror/code](https://developer.apple.com/documentation/passkit/pkdisbursementerror/code)

# PKDisbursementError.Code (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Values that describe errors that can occur while processing the disbursement.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [PKDisbursementError.Code.recipientContactInvalidError](code/recipientcontactinvaliderror.md): The recipient’s contact information wasn’t valid.
- [PKDisbursementError.Code.unsupportedCardError](code/unsupportedcarderror.md): The framework doesn’t support the card the individual presented.
- [PKDisbursementError.Code.unknownError](code/unknownerror.md): An unknown error occurred.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [PKDisbursementError](../pkdisbursementerror.md): A structure that describes errors that can occur while processing the disbursement.
- [PKDisbursementErrorKey](../pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentError](../pkpaymenterror.md): An error type that you create to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentError.Code](../pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](../pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKPaymentErrorDomain](../pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](../pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.

# PKDisbursementErrorCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Values that describe errors that can occur while processing the disbursement.

## Declaration

```objectivec
enum PKDisbursementErrorCode : NSInteger;
```

## Topics

### Error codes

- [PKDisbursementRecipientContactInvalidError](code/recipientcontactinvaliderror.md): The recipient’s contact information wasn’t valid.
- [PKDisbursementUnsupportedCardError](code/unsupportedcarderror.md): The framework doesn’t support the card the individual presented.
- [PKDisbursementUnknownError](code/unknownerror.md): An unknown error occurred.

## See Also

### Errors

- [PKDisbursementErrorKey](../pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentErrorCode](../pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](../pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKPaymentErrorDomain](../pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](../pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.
