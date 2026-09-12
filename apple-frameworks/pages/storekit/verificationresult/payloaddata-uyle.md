> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/payloaddata-uyle](https://developer.apple.com/documentation/storekit/verificationresult/payloaddata-uyle)

# payloadData

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The payload component of the JWS transaction.

## Declaration

```swift
var payloadData: Data { get }
```

<a id="Discussion"></a>

## Discussion

This value is the same as the [jsonRepresentation](../transaction/jsonrepresentation.md) in [Transaction](../transaction.md).

## See Also

### Getting properties for transactions

- [jwsRepresentation](jwsrepresentation-21vgo.md): Conforms when `SignedType` is `Transaction`. The transaction signed by the App Store, in JWS Compact Serialization format.
- [deviceVerification](deviceverification-69lvx.md): Conforms when `SignedType` is `Transaction`. The device verification value to use to verify whether the transaction belongs to the device.
- [deviceVerificationNonce](deviceverificationnonce-9dfrn.md): Conforms when `SignedType` is `Transaction`. The UUID for computing the device verification value.
- [signedDate](signeddate-8x9bg.md): Conforms when `SignedType` is `Transaction`. The date that the App Store signed the JWS transaction.
- [headerData](headerdata-9egfp.md): Conforms when `SignedType` is `Transaction`. The header component of the JWS transaction.
- [signedData](signeddata-56usp.md): Conforms when `SignedType` is `Transaction`. The transaction data that the signature applies to.
- [signatureData](signaturedata-4pyv8.md): Conforms when `SignedType` is `Transaction`. The signature component of the JWS transaction.
- [signature](signature-7t1ne.md): Conforms when `SignedType` is `Transaction`. The signature component of the JSON web signature.
