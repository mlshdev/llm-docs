> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentrequest/applepaylateravailability-swift.enum/unavailable(_:)

# PKPaymentRequest.ApplePayLaterAvailability.unavailable(\_:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS · watchOS

Apple Pay Later is not available.

> Apple Pay Later is deprecated.

## Declaration

```swift
case unavailable(PKPaymentRequest.ApplePayLaterAvailability.Reason)
```

## Parameters

- `reason`: The reason the transaction is not eligible for Apple Pay Later.

## See Also

### Availability

- [PKPaymentRequest.ApplePayLaterAvailability.available](available.md): Deprecated. Apple Pay Later is available.
