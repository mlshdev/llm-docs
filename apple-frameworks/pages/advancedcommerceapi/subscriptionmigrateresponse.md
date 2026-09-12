> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/subscriptionmigrateresponse](https://developer.apple.com/documentation/advancedcommerceapi/subscriptionmigrateresponse)

# SubscriptionMigrateResponse

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

A response that contains signed renewal and transaction information after a subscription successfully migrates to the Advanced Commerce API.

## Declaration

```
object SubscriptionMigrateResponse
```

## Properties

- `signedRenewalInfo` — `JWSRenewalInfo` (required): Subscription renewal information signed by the App Store, in JSON Web Signature (JWS) format, for the migrated subscription.
- `signedTransactionInfo` — `JWSTransaction` (required): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format, for the migrated subscription.

<a id="Discussion"></a>

## Discussion

This is the response body for the [Migrate a Subscription to Advanced Commerce API](migrate-subscription-to-advanced-commerce-api.md) endpoint.

## See Also

### Migration from the server

- [Migrate a Subscription to Advanced Commerce API](migrate-subscription-to-advanced-commerce-api.md): Migrate a subscription that a customer purchased through In-App Purchase to a subscription you manage using the Advanced Commerce API.
- [SubscriptionMigrateRequest](subscriptionmigraterequest.md): The subscription details you provide to migrate a subscription from In-App Purchase to the Advanced Commerce API, such as descriptors, items, storefront, and more.
- [SubscriptionMigrateItem](subscriptionmigrateitem.md): The SKU, description, and display name to use for a migrated subscription item.
- [SubscriptionMigrateRenewalItem](subscriptionmigraterenewalitem.md): The item information that replaces a migrated subscription item when the subscription renews.
- [SubscriptionMigrateDescriptors](subscriptionmigratedescriptors.md): The description and display name of the subscription to migrate to that you manage.
