> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementerrordomain](https://developer.apple.com/documentation/passkit/pkdisbursementerrordomain)

# PKDisbursementErrorDomain (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

The error domain to use for errors with in-app disbursements.

## Declaration

```swift
let PKDisbursementErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

Use the [PKDisbursementErrorDomain](pkdisbursementerrordomain.md) to create your own [PKDisbursementError](pkdisbursementerror.md) objects, and return them to indicate problems with a transfer.

## See Also

### Errors

- [PKDisbursementError](pkdisbursementerror.md): A structure that describes errors that can occur while processing the disbursement.
- [PKDisbursementErrorKey](pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentError](pkpaymenterror.md): An error type that you create to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentError.Code](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKDisbursementError.Code](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.

# PKDisbursementErrorDomain (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

The error domain to use for errors with in-app disbursements.

## Declaration

```objectivec
extern NSString * const PKDisbursementErrorDomain;
```

<a id="Discussion"></a>

## Discussion

Use the [PKDisbursementErrorDomain](pkdisbursementerrordomain.md) to create your own [PKDisbursementError](pkdisbursementerror.md) objects, and return them to indicate problems with a transfer.

## See Also

### Errors

- [PKDisbursementErrorKey](pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentErrorCode](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKDisbursementErrorCode](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
