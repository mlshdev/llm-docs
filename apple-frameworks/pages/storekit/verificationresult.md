> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult](https://developer.apple.com/documentation/storekit/verificationresult)

# VerificationResult

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that describes the result of a StoreKit verification.

## Declaration

```swift
@frozen enum VerificationResult<SignedType>
```

## Mentioned In

- [Supporting offer codes in your app](supporting-offer-codes-in-your-app.md)

<a id="overview"></a>

## Overview

StoreKit automatically verifies the [Transaction](transaction.md), [Product.SubscriptionInfo.RenewalInfo](product/subscriptioninfo/renewalinfo.md), and [AppTransaction](apptransaction.md) values. To access the wrapped values, check whether the values are verified or unverified.

In addition to getting a verification result from StoreKit, you might want to verify the signed information yourself, either on the device, or on your server for the most control and security. Perform the verification on the [jwsRepresentation](verificationresult/jwsrepresentation-178oj.md) property for subscription renewal information, the [jwsRepresentation](verificationresult/jwsrepresentation-21vgo.md) property for transactions, and the [jwsRepresentation](verificationresult/jwsrepresentation-6ma59.md) property for an app transaction.

To verify the [jwsRepresentation](verificationresult/jwsrepresentation-21vgo.md) on your server, consider using the verification functions in the App Store Server Library. The library provides the functions `verifyAndDecodeTransaction`, `verifyAndDecodeAppTransaction`, and `verifyAndDecodeRenewalInfo` in each language the library supports. For more information, see [Simplifying your implementation by using the App Store Server Library](../appstoreserverapi/simplifying-your-implementation-by-using-the-app-store-server-library.md).

The [jwsRepresentation](verificationresult/jwsrepresentation-21vgo.md) string is in JWS Compact Serialization format and is the same as its counterpart in the App Store server APIs, as follows:

| StoreKit string | Equivalent in the App Store Server API | Equivalent in App Store Server Notifications |
| --- | --- | --- |
| [jwsRepresentation](verificationresult/jwsrepresentation-178oj.md) for subscription renewal information | [JWSRenewalInfo](../appstoreserverapi/jwsrenewalinfo.md) | [JWSRenewalInfo](../appstoreservernotifications/jwsrenewalinfo.md) |
| [jwsRepresentation](verificationresult/jwsrepresentation-21vgo.md) for transactions | [JWSTransaction](../appstoreserverapi/jwstransaction.md) | [JWSTransaction](../appstoreservernotifications/jwstransaction.md) |

The decoded payload of the [jwsRepresentation](verificationresult/jwsrepresentation-21vgo.md) contains  two additional fields: `deviceVerification` and `deviceVerificationNonce`. Use these fields on the device to verify that JWS information belongs to the device. For more information, see [deviceVerificationID](appstore/deviceverificationid.md).

> **Important**

>  The decoded payloads of [jwsRepresentation](verificationresult/jwsrepresentation-21vgo.md) and [JWSTransaction](../appstoreserverapi/jwstransaction.md) strings contain [price](../appstoreserverapi/price.md) or [renewalPrice](../appstoreserverapi/renewalprice.md) fields specified in *milliunits* of the currency.  StoreKit represents the `price` and [renewalPrice](product/subscriptioninfo/renewalinfo/renewalprice.md) values in is *units* of the currency. Take care not to confuse these two representations when working with both APIs.

## Topics

### Getting the verification results

- [VerificationResult.verified(\_:)](verificationresult/verified%28__%29.md): The associated value passed StoreKit automatic verification checks.
- [VerificationResult.unverified(\_:\_:)](verificationresult/unverified%28____%29.md): The associated value failed StoreKit automatic verification checks.
- [payloadValue](verificationresult/payloadvalue.md): The verified value of the signed type that StoreKit confirms as verified.
- [unsafePayloadValue](verificationresult/unsafepayloadvalue.md): The associated value of the verification result that StoreKit doesn’t confirm as verified.
- [VerificationResult.VerificationError](verificationresult/verificationerror.md): Error cases for StoreKit JWS verification.

### Getting properties for transactions

- [jwsRepresentation](verificationresult/jwsrepresentation-21vgo.md): Conforms when `SignedType` is `Transaction`. The transaction signed by the App Store, in JWS Compact Serialization format.
- [deviceVerification](verificationresult/deviceverification-69lvx.md): Conforms when `SignedType` is `Transaction`. The device verification value to use to verify whether the transaction belongs to the device.
- [deviceVerificationNonce](verificationresult/deviceverificationnonce-9dfrn.md): Conforms when `SignedType` is `Transaction`. The UUID for computing the device verification value.
- [signedDate](verificationresult/signeddate-8x9bg.md): Conforms when `SignedType` is `Transaction`. The date that the App Store signed the JWS transaction.
- [headerData](verificationresult/headerdata-9egfp.md): Conforms when `SignedType` is `Transaction`. The header component of the JWS transaction.
- [payloadData](verificationresult/payloaddata-uyle.md): Conforms when `SignedType` is `Transaction`. The payload component of the JWS transaction.
- [signedData](verificationresult/signeddata-56usp.md): Conforms when `SignedType` is `Transaction`. The transaction data that the signature applies to.
- [signatureData](verificationresult/signaturedata-4pyv8.md): Conforms when `SignedType` is `Transaction`. The signature component of the JWS transaction.
- [signature](verificationresult/signature-7t1ne.md): Conforms when `SignedType` is `Transaction`. The signature component of the JSON web signature.

### Getting properties for subscription renewal information

- [jwsRepresentation](verificationresult/jwsrepresentation-178oj.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The subscription renewal information signed by the App Store, in JWS Compact Serialization format.
- [deviceVerification](verificationresult/deviceverification-5hvi9.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The device verification value to use to verify whether the subscription renewal information belongs to the device.
- [deviceVerificationNonce](verificationresult/deviceverificationnonce-6mzfc.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The UUID for computing the device verification value.
- [signedDate](verificationresult/signeddate-3tvo5.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The date that the App Store signed the JWS subscription renewal information.
- [headerData](verificationresult/headerdata-3be0o.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The header component of the JWS subscription renewal information.
- [payloadData](verificationresult/payloaddata-abfv.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The payload component of the JWS subscription renewal information.
- [signedData](verificationresult/signeddata-1t80n.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The subscription renewal information data that the signature applies to.
- [signatureData](verificationresult/signaturedata-9uw8c.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The signature component of the JWS subscription renewal information.
- [signature](verificationresult/signature-95r7x.md): Conforms when `SignedType` is `Product.SubscriptionInfo.RenewalInfo`. The signature component of the JSON web signature.

### Getting properties for app transactions

- [jwsRepresentation](verificationresult/jwsrepresentation-6ma59.md): Conforms when `SignedType` is `AppTransaction`. The app transaction signed by the App Store, in JWS Compact Serialization format.
- [deviceVerification](verificationresult/deviceverification-6c8xu.md): Conforms when `SignedType` is `AppTransaction`. The device verification value to use to verify whether the app transaction belongs to the device.
- [deviceVerificationNonce](verificationresult/deviceverificationnonce-6082b.md): Conforms when `SignedType` is `AppTransaction`. The UUID for computing the device verification value.
- [signedDate](verificationresult/signeddate-24zch.md): Conforms when `SignedType` is `AppTransaction`. The date that the App Store signed the JWS app transaction.
- [headerData](verificationresult/headerdata-3drrl.md): Conforms when `SignedType` is `AppTransaction`. The header component of the JWS app transaction.
- [payloadData](verificationresult/payloaddata-97acz.md): Conforms when `SignedType` is `AppTransaction`. The payload component of the JWS app transaction.
- [signedData](verificationresult/signeddata-99fyo.md): Conforms when `SignedType` is `AppTransaction`. The app transaction data that the signature applies to.
- [signatureData](verificationresult/signaturedata-4pvv0.md): Conforms when `SignedType` is `AppTransaction`. The signature component of the JWS app transaction.
- [signature](verificationresult/signature-6d5ue.md): Conforms when `SignedType` is `AppTransaction`. The signature component of the JSON web signature.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### JWS verification

- [VerificationResult.VerificationError](verificationresult/verificationerror.md): Error cases for StoreKit JWS verification.
