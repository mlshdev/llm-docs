> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/deviceverificationnonce-6082b](https://developer.apple.com/documentation/storekit/verificationresult/deviceverificationnonce-6082b)

# deviceVerificationNonce

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The UUID for computing the device verification value.

## Declaration

```swift
var deviceVerificationNonce: UUID { get }
```

<a id="Discussion"></a>

## Discussion

Use the lowercased nonce when computing the [deviceVerification](deviceverification-6c8xu.md) value.

This value is identical to the [deviceVerificationNonce](../apptransaction/deviceverificationnonce.md) value in [AppTransaction](../apptransaction.md).

## See Also

### Getting properties for app transactions

- [jwsRepresentation](jwsrepresentation-6ma59.md): Conforms when `SignedType` is `AppTransaction`. The app transaction signed by the App Store, in JWS Compact Serialization format.
- [deviceVerification](deviceverification-6c8xu.md): Conforms when `SignedType` is `AppTransaction`. The device verification value to use to verify whether the app transaction belongs to the device.
- [signedDate](signeddate-24zch.md): Conforms when `SignedType` is `AppTransaction`. The date that the App Store signed the JWS app transaction.
- [headerData](headerdata-3drrl.md): Conforms when `SignedType` is `AppTransaction`. The header component of the JWS app transaction.
- [payloadData](payloaddata-97acz.md): Conforms when `SignedType` is `AppTransaction`. The payload component of the JWS app transaction.
- [signedData](signeddata-99fyo.md): Conforms when `SignedType` is `AppTransaction`. The app transaction data that the signature applies to.
- [signatureData](signaturedata-4pvv0.md): Conforms when `SignedType` is `AppTransaction`. The signature component of the JWS app transaction.
- [signature](signature-6d5ue.md): Conforms when `SignedType` is `AppTransaction`. The signature component of the JSON web signature.
