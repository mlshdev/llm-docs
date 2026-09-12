> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation)

# jsonRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The JSON representation of the subscription renewal information.

## Declaration

```swift
var jsonRepresentation: Data { get }
```

<a id="Discussion"></a>

## Discussion

The [jsonRepresentation](jsonrepresentation.md) is UTF-8 string data that has the same JSON schema as the [JWSRenewalInfoDecodedPayload](../../../../appstoreserverapi/jwsrenewalinfodecodedpayload.md) object. You can use the JSON data to decode the subscription renewal information into your own data type, or use the [Product.SubscriptionInfo.RenewalInfo](../renewalinfo.md) value and its properties directly.

The JSON Web Signature (JWS) Compact Serialization for the subscription renewal information is available in the [jwsRepresentation](../../../verificationresult/jwsrepresentation-178oj.md) property of the [VerificationResult](../../../verificationresult.md). The JWS string consists of three Base64URL-encoded components, separated by a period: a header, a payload, and a signature. The [jsonRepresentation](../../../transaction/jsonrepresentation.md) is the Base64URL-decoded payload component.

> **Note**

>  If you send the subscription renewal information to your server or store it, use the [jwsRepresentation](../../../verificationresult/jwsrepresentation-178oj.md) and validate the signature before parsing it.
