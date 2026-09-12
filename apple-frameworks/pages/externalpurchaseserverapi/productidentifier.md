> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/productidentifier](https://developer.apple.com/documentation/externalpurchaseserverapi/productidentifier)

# productIdentifier

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

A string that identifies the product.

## Declaration

```
string productIdentifier
```

<a id="Discussion"></a>

## Discussion

Maximum length: 256

The product identifier that uniquely identifies the product available in your app.

## See Also

### Providing product info

- [productType](producttype.md): The type of product in the transaction, whether it’s a one-time buy, or a subscription.
- [quantity](quantity.md): The quantity of the product the customer purchased in a single transaction.
