> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/producttype](https://developer.apple.com/documentation/externalpurchaseserverapi/producttype)

# productType

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The type of product in the transaction, whether it’s a one-time buy, or a subscription.

## Declaration

```
string productType
```

## Possible Values

- `ONE_TIME_BUY`:
- `SUBSCRIPTION`:

<a id="Discussion"></a>

## Discussion

Allowed values: `ONE_TIME_BUY`, `SUBSCRIPTION`

Use  `ONE_TIME_BUY` for in-app products that customers purchase once. Use `SUBSCRIPTION` for in-app products that have periodic renewals.

## See Also

### Providing product info

- [productIdentifier](productidentifier.md): A string that identifies the product.
- [quantity](quantity.md): The quantity of the product the customer purchased in a single transaction.
