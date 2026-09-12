> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/sharedsecret/hkdfderivedsymmetrickey(using:salt:sharedinfo:outputbytecount:)](https://developer.apple.com/documentation/cryptokit/sharedsecret/hkdfderivedsymmetrickey(using:salt:sharedinfo:outputbytecount:))

# hkdfDerivedSymmetricKey(using:salt:sharedInfo:outputByteCount:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Derives a symmetric encryption key from the secret using HKDF key derivation.

## Declaration

```swift
func hkdfDerivedSymmetricKey<H, Salt, SI>(using hashFunction: H.Type, salt: Salt, sharedInfo: SI, outputByteCount: Int) -> SymmetricKey where H : HashFunction, Salt : DataProtocol, SI : DataProtocol
```

## Parameters

- `hashFunction`: The hash function to use for key derivation.
- `salt`: The salt to use for key derivation.
- `sharedInfo`: The shared information to use for key derivation.
- `outputByteCount`: The length in bytes of resulting symmetric key.

<a id="return-value"></a>

## Return Value

The derived symmetric key.

## See Also

### Deriving keys

- [x963DerivedSymmetricKey(using:sharedInfo:outputByteCount:)](x963derivedsymmetrickey%28using_sharedinfo_outputbytecount_%29.md): Derives a symmetric encryption key from the secret using x9.63 key derivation.
