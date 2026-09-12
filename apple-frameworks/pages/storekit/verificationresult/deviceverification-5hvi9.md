> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/deviceverification-5hvi9](https://developer.apple.com/documentation/storekit/verificationresult/deviceverification-5hvi9)

# deviceVerification

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The device verification value to use to verify whether the subscription renewal information belongs to the device.

## Declaration

```swift
var deviceVerification: Data { get }
```

<a id="Discussion"></a>

## Discussion

For more information about using the device verification value, see [deviceVerification](../transaction/deviceverification.md).

This value is identical to the [deviceVerification](../product/subscriptioninfo/renewalinfo/deviceverification.md) value in [Product.SubscriptionInfo.RenewalInfo](../product/subscriptioninfo/renewalinfo.md).

## See Also

### Getting properties for subscription renewal information

- [jwsRepresentation](jwsrepresentation-178oj.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The subscription renewal information signed by the App Store, in JWS Compact Serialization format.
- [deviceVerificationNonce](deviceverificationnonce-6mzfc.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The UUID for computing the device verification value.
- [signedDate](signeddate-3tvo5.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The date that the App Store signed the JWS subscription renewal information.
- [headerData](headerdata-3be0o.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The header component of the JWS subscription renewal information.
- [payloadData](payloaddata-abfv.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The payload component of the JWS subscription renewal information.
- [signedData](signeddata-1t80n.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The subscription renewal information data that the signature applies to.
- [signatureData](signaturedata-9uw8c.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The signature component of the JWS subscription renewal information.
- [signature](signature-95r7x.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The signature component of the JSON web signature.
