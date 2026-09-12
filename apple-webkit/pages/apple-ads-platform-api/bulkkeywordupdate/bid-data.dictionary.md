> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bulkkeywordupdate/bid-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/bulkkeywordupdate/bid-data.dictionary)

# BulkKeywordUpdate.Bid

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The updated keyword-level bid amount for a bulk keyword update item.

## Declaration

```
object BulkKeywordUpdate.Bid
```

## Properties

- `currency` — `string`: The ISO 4217 currency code (for example, `"USD"`, `"EUR"`). Must match the ad account’s currency.
- `amount` — `string` (required): The monetary amount as a decimal string (for example, `"10.00"`), represented as a string to preserve decimal precision.

<a id="Discussion"></a>

## Discussion

The updated keyword-level bid amount for a bulk keyword update item, expressed as a `Money` object with `amount` and `currency`. It overrides the ad group’s default bid for this keyword. This bid isn’t used with Maximize Conversions bid strategy campaigns.

See [BulkKeywordUpdate](../bulkkeywordupdate.md) for the full field reference.
