> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adgroupdisplaystatus

# AdGroupDisplayStatus

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The status of the ad group.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
string AdGroupDisplayStatus
```

## Possible Values

- `RUNNING`: The [AdGroup](adgroup.md) is running in the campaign.
- `ON_HOLD`: The [AdGroup](adgroup.md) is on hold.
- `PAUSED`: The [AdGroup](adgroup.md) is paused.
- `DELETED`: The [AdGroup](adgroup.md) has been deleted.

## See Also

### Data Types

- [AdGroupServingStateReasons](adgroupservingstatereasons.md): Deprecated. A list of reasons that displays when an ad group isn’t running.
- [AdGroupServingStatus](adgroupservingstatus.md): Deprecated. The status of whether the ad group is serving.
- [AdGroupStatus](adgroupstatus.md): Deprecated. The status of whether the ad group is enabled or not.
- [DeviceClass](deviceclass.md): Deprecated. The defined targeted audience to include by device type.
- [Gender](gender.md): Deprecated. The defined targeted audience in a campaign.
- [PricingModel](pricingmodel.md): Deprecated. The type of pricing model for a bid.
