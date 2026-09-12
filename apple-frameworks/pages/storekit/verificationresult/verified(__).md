> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/verificationresult/verified(_:)](https://developer.apple.com/documentation/storekit/verificationresult/verified(_:))

# VerificationResult.verified(\_:)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The associated value passed StoreKit automatic verification checks.

## Declaration

```swift
case verified(SignedType)
```

## Mentioned In

- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)
- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The associated value in this case is the App Store-signed value.

## See Also

### Getting the verification results

- [VerificationResult.unverified(\_:\_:)](unverified%28____%29.md): The associated value failed StoreKit automatic verification checks.
- [payloadValue](payloadvalue.md): The verified value of the signed type that StoreKit confirms as verified.
- [unsafePayloadValue](unsafepayloadvalue.md): The associated value of the verification result that StoreKit doesn’t confirm as verified.
- [VerificationResult.VerificationError](verificationerror.md): Error cases for StoreKit JWS verification.
