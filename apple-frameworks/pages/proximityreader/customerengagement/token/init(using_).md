> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/customerengagement/token/init(using:)

# init(using:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a customer engagement token.

## Declaration

```swift
init(using token: PaymentCardReader.Token)
```

## Parameters

- `token`: The token from your payment service provider.

<a id="discussion"></a>

## Discussion

This creates a token using the [PaymentCardReader.Token](../../paymentcardreader/token.md) from your payment service provider.
