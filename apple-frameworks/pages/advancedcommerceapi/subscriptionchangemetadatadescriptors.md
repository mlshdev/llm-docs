> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionchangemetadatadescriptors](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionchangemetadatadescriptors)

# SubscriptionChangeMetadataDescriptors

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The subscription metadata to change, specifically the description and display name.

## Declaration

```
object SubscriptionChangeMetadataDescriptors
```

## Properties

- `description` — `description`: The new description for the subscription.
  **Maximum length:** `45`
- `displayName` — `displayName`: The new display name for the subscription.
  **Maximum length:** `30`
- `effective` — `effective` (required): The string that determines when the metadata change goes into effect.

## See Also

### Subscription metadata changes from the server

- [Change Subscription Metadata](change-subscription-metadata.md): Update the SKU, display name, and description associated with a subscription, without affecting the subscription’s billing or its service.
- [SubscriptionChangeMetadataRequest](subscriptionchangemetadatarequest.md): The request body you provide to change the metadata of a subscription.
- [SubscriptionChangeMetadataResponse](subscriptionchangemetadataresponse.md): The response body for a successful subscription metadata change.
- [SubscriptionChangeMetadataItem](subscriptionchangemetadataitem.md): The metadata to change for an item, specifically its SKU, description, and display name.
