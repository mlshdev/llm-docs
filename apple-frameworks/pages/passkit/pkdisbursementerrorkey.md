> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementerrorkey](https://developer.apple.com/documentation/passkit/pkdisbursementerrorkey)

# PKDisbursementErrorKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Values that describe errors that can occur when processing disbursements.

## Declaration

```swift
struct PKDisbursementErrorKey
```

## Topics

### Initializers

- [init(rawValue:)](pkdisbursementerrorkey/init%28rawvalue_%29.md): Create a new disbursement error key with the provided value.

### Type properties

- [contactFieldUserInfoKey](pkdisbursementerrorkey/contactfielduserinfokey.md): The contact field the error relates to.

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
- [PKPaymentError](pkpaymenterror.md): An error type that you create to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentError.Code](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKDisbursementError.Code](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.

# PKDisbursementErrorKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Values that describe errors that can occur when processing disbursements.

## Declaration

```objectivec
typedef NSString * PKDisbursementErrorKey;
```

## Topics

### Type properties

- [PKDisbursementErrorContactFieldUserInfoKey](pkdisbursementerrorkey/contactfielduserinfokey.md): The contact field the error relates to.

## See Also

### Errors

- [PKPaymentErrorCode](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKDisbursementErrorCode](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.
