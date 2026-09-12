> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/jwsrepresentation-6ma59](https://developer.apple.com/documentation/storekit/verificationresult/jwsrepresentation-6ma59)

# jwsRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app transaction signed by the App Store, in JWS Compact Serialization format.

## Declaration

```swift
var jwsRepresentation: String { get }
```

<a id="Discussion"></a>

## Discussion

Use this JSON Web Signature (JWS) value to perform your own JWS verification on your server or on the device.

To verify the [jwsRepresentation](jwsrepresentation-6ma59.md) on your server, consider using the App Store Server Library function `verifyAndDecodeAppTransaction`, available in each language the library supports. For more information, see [Simplifying your implementation by using the App Store Server Library](../../appstoreserverapi/simplifying-your-implementation-by-using-the-app-store-server-library.md).

The [jwsRepresentation](jwsrepresentation-6ma59.md)’s decoded payload contains the fields `deviceVerification` and `deviceVerificationNonce`. Use these fields on the device to verify that the JWS information belongs to the device. For more information, see [deviceVerificationID](../appstore/deviceverificationid.md).

## See Also

### Getting properties for app transactions

- [deviceVerification](deviceverification-6c8xu.md): Conforms when `SignedType` is `AppTransaction`. The device verification value to use to verify whether the app transaction belongs to the device.
- [deviceVerificationNonce](deviceverificationnonce-6082b.md): Conforms when `SignedType` is `AppTransaction`. The UUID for computing the device verification value.
- [signedDate](signeddate-24zch.md): Conforms when `SignedType` is `AppTransaction`. The date that the App Store signed the JWS app transaction.
- [headerData](headerdata-3drrl.md): Conforms when `SignedType` is `AppTransaction`. The header component of the JWS app transaction.
- [payloadData](payloaddata-97acz.md): Conforms when `SignedType` is `AppTransaction`. The payload component of the JWS app transaction.
- [signedData](signeddata-99fyo.md): Conforms when `SignedType` is `AppTransaction`. The app transaction data that the signature applies to.
- [signatureData](signaturedata-4pvv0.md): Conforms when `SignedType` is `AppTransaction`. The signature component of the JWS app transaction.
- [signature](signature-6d5ue.md): Conforms when `SignedType` is `AppTransaction`. The signature component of the JSON web signature.
