> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/advancedcommerceapi/subscriptioncancelrequest

# SubscriptionCancelRequest

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The request body for turning off automatic renewal of a subscription.

## Declaration

```
object SubscriptionCancelRequest
```

## Properties

- `requestInfo` — `RequestInfo` (required):
- `storefront` — `storefront`:

## See Also

### Subscription cancellation from the server

- [Cancel a Subscription](cancel-a-subscription.md): Turn off automatic renewal to cancel a customer’s auto-renewable subscription.
- [SubscriptionCancelResponse](subscriptioncancelresponse.md): The response body for a successful subscription cancellation.
