> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionchangemetadatarequest](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionchangemetadatarequest)

# SubscriptionChangeMetadataRequest

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The request body you provide to change the metadata of a subscription.

## Declaration

```
object SubscriptionChangeMetadataRequest
```

## Properties

- `descriptors` — `SubscriptionChangeMetadataDescriptors`:
- `items` — `[SubscriptionChangeMetadataItem]`:
- `requestInfo` — `RequestInfo` (required):
- `storefront` — `storefront`:
- `taxCode` — `taxCode`:

## See Also

### Subscription metadata changes from the server

- [Change Subscription Metadata](change-subscription-metadata.md): Update the SKU, display name, and description associated with a subscription, without affecting the subscription’s billing or its service.
- [SubscriptionChangeMetadataResponse](subscriptionchangemetadataresponse.md): The response body for a successful subscription metadata change.
- [SubscriptionChangeMetadataDescriptors](subscriptionchangemetadatadescriptors.md): The subscription metadata to change, specifically the description and display name.
- [SubscriptionChangeMetadataItem](subscriptionchangemetadataitem.md): The metadata to change for an item, specifically its SKU, description, and display name.
