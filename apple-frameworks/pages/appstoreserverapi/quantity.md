> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/quantity

# quantity

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The number of products or seats the customer purchased.

## Declaration

```
int32 quantity
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

For a subscription that a customer buys as a multiseat purchase, this value is the number of seats the purchase covers. For all other in-app purchase types, it’s the number of products the customer bought.

## See Also

### Product information

- [productId](productid.md): The unique identifier of the product.
- [type](type.md): The type of In-App Purchase products you can offer in your app.
- [subscriptionGroupIdentifier](subscriptiongroupidentifier.md): The identifier of the subscription group that the subscription belongs to.
