> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applicensedeliverysdk/aldprovider/init(encryptioncert:signingcert:pask:signingkey:)](https://developer.apple.com/documentation/applicensedeliverysdk/aldprovider/init(encryptioncert:signingcert:pask:signingkey:))

# init(encryptionCert:signingCert:PASK:signingKey:)

**Framework:** App License Delivery SDK  
**Kind:** Initializer

Initializes a provider with the marketplace’s App License Delivery assets and their unique signing key.

## Declaration

```swift
init(encryptionCert: [UInt8], signingCert: [UInt8], PASK: [UInt8], signingKey: [UInt8]? = nil)
```

## Parameters

- `encryptionCert`: Apple issued encryption certificate in bytes.
- `signingCert`: Apple issued signing certificate in bytes.
- `PASK`: Apple provided secret blob.
- `signingKey`: Private key corresponding to the `signingCert` in `.DER` format with `ANS.1` encoding. This parameter is optional if you choose to sign the license response manually.

## Mentioned In

- [Licensing alternative distribution apps](../licensing-alternative-distribution-apps.md)

<a id="discussion"></a>

## Discussion

For an example that uses a provider, see [Licensing alternative distribution apps](../licensing-alternative-distribution-apps.md).
