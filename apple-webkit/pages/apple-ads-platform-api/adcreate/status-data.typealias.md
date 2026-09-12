> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adcreate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adcreate/status-data.typealias)

# AdCreate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable status set when creating an ad.

## Declaration

```
string AdCreate.Status
```

## Possible Values

- `ENABLED`: The advertiser has set the ad to run, so it can participate in auctions.
- `PAUSED`: The advertiser has paused the ad, so it does not participate in auctions.

<a id="Discussion"></a>

## Discussion

Include `status` in the create request to determine whether the new ad starts competing in auctions immediately or begins paused.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [AdStatus](../adstatus.md) for additional context.
