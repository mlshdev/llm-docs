> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/ad/status-data.typealias

# Ad.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving status for an ad.

## Declaration

```
string Ad.Status
```

## Possible Values

- `ENABLED`: The advertiser has set the ad to run, so it can participate in auctions.
- `PAUSED`: The advertiser has paused the ad, so it does not participate in auctions.

<a id="Discussion"></a>

## Discussion

The `Status` field controls auction eligibility directly, while the system-computed [Ad.SystemStatus](systemstatus-data.typealias.md) reflects whether the ad is actually delivering.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [AdStatus](../adstatus.md) for additional context.
