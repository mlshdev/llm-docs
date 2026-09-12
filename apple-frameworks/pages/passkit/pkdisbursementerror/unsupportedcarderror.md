> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementerror/unsupportedcarderror](https://developer.apple.com/documentation/passkit/pkdisbursementerror/unsupportedcarderror)

# unsupportedCardError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

A value that indicates that the framework doesn’t support the card the individual presented for this disbursement.

## Declaration

```swift
static var unsupportedCardError: PKDisbursementError.Code { get }
```

## See Also

### Type properties

- [errorDomain](errordomain.md)
- [recipientContactInvalidError](recipientcontactinvaliderror.md): A value that indicates the recipient’s contact information is invalid.
- [unknownError](unknownerror.md): A value that indicates an unknown error occurred.
