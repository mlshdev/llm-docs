> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroup/systemstatuslimitingreasons-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adgroup/systemstatuslimitingreasons-data.typealias)

# AdGroup.SystemStatusLimitingReasons

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Reasons that limit delivery for an ad group without fully stopping it.

## Declaration

```
string AdGroup.SystemStatusLimitingReasons
```

## Possible Values

- `LOCATION_POLICY_ISSUES`: The ad group’s location targeting contains areas with policy restrictions.
- `LOCATION_GROUP_ISSUES`: The ad group’s location group targeting has issues that limit delivery.
- `ADS_LIMITED`: One or more ads in the ad group are limited, reducing overall delivery.

<a id="Discussion"></a>

## Discussion

These reasons can stem from the ad group’s own location targeting or cascade up from limited ads within it, as with `ADS_LIMITED`.

<a id="Example"></a>

### Example

```json
{
  "systemStatusLimitingReasons": [
    "ADS_LIMITED"
  ]
}
```

See [AdGroupSystemLimitedStatusReason](../adgroupsystemlimitedstatusreason.md) for the full field reference.
