> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/signature-6d5ue](https://developer.apple.com/documentation/storekit/verificationresult/signature-6d5ue)

# signature

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The signature component of the JSON web signature.

## Declaration

```swift
var signature: P256.Signing.ECDSASignature { get }
```

<a id="Discussion"></a>

## Discussion

Use this [signature](signature-95r7x.md) with [Apple CryptoKit](../../cryptokit.md) if you verify the signature on the device.

## See Also

### Getting properties for app transactions

- [jwsRepresentation](jwsrepresentation-6ma59.md): Conforms when `SignedType` is `AppTransaction`. The app transaction signed by the App Store, in JWS Compact Serialization format.
- [deviceVerification](deviceverification-6c8xu.md): Conforms when `SignedType` is `AppTransaction`. The device verification value to use to verify whether the app transaction belongs to the device.
- [deviceVerificationNonce](deviceverificationnonce-6082b.md): Conforms when `SignedType` is `AppTransaction`. The UUID for computing the device verification value.
- [signedDate](signeddate-24zch.md): Conforms when `SignedType` is `AppTransaction`. The date that the App Store signed the JWS app transaction.
- [headerData](headerdata-3drrl.md): Conforms when `SignedType` is `AppTransaction`. The header component of the JWS app transaction.
- [payloadData](payloaddata-97acz.md): Conforms when `SignedType` is `AppTransaction`. The payload component of the JWS app transaction.
- [signedData](signeddata-99fyo.md): Conforms when `SignedType` is `AppTransaction`. The app transaction data that the signature applies to.
- [signatureData](signaturedata-4pvv0.md): Conforms when `SignedType` is `AppTransaction`. The signature component of the JWS app transaction.
