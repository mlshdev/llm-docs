> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroupupdate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adgroupupdate/status-data.typealias)

# AdGroupUpdate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving status for an ad group.

## Declaration

```
string AdGroupUpdate.Status
```

## Possible Values

- `ENABLED`: The ad group is active and eligible to serve ads.
- `PAUSED`: The ad group is paused and will not serve ads.

<a id="Discussion"></a>

## Discussion

Send `status: PAUSED` to stop an existing ad group from competing for delivery, or `ENABLED` to resume it.

<a id="Example"></a>

### Example

```json
{
  "status": "PAUSED"
}
```

See [AdGroupStatus](../adgroupstatus.md) for additional context.
