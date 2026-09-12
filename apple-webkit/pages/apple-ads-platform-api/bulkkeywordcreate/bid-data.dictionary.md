> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bulkkeywordcreate/bid-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/bulkkeywordcreate/bid-data.dictionary)

# BulkKeywordCreate.Bid

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The keyword-level bid amount for a bulk keyword create item.

## Declaration

```
object BulkKeywordCreate.Bid
```

## Properties

- `currency` — `string`: The ISO 4217 currency code (for example, `"USD"`, `"EUR"`). Must match the ad account’s currency.
- `amount` — `string` (required): The monetary amount as a decimal string (for example, `"10.00"`), represented as a string to preserve decimal precision.

<a id="Discussion"></a>

## Discussion

The keyword-level bid amount for a bulk keyword create item, expressed as a `Money` object with `amount` and `currency`. It overrides the ad group’s default bid for this keyword. Omit the field or pass `null` to default to the ad group’s `BidStrategy` bid instead. This bid isn’t used with Maximize Conversions bid strategy campaigns.

See [BulkKeywordCreate](../bulkkeywordcreate.md) for the full field reference.

See also [Money](../money.md) for the amount and currency structure.
