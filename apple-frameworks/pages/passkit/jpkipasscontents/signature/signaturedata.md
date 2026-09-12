> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/jpkipasscontents/signature/signaturedata](https://developer.apple.com/documentation/passkit/jpkipasscontents/signature/signaturedata)

# signatureData

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The result of signing the data provided by the caller using the requested digital identity.

## Declaration

```swift
let signatureData: Data
```

<a id="Discussion"></a>

## Discussion

The pass determines the signature data format.

## See Also

### Defining the certificate and signed data

- [certificate](certificate.md): The certificate associated with an identity document.
