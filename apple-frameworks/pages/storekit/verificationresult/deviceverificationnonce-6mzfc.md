> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/deviceverificationnonce-6mzfc](https://developer.apple.com/documentation/storekit/verificationresult/deviceverificationnonce-6mzfc)

# deviceVerificationNonce

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The UUID for computing the device verification value.

## Declaration

```swift
var deviceVerificationNonce: UUID { get }
```

<a id="Discussion"></a>

## Discussion

Use the lowercased nonce when computing the [deviceVerification](deviceverification-5hvi9.md) value.

This value is identical to the [deviceVerificationNonce](../product/subscriptioninfo/renewalinfo/deviceverificationnonce.md) value in [Product.SubscriptionInfo.RenewalInfo](../product/subscriptioninfo/renewalinfo.md).

## See Also

### Getting properties for subscription renewal information

- [jwsRepresentation](jwsrepresentation-178oj.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The subscription renewal information signed by the App Store, in JWS Compact Serialization format.
- [deviceVerification](deviceverification-5hvi9.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The device verification value to use to verify whether the subscription renewal information belongs to the device.
- [signedDate](signeddate-3tvo5.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The date that the App Store signed the JWS subscription renewal information.
- [headerData](headerdata-3be0o.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The header component of the JWS subscription renewal information.
- [payloadData](payloaddata-abfv.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The payload component of the JWS subscription renewal information.
- [signedData](signeddata-1t80n.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The subscription renewal information data that the signature applies to.
- [signatureData](signaturedata-9uw8c.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The signature component of the JWS subscription renewal information.
- [signature](signature-95r7x.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The signature component of the JSON web signature.
