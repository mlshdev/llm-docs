> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreservernotifications/quantity

# quantity

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The number of products or seats the customer purchased.

## Declaration

```
int32 quantity
```

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)

<a id="Discussion"></a>

## Discussion

For a subscription that a customer buys as a multiseat purchase, this value is the number of seats the purchase covers. For all other in-app purchase types, it’s the number of products the customer bought.

## See Also

### Product information

- [productId](productid.md): The product identifier of the In-App Purchase.
- [type](type.md): The product type of the In-App Purchase.
- [subscriptionGroupIdentifier](subscriptiongroupidentifier.md): The identifier of the subscription group that the subscription belongs to.
