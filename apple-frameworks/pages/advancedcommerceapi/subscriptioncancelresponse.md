> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptioncancelresponse](https://developer.apple.com/documentation/advancedcommerceapi/subscriptioncancelresponse)

# SubscriptionCancelResponse

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The response body for a successful subscription cancellation.

## Declaration

```
object SubscriptionCancelResponse
```

## Properties

- `signedRenewalInfo` — `JWSRenewalInfo` (required): Subscription renewal information signed by the App Store, in JSON Web Signature (JWS) format.
- `signedTransactionInfo` — `JWSTransaction` (required): Transaction information signed by the App Store, in JWS Compact Serialization format.

<a id="Discussion"></a>

## Discussion

This is the response body for the [Cancel a Subscription](cancel-a-subscription.md) endpoint.

## See Also

### Subscription cancellation from the server

- [Cancel a Subscription](cancel-a-subscription.md): Turn off automatic renewal to cancel a customer’s auto-renewable subscription.
- [SubscriptionCancelRequest](subscriptioncancelrequest.md): The request body for turning off automatic renewal of a subscription.
