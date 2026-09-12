> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/signeddate-8x9bg](https://developer.apple.com/documentation/storekit/verificationresult/signeddate-8x9bg)

# signedDate

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The date that the App Store signed the JWS transaction.

## Declaration

```swift
var signedDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

Use the [signedDate](signeddate-8x9bg.md) to verify whether the certificate used to sign the transaction was valid when the App Store signed the transaction.

## See Also

### Getting properties for transactions

- [jwsRepresentation](jwsrepresentation-21vgo.md): Conforms when `SignedType` is `Transaction`. The transaction signed by the App Store, in JWS Compact Serialization format.
- [deviceVerification](deviceverification-69lvx.md): Conforms when `SignedType` is `Transaction`. The device verification value to use to verify whether the transaction belongs to the device.
- [deviceVerificationNonce](deviceverificationnonce-9dfrn.md): Conforms when `SignedType` is `Transaction`. The UUID for computing the device verification value.
- [headerData](headerdata-9egfp.md): Conforms when `SignedType` is `Transaction`. The header component of the JWS transaction.
- [payloadData](payloaddata-uyle.md): Conforms when `SignedType` is `Transaction`. The payload component of the JWS transaction.
- [signedData](signeddata-56usp.md): Conforms when `SignedType` is `Transaction`. The transaction data that the signature applies to.
- [signatureData](signaturedata-4pyv8.md): Conforms when `SignedType` is `Transaction`. The signature component of the JWS transaction.
- [signature](signature-7t1ne.md): Conforms when `SignedType` is `Transaction`. The signature component of the JSON web signature.
