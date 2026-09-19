> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/jpkipasscontents/signature/certificate

# certificate

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The certificate associated with an identity document.

## Declaration

```swift
let certificate: JPKIPassContents.Certificate<IdentityType>
```

## See Also

### Defining the certificate and signed data

- [signatureData](signaturedata.md): The result of signing the data provided by the caller using the requested digital identity.
