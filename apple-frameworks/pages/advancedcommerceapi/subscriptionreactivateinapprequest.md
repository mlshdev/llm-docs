> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionreactivateinapprequest](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionreactivateinapprequest)

# SubscriptionReactivateInAppRequest

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The request your app provides to reactivate a subscription that has automatic renewal turned off.

## Declaration

```
object SubscriptionReactivateInAppRequest
```

## Properties

- `items` — `[SubscriptionReactivateItem]`:
- `operation` — `string` (required): **Allowed values:** `REACTIVATE_SUBSCRIPTION`
- `requestInfo` — `RequestInfo` (required):
- `storefront` — `storefront`:
- `transactionId` — `transactionId` (required):
- `version` — `version` (required):

## See Also

### Subscription reactivation in the app

- [SubscriptionReactivateItem](subscriptionreactivateitem.md): An item in a subscription to reactive.
