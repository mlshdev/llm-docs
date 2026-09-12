> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adcreate](https://developer.apple.com/documentation/apple-ads-platform-api/adcreate)

# AdCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for creating a new Ad object.

## Declaration

```
object AdCreate
```

## Properties

- `adGroupId` — `int64` (required): The ad group this ad belongs to. Must be a valid ad group ID within the same account.
- `creativeId` — `int64` (required): The identifier of the ad creative to link to this ad. The ad creative must have a `systemStatus` of `VALID`.
- `name` — `string` (required): Advertiser-given name for this ad. Must be at least 1 character long.
  **Minimum length:** `1`
- `status` — `AdCreate.Status` (required): Advertiser-configurable status. Set to `ENABLED` to allow the ad to participate in auctions, or `PAUSED` to create it in a suspended state. See [AdStatus](adstatus.md).

<a id="Discussion"></a>

## Discussion

Creating an ad links an ad creative to an ad group with `POST /v1/ads` ([Create an Ad](post-ads.md)).

An ad can’t be enabled until its parent ad group and campaign are also enabled.

<a id="Example"></a>

### Example

```json
{
  "adGroupId": 555666777,
  "creativeId": 666777888,
  "name": "AwayFinder Default Product Page",
  "status": "ENABLED"
}
```

## Topics

### Type Aliases

- [AdCreate.Status](adcreate/status-data.typealias.md): Advertiser-configurable status set when creating an ad.

## See Also

- [Ad](ad.md): Ad entity that links an ad creative to an ad group for serving.
- [AdUpdate](adupdate.md): The request body for updating an existing Ad object.
- [AdResponse](adresponse.md): The response object for an Ad operation.
- [AdQueryResponse](adqueryresponse.md): The response object for an Ad query, containing matched results and pagination metadata.
