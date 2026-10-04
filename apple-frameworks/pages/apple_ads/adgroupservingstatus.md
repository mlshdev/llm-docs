> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adgroupservingstatus

# AdGroupServingStatus

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The status of whether the ad group is serving.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
string AdGroupServingStatus
```

## Possible Values

- `RUNNING`: The [AdGroup](adgroup.md) is running.
- `NOT_RUNNING`: The [AdGroup](adgroup.md) is not running.

## See Also

### Data Types

- [AdGroupDisplayStatus](adgroupdisplaystatus.md): Deprecated. The status of the ad group.
- [AdGroupServingStateReasons](adgroupservingstatereasons.md): Deprecated. A list of reasons that displays when an ad group isn’t running.
- [AdGroupStatus](adgroupstatus.md): Deprecated. The status of whether the ad group is enabled or not.
- [DeviceClass](deviceclass.md): Deprecated. The defined targeted audience to include by device type.
- [Gender](gender.md): Deprecated. The defined targeted audience in a campaign.
- [PricingModel](pricingmodel.md): Deprecated. The type of pricing model for a bid.
