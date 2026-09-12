> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adupdate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adupdate/status-data.typealias)

# AdUpdate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable status set when updating an ad.

## Declaration

```
string AdUpdate.Status
```

## Possible Values

- `ENABLED`: The advertiser has set the ad to run, so it can participate in auctions.
- `PAUSED`: The advertiser has paused the ad, so it does not participate in auctions.

<a id="Discussion"></a>

## Discussion

Send `status: PAUSED` to stop an existing ad from competing in auctions, or `ENABLED` to resume it.

<a id="Example"></a>

### Example

```json
{
  "status": "PAUSED"
}
```

See [AdStatus](../adstatus.md) for additional context.
