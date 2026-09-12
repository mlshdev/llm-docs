> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/jwsrepresentation-21vgo](https://developer.apple.com/documentation/storekit/verificationresult/jwsrepresentation-21vgo)

# jwsRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The transaction signed by the App Store, in JWS Compact Serialization format.

## Declaration

```swift
var jwsRepresentation: String { get }
```

## Mentioned In

- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)
- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this JSON Web Signature (JWS) value to perform your own JWS verification on your server or on the device.

The [jwsRepresentation](jwsrepresentation-21vgo.md) is the same as the [JWSTransaction](../../appstoreserverapi/jwstransaction.md) that the App Store Server API returns and the [JWSTransaction](../../appstoreservernotifications/jwstransaction.md) that you receive from App Store Server Notifications. The [jwsRepresentation](jwsrepresentation-21vgo.md)’s decoded payload contains two additional fields: `deviceVerification` and `deviceVerificationNonce`. Use these fields on the device to verify that the JWS information belongs to the device. For more information, see [deviceVerificationID](../appstore/deviceverificationid.md).

To verify the [jwsRepresentation](jwsrepresentation-21vgo.md) on your server, consider using the App Store Server Library function `verifyAndDecodeTransaction`, available in each language the library supports. For more information, see [Simplifying your implementation by using the App Store Server Library](../../appstoreserverapi/simplifying-your-implementation-by-using-the-app-store-server-library.md).

> **Important**

>  The decoded payloads of the [jwsRepresentation](jwsrepresentation-21vgo.md) and [JWSTransaction](../../appstoreserverapi/jwstransaction.md) strings contain [price](../../appstoreserverapi/price.md) fields that are specified in *milliunits* of the currency;  StoreKit represents the `price`  in *units* of currency. Take care not to confuse these two representations when working with both APIs.

## See Also

### Getting properties for transactions

- [deviceVerification](deviceverification-69lvx.md): Conforms when `SignedType` is `Transaction`. The device verification value to use to verify whether the transaction belongs to the device.
- [deviceVerificationNonce](deviceverificationnonce-9dfrn.md): Conforms when `SignedType` is `Transaction`. The UUID for computing the device verification value.
- [signedDate](signeddate-8x9bg.md): Conforms when `SignedType` is `Transaction`. The date that the App Store signed the JWS transaction.
- [headerData](headerdata-9egfp.md): Conforms when `SignedType` is `Transaction`. The header component of the JWS transaction.
- [payloadData](payloaddata-uyle.md): Conforms when `SignedType` is `Transaction`. The payload component of the JWS transaction.
- [signedData](signeddata-56usp.md): Conforms when `SignedType` is `Transaction`. The transaction data that the signature applies to.
- [signatureData](signaturedata-4pyv8.md): Conforms when `SignedType` is `Transaction`. The signature component of the JWS transaction.
- [signature](signature-7t1ne.md): Conforms when `SignedType` is `Transaction`. The signature component of the JSON web signature.
