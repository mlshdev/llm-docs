> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkdisbursementerror/unknownerror

# unknownError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

A value that indicates an unknown error occurred.

## Declaration

```swift
static var unknownError: PKDisbursementError.Code { get }
```

## See Also

### Type properties

- [errorDomain](errordomain.md)
- [recipientContactInvalidError](recipientcontactinvaliderror.md): A value that indicates the recipient’s contact information is invalid.
- [unsupportedCardError](unsupportedcarderror.md): A value that indicates that the framework doesn’t support the card the individual presented for this disbursement.
