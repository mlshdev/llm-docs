> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/subscriptiongroupidentifier](https://developer.apple.com/documentation/appstoreserverapi/subscriptiongroupidentifier)

# subscriptionGroupIdentifier

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The identifier of the subscription group that the subscription belongs to.

## Declaration

```
string subscriptionGroupIdentifier
```

<a id="Discussion"></a>

## Discussion

Auto-renewable subscriptions always belong to a subscription group. You create the subscription group identifiers in App Store Connect before you create and add an auto-renewable subscription. For more information about subscription groups, see [Offer auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev75708c031).

## See Also

### Product information

- [productId](productid.md): The unique identifier of the product.
- [type](type.md): The type of In-App Purchase products you can offer in your app.
- [quantity](quantity.md): The number of purchased consumable products.
