> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/jwsrepresentation-178oj](https://developer.apple.com/documentation/storekit/verificationresult/jwsrepresentation-178oj)

# jwsRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The subscription renewal information signed by the App Store, in JWS Compact Serialization format.

## Declaration

```swift
var jwsRepresentation: String { get }
```

<a id="Discussion"></a>

## Discussion

Use this JSON Web Signature (JWS) value to perform your own JWS verification on your server or on the device.

The [jwsRepresentation](jwsrepresentation-21vgo.md) is the same as the [JWSRenewalInfo](../../appstoreserverapi/jwsrenewalinfo.md) that the App Store Server API returns, and the [JWSRenewalInfo](../../appstoreservernotifications/jwsrenewalinfo.md) that you receive from App Store Server Notifications. The [jwsRepresentation](jwsrepresentation-21vgo.md)’s decoded payload contains two additional fields: `deviceVerification` and `deviceVerificationNonce`. Use these fields on the device to verify that the JWS information belongs to the device. For more information, see [deviceVerificationID](../appstore/deviceverificationid.md).

To verify the [jwsRepresentation](jwsrepresentation-178oj.md) on your server, consider using the App Store Server Library function `verifyAndDecodeRenewalInfo`, available in each language the library supports. For more information, see [Simplifying your implementation by using the App Store Server Library](../../appstoreserverapi/simplifying-your-implementation-by-using-the-app-store-server-library.md).

> **Important**

>  The decoded payloads of the [jwsRepresentation](jwsrepresentation-21vgo.md) and [JWSRenewalInfo](../../appstoreserverapi/jwsrenewalinfo.md) strings contain [renewalPrice](../../appstoreserverapi/renewalprice.md) fields that are specified in *milliunits* of the currency; StoreKit represents the [renewalPrice](../product/subscriptioninfo/renewalinfo/renewalprice.md) in *units* of currency. Take care not to confuse these two representations when working with both APIs.

## See Also

### Getting properties for subscription renewal information

- [deviceVerification](deviceverification-5hvi9.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The device verification value to use to verify whether the subscription renewal information belongs to the device.
- [deviceVerificationNonce](deviceverificationnonce-6mzfc.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The UUID for computing the device verification value.
- [signedDate](signeddate-3tvo5.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The date that the App Store signed the JWS subscription renewal information.
- [headerData](headerdata-3be0o.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The header component of the JWS subscription renewal information.
- [payloadData](payloaddata-abfv.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The payload component of the JWS subscription renewal information.
- [signedData](signeddata-1t80n.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The subscription renewal information data that the signature applies to.
- [signatureData](signaturedata-9uw8c.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The signature component of the JWS subscription renewal information.
- [signature](signature-95r7x.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The signature component of the JSON web signature.
