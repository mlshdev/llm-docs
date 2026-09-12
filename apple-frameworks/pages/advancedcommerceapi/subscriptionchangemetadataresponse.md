> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionchangemetadataresponse](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionchangemetadataresponse)

# SubscriptionChangeMetadataResponse

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The response body for a successful subscription metadata change.

## Declaration

```
object SubscriptionChangeMetadataResponse
```

## Properties

- `signedRenewalInfo` — `JWSRenewalInfo` (required): Subscription renewal information signed by the App Store, in JSON Web Signature (JWS) format.
- `signedTransactionInfo` — `JWSTransaction` (required): Transaction information signed by the App Store, in JWS Compact Serialization format.

<a id="Discussion"></a>

## Discussion

This is the response body for the [Change Subscription Metadata](change-subscription-metadata.md) endpoint.

## See Also

### Subscription metadata changes from the server

- [Change Subscription Metadata](change-subscription-metadata.md): Update the SKU, display name, and description associated with a subscription, without affecting the subscription’s billing or its service.
- [SubscriptionChangeMetadataRequest](subscriptionchangemetadatarequest.md): The request body you provide to change the metadata of a subscription.
- [SubscriptionChangeMetadataDescriptors](subscriptionchangemetadatadescriptors.md): The subscription metadata to change, specifically the description and display name.
- [SubscriptionChangeMetadataItem](subscriptionchangemetadataitem.md): The metadata to change for an item, specifically its SKU, description, and display name.
