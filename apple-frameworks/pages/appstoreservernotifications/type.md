> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreservernotifications/type

# type

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The product type of the In-App Purchase.

## Declaration

```
string type
```

## Possible Values

- `Auto-Renewable Subscription`: An auto-renewable subscription.
- `Non-Consumable`: A non-consumable In-App Purchase.
- `Consumable`: A consumable In-App Purchase.
- `Non-Renewing Subscription`: A non-renewing subscription.

## See Also

### Product information

- [productId](productid.md): The product identifier of the In-App Purchase.
- [subscriptionGroupIdentifier](subscriptiongroupidentifier.md): The identifier of the subscription group that the subscription belongs to.
- [quantity](quantity.md): The number of purchased consumable products.
