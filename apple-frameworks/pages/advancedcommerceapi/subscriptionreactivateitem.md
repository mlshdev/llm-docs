> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionreactivateitem](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionreactivateitem)

# SubscriptionReactivateItem

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

An item in a subscription to reactive.

## Declaration

```
object SubscriptionReactivateItem
```

## Properties

- `SKU` — `SKU` (required): The SKU of the item to reactivate.
  **Maximum length:** `128`

<a id="Discussion"></a>

## Discussion

This object is part of the [SubscriptionReactivateInAppRequest](subscriptionreactivateinapprequest.md) that your app uses to reactivate a subscription that would otherwise expire.

## See Also

### Subscription reactivation in the app

- [SubscriptionReactivateInAppRequest](subscriptionreactivateinapprequest.md): The request your app provides to reactivate a subscription that has automatic renewal turned off.
