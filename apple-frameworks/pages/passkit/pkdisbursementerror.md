> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementerror](https://developer.apple.com/documentation/passkit/pkdisbursementerror)

# PKDisbursementError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

A structure that describes errors that can occur while processing the disbursement.

## Declaration

```swift
struct PKDisbursementError
```

## Topics

### Error details

- [PKDisbursementError.Code](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [errorCode](../foundation/customnserror/errorcode-2opgi.md): The error code within the given domain.
- [errorUserInfo](../foundation/customnserror/erroruserinfo-1aas5.md): The default user-info dictionary.

### Type properties

- [errorDomain](pkdisbursementerror/errordomain.md)
- [recipientContactInvalidError](pkdisbursementerror/recipientcontactinvaliderror.md): A value that indicates the recipient’s contact information is invalid.
- [unknownError](pkdisbursementerror/unknownerror.md): A value that indicates an unknown error occurred.
- [unsupportedCardError](pkdisbursementerror/unsupportedcarderror.md): A value that indicates that the framework doesn’t support the card the individual presented for this disbursement.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [PKDisbursementErrorKey](pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentError](pkpaymenterror.md): An error type that you create to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentError.Code](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKDisbursementError.Code](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.
