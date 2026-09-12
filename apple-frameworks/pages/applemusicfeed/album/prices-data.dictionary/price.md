> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/album/prices-data.dictionary/price](https://developer.apple.com/documentation/applemusicfeed/album/prices-data.dictionary/price)

# Album.Prices.Price

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

Information about a pricing offer.

## Declaration

```
object Album.Prices.Price
```

## Properties

- `currencyCode` — `string`: The currency for the offer in ISO 4217 format.
- `price` — `number`: The price for the offer.
- `priceType` — `string`: The type of content availability for the offer. The possible values are `buy`, `streaming`, and `preorder`.
- `quality` — `string`: The audio quality for the offer. The possible values are `standard-definition` and `high-definition`.

<a id="Discussion"></a>

## Discussion

See the [Album.Prices](../prices-data.dictionary.md) data example.
