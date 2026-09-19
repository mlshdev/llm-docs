> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/advancedcommerceapi/subscriptionpricechangeresponse

# SubscriptionPriceChangeResponse

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

A response that contains signed JWS renewal and JWS transaction information after a subscription price change request.

## Declaration

```
object SubscriptionPriceChangeResponse
```

## Properties

- `signedRenewalInfo` — `JWSRenewalInfo` (required): Subscription renewal information signed by the App Store, in JSON Web Signature (JWS) format.
- `signedTransactionInfo` — `JWSTransaction` (required): Transaction information signed by the App Store, in JWS Compact Serialization format.

<a id="Discussion"></a>

## Discussion

This is the response body for the [Change Subscription Price](change-subscription-price.md) endpoint.

## See Also

### Subscription price change from the server

- [Change Subscription Price](change-subscription-price.md): Increase or decrease the price of an auto-renewable subscription, a bundle, or individual items within a subscription at the next renewal.
- [SubscriptionPriceChangeRequest](subscriptionpricechangerequest.md): The request body you use to change the price of an auto-renewable subscription.
