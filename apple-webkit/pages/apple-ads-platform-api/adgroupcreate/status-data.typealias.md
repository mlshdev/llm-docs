> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroupcreate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adgroupcreate/status-data.typealias)

# AdGroupCreate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving status for an ad group.

## Declaration

```
string AdGroupCreate.Status
```

## Possible Values

- `ENABLED`: The ad group is active and eligible to serve ads.
- `PAUSED`: The ad group is paused and will not serve ads.

<a id="Discussion"></a>

## Discussion

Include `status` in the create request to determine whether the new ad group begins competing for delivery immediately or starts paused.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [AdGroupStatus](../adgroupstatus.md) for additional context.
