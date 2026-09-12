> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionrevokeresponse](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionrevokeresponse)

# SubscriptionRevokeResponse

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The response body for a successful revoke-subscription request.

## Declaration

```
object SubscriptionRevokeResponse
```

## Properties

- `signedRenewalInfo` — `JWSRenewalInfo` (required): Subscription renewal information signed by the App Store, in JSON Web Signature (JWS) format.
- `signedTransactionInfo` — `JWSTransaction` (required): Transaction information signed by the App Store, in JWS Compact Serialization format.

<a id="Discussion"></a>

## Discussion

This is the response body for the [Revoke Subscription](revoke-subscription.md) endpoint.

## See Also

### Subscription revocation from the server

- [Revoke Subscription](revoke-subscription.md): Immediately cancel a customer’s subscription and all the items that are included in the subscription, and request a full or prorated refund.
- [SubscriptionRevokeRequest](subscriptionrevokerequest.md): The request body you provide to terminate a subscription and all its items immediately.
