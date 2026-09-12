> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroup/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adgroup/status-data.typealias)

# AdGroup.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving status for an ad group.

## Declaration

```
string AdGroup.Status
```

## Possible Values

- `ENABLED`: The ad group is active and eligible to serve ads.
- `PAUSED`: The ad group is paused and will not serve ads.

<a id="Discussion"></a>

## Discussion

This field directly controls auction eligibility for the ad group, independent of the system-computed [AdGroup.SystemStatus](systemstatus-data.typealias.md).

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [AdGroupStatus](../adgroupstatus.md) for additional context.
