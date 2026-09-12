> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/books/attributes-data.dictionary/offers-data.dictionary](https://developer.apple.com/documentation/devicemanagement/books/attributes-data.dictionary/offers-data.dictionary)

# Books.Attributes.Offers

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

## Declaration

```
object Books.Attributes.Offers
```

## Properties

- `assets` — `[Books.Attributes.Offers.Assets]`:
- `buyParams` — `string`:
- `currencyCode` — `string`:
- `discounts` — `[Books.Attributes.Offers.Discounts]`:
- `download` — `Books.Attributes.Offers.Download`:
- `expectedReleaseDate` — `string`:
- `offerSummary` — `string`:
- `price` — `number`:
- `priceFormatted` — `string`:
- `pricePerUnit` — `number`:
- `pricePerUnitFormatted` — `string`:
- `quantity` — `integer`:
- `recurringSubscriptionPeriod` — `string`:
- `type` — `string` (required): **Allowed values:** `anonymousDownload`, `buy`, `complete`, `get`, `preorder`, `preordered`, `purchased`, `radio`, `redownload`, `rent`, `subscribe`, `subscription`, `update`

## Topics

### Related Objects

- [Books.Attributes.Offers.Assets](offers-data.dictionary/assets-data.dictionary.md)
- [Books.Attributes.Offers.Discounts](offers-data.dictionary/discounts-data.dictionary.md)
- [Books.Attributes.Offers.Download](offers-data.dictionary/download-data.dictionary.md)

## See Also

### Related Objects

- [Books.Attributes.SeriesInfo](seriesinfo-data.dictionary.md)
- [Books.Attributes.TaxExclusivePrices](taxexclusiveprices-data.dictionary.md)
- [Books.Attributes.UserRating](userrating-data.dictionary.md)
