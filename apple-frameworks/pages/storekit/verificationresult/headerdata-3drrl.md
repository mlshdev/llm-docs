> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/headerdata-3drrl](https://developer.apple.com/documentation/storekit/verificationresult/headerdata-3drrl)

# headerData

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The header component of the JWS app transaction.

## Declaration

```swift
var headerData: Data { get }
```

## See Also

### Getting properties for app transactions

- [jwsRepresentation](jwsrepresentation-6ma59.md): Conforms when `SignedType` is `AppTransaction`. The app transaction signed by the App Store, in JWS Compact Serialization format.
- [deviceVerification](deviceverification-6c8xu.md): Conforms when `SignedType` is `AppTransaction`. The device verification value to use to verify whether the app transaction belongs to the device.
- [deviceVerificationNonce](deviceverificationnonce-6082b.md): Conforms when `SignedType` is `AppTransaction`. The UUID for computing the device verification value.
- [signedDate](signeddate-24zch.md): Conforms when `SignedType` is `AppTransaction`. The date that the App Store signed the JWS app transaction.
- [payloadData](payloaddata-97acz.md): Conforms when `SignedType` is `AppTransaction`. The payload component of the JWS app transaction.
- [signedData](signeddata-99fyo.md): Conforms when `SignedType` is `AppTransaction`. The app transaction data that the signature applies to.
- [signatureData](signaturedata-4pvv0.md): Conforms when `SignedType` is `AppTransaction`. The signature component of the JWS app transaction.
- [signature](signature-6d5ue.md): Conforms when `SignedType` is `AppTransaction`. The signature component of the JSON web signature.
