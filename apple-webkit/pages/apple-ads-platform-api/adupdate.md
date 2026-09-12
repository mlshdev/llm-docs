> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adupdate](https://developer.apple.com/documentation/apple-ads-platform-api/adupdate)

# AdUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for updating an existing Ad object.

## Declaration

```
object AdUpdate
```

## Properties

- `name` — `string`: Must be at least 1 character long if provided. Mutable.
  **Minimum length:** `1`
- `status` — `AdUpdate.Status`: See [AdStatus](adstatus.md). Mutable.

<a id="Discussion"></a>

## Discussion

To modify an existing ad, use `AdUpdate` with `PUT /v1/ads/{id}` ([Update an Ad](put-ads-_id_.md)). You can change only `name` and `status` after creation. The system locks in the ad’s creative, ad group, campaign, and ad account at creation. Omit any field you don’t want to update.

Setting `status` to `PAUSED` immediately stops the ad from entering auctions. Switching it back to `ENABLED` resumes participation.

<a id="Example"></a>

### Example

```json
{
  "name": "AwayFinder Summer Sale Ad",
  "status": "PAUSED"
}
```

## Topics

### Type Aliases

- [AdUpdate.Status](adupdate/status-data.typealias.md): Advertiser-configurable status set when updating an ad.

## See Also

- [Ad](ad.md): Ad entity that links an ad creative to an ad group for serving.
- [AdCreate](adcreate.md): The request body for creating a new Ad object.
- [AdResponse](adresponse.md): The response object for an Ad operation.
- [AdQueryResponse](adqueryresponse.md): The response object for an Ad query, containing matched results and pagination metadata.
