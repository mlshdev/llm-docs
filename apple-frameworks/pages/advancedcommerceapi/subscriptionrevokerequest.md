> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionrevokerequest](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionrevokerequest)

# SubscriptionRevokeRequest

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The request body you provide to terminate a subscription and all its items immediately.

## Declaration

```
object SubscriptionRevokeRequest
```

## Properties

- `refundReason` — `refundReason` (required):
- `refundRiskingPreference` — `refundRiskingPreference` (required):
- `refundType` — `string` (required): **Allowed values:** `FULL`, `PRORATED`
- `requestInfo` — `RequestInfo` (required):
- `storefront` — `storefront`:

<a id="Discussion"></a>

## Discussion

This is the request body for the [Revoke Subscription](revoke-subscription.md) endpoint.

## See Also

### Subscription revocation from the server

- [Revoke Subscription](revoke-subscription.md): Immediately cancel a customer’s subscription and all the items that are included in the subscription, and request a full or prorated refund.
- [SubscriptionRevokeResponse](subscriptionrevokeresponse.md): The response body for a successful revoke-subscription request.
